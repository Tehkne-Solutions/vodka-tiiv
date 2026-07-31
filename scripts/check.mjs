import { access, readFile, readdir, stat } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const src = join(root, 'src');
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}

const files = await walk(src);
const indexPath = join(src, 'index.html');
const html = await readFile(indexPath, 'utf8');

for (const required of [
  '<title>',
  'name="description"',
  'rel="canonical"',
  'application/ld+json',
  'data-age-gate',
  'Tehkné Solutions',
]) {
  if (!html.includes(required)) errors.push(`index.html não contém: ${required}`);
}

const localReferences = [...html.matchAll(/(?:src|href)="([^"#?:]+)"/g)].map((match) => match[1]);
for (const reference of localReferences) {
  const target = join(src, reference);
  try {
    await access(target);
  } catch {
    errors.push(`Referência local inexistente: ${reference}`);
  }
}

for (const file of files) {
  const extension = extname(file).toLowerCase();
  const info = await stat(file);
  if (['.png', '.jpg', '.jpeg', '.webp'].includes(extension) && info.size > 250_000) {
    errors.push(`Imagem acima de 250 KB: ${file.replace(`${root}/`, '')}`);
  }
  const name = file.toLowerCase();
  if (name.includes('greatpages') || name.includes('ga-audiences') || name.includes('insight_tag')) {
    errors.push(`Artefato externo indevido: ${file.replace(`${root}/`, '')}`);
  }
}

if (/http:\/\//.test(html)) errors.push('index.html contém recurso HTTP inseguro.');

if (errors.length) {
  console.error('\nFalhas de qualidade:\n');
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Qualidade validada: ${files.length} arquivos, referências locais e limites de assets OK.`);
