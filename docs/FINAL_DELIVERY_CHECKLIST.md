# Checklist de Entrega Final — Vodka TiiV

> Esta lista deve ser concluída antes da publicação da versão `v1.0.0`.

## 1. Referência e conteúdo

- [ ] A versão oficial da página de referência foi congelada em screenshots.
- [ ] Foram registradas versões desktop, notebook, tablet e mobile.
- [ ] Todas as seções da referência foram inventariadas na ordem correta.
- [ ] Todos os textos foram copiados e revisados sem alterações indevidas.
- [ ] Telefones, WhatsApp, e-mails e redes sociais foram confirmados.
- [ ] Todos os CTAs possuem destino correto.
- [ ] Nenhum link de preview, editor ou infraestrutura do GreatPages permanece no site.
- [ ] As imagens utilizadas foram aprovadas pelo cliente.
- [ ] A fonte oficial e sua licença de uso foram confirmadas.
- [ ] Alegações sobre produto, processo, certificações e benefícios foram aprovadas.
- [ ] A advertência de consumo responsável foi aprovada.
- [ ] A indicação de conteúdo para maiores de 18 anos foi aprovada.

## 2. Organização do repositório

- [ ] `main` contém somente código estável.
- [ ] O código-fonte está em `src/`.
- [ ] O pacote de publicação está em `dist/`.
- [ ] Arquivos temporários e privados estão cobertos pelo `.gitignore`.
- [ ] Não existem credenciais, tokens, senhas ou IDs de teste no repositório.
- [ ] Commits seguem o padrão convencional definido.
- [ ] Pull requests possuem descrição e checklist de validação.
- [ ] README e documentação estão atualizados.
- [ ] A release final foi marcada com a tag `v1.0.0`.

## 3. HTML

- [ ] O documento usa HTML5 semântico.
- [ ] `lang="pt-BR"` está definido.
- [ ] Existe somente um `h1` principal.
- [ ] A hierarquia de títulos é lógica e sequencial.
- [ ] `header`, `nav`, `main`, `section`, `article` e `footer` são usados corretamente.
- [ ] Links e botões são utilizados de acordo com a ação executada.
- [ ] Imagens possuem `alt` apropriado ou `alt=""` quando decorativas.
- [ ] Imagens possuem largura e altura explícitas.
- [ ] Formulários possuem labels, mensagens e estados acessíveis.
- [ ] IDs são únicos.
- [ ] Não existem elementos obsoletos ou marcação inválida.
- [ ] O HTML passa na validação configurada.
- [ ] O conteúdo principal permanece disponível sem JavaScript.

## 4. CSS e fidelidade visual

- [ ] Cores oficiais estão centralizadas em design tokens.
- [ ] Tipografia, pesos, tamanhos e line-height correspondem à referência.
- [ ] Containers, margens e espaçamentos correspondem à referência.
- [ ] Bordas, raios, sombras, gradientes e opacidades foram comparados.
- [ ] Fundos e sobreposições possuem enquadramento correto.
- [ ] Imagens não estão esticadas, deformadas ou pixeladas.
- [ ] Estados hover, focus, active e disabled estão definidos.
- [ ] Não existem estilos inline desnecessários.
- [ ] Não existem seletores dependentes da estrutura interna do GreatPages.
- [ ] Não existem regras CSS mortas ou duplicações relevantes.
- [ ] O layout não apresenta overflow horizontal.
- [ ] O zoom a 200% não torna o conteúdo inutilizável.
- [ ] A comparação visual foi aprovada nas resoluções de referência.

## 5. Responsividade

- [ ] 1920 × 1080 validado.
- [ ] 1440 × 900 validado.
- [ ] 1366 × 768 validado.
- [ ] 1280 × 800 validado.
- [ ] 1024 × 768 validado.
- [ ] 768 × 1024 validado.
- [ ] 430 × 932 validado.
- [ ] 390 × 844 validado.
- [ ] 360 × 800 validado.
- [ ] 320 × 568 validado.
- [ ] Orientação retrato validada.
- [ ] Orientação paisagem validada.
- [ ] Menu mobile abre, fecha e restaura foco corretamente.
- [ ] Elementos fixos não cobrem conteúdo ou controles.
- [ ] Áreas de toque possuem tamanho confortável.
- [ ] Tipografia não quebra palavras ou corta linhas importantes.
- [ ] Galerias e grids reorganizam-se sem perda de conteúdo.

## 6. JavaScript e interações

- [ ] Não existem erros ou warnings relevantes no console.
- [ ] O JavaScript usa módulos e escopo controlado.
- [ ] A inicialização é defensiva quando elementos não existem.
- [ ] Menu e navegação por âncoras funcionam.
- [ ] Scroll suave respeita `prefers-reduced-motion`.
- [ ] Animações de entrada executam somente quando necessário.
- [ ] Animações usam preferencialmente `transform` e `opacity`.
- [ ] O site continua utilizável com animações reduzidas.
- [ ] Galeria/lightbox funciona por teclado e toque.
- [ ] O botão de WhatsApp usa número e mensagem aprovados.
- [ ] O age gate, quando aplicado, controla foco e persistência corretamente.
- [ ] Nenhum segredo ou chave privada aparece no JavaScript.
- [ ] Scripts de terceiros são carregados somente após aprovação.
- [ ] O comportamento foi testado com JavaScript desativado.

## 7. Imagens, fontes e mídia

- [ ] Arquivos foram renomeados semanticamente.
- [ ] Artefatos do editor e pixels de rastreamento foram removidos.
- [ ] O arquivo vazio encontrado no ZIP não foi importado.
- [ ] Cada imagem possui tamanho adequado ao uso real.
- [ ] AVIF e/ou WebP são usados quando vantajosos.
- [ ] Existe fallback compatível quando necessário.
- [ ] `srcset` e `sizes` estão configurados em imagens responsivas.
- [ ] Imagens abaixo da dobra usam lazy loading.
- [ ] O recurso LCP não usa lazy loading.
- [ ] Metadados desnecessários foram removidos.
- [ ] Fontes foram otimizadas e possuem `font-display` adequado.
- [ ] Não existem recursos carregados de domínios do GreatPages.
- [ ] Direitos de uso das imagens e fontes foram confirmados.

## 8. Performance

- [ ] Lighthouse Performance alcança a meta mínima definida em mobile.
- [ ] Lighthouse Performance alcança a meta mínima definida em desktop.
- [ ] LCP laboratorial é menor ou igual a 2,5 s.
- [ ] INP/indicadores de responsividade não apresentam bloqueios relevantes.
- [ ] CLS é menor ou igual a 0,1.
- [ ] O recurso LCP está corretamente priorizado.
- [ ] JavaScript não bloqueia a renderização inicial.
- [ ] CSS crítico e fontes não atrasam a primeira tela de forma desnecessária.
- [ ] Não existem imagens muito maiores que a área renderizada.
- [ ] Não existem dependências de produção desnecessárias.
- [ ] Cache de longa duração está configurado para assets versionados.
- [ ] Compressão Gzip/Brotli está ativa quando suportada.
- [ ] Não existem cadeias extensas de redirects.
- [ ] Não existem requisições 404.
- [ ] O orçamento de transferência da primeira tela foi respeitado.

## 9. Acessibilidade

- [ ] Lighthouse Accessibility alcança a meta mínima definida.
- [ ] Teste automatizado de acessibilidade não possui violações críticas.
- [ ] Toda a página é navegável por teclado.
- [ ] A ordem de foco é lógica.
- [ ] O foco é sempre visível.
- [ ] Contraste de texto e controles atende WCAG 2.2 AA.
- [ ] Landmarks são reconhecíveis.
- [ ] Links possuem textos descritivos.
- [ ] Botões com ícone possuem nome acessível.
- [ ] Conteúdo dinâmico comunica mudanças quando necessário.
- [ ] Modais controlam foco e podem ser fechados por teclado.
- [ ] Nenhuma informação depende exclusivamente de cor.
- [ ] Animações respeitam preferências do usuário.
- [ ] Foi realizada inspeção manual com leitor de tela.

## 10. SEO

- [ ] `<title>` foi aprovado e possui tamanho adequado.
- [ ] Meta description foi aprovada.
- [ ] Canonical aponta para a URL final.
- [ ] A versão canônica entre domínio raiz e `www` foi definida.
- [ ] Open Graph está completo.
- [ ] Twitter Card está completo.
- [ ] A imagem social possui proporção e qualidade adequadas.
- [ ] Favicon funciona nos principais navegadores.
- [ ] `site.webmanifest` é válido.
- [ ] `robots.txt` permite o rastreamento da versão pública.
- [ ] `sitemap.xml` contém somente URLs canônicas públicas.
- [ ] Dados estruturados usam apenas informações comprováveis.
- [ ] Dados estruturados passam no validador aplicável.
- [ ] Links internos e externos funcionam.
- [ ] Não existem meta tags `noindex` ou `nofollow` indevidas.
- [ ] A página retorna status HTTP 200.
- [ ] A página 404 retorna o comportamento correto permitido pela hospedagem.
- [ ] Search Console foi configurado ou entregue para configuração.
- [ ] Sitemap foi enviado após a publicação.

## 11. Privacidade, analytics e conformidade

- [ ] IDs oficiais de analytics foram fornecidos pelo cliente.
- [ ] Pixels antigos do GreatPages não foram copiados automaticamente.
- [ ] Tags do Google, Meta, LinkedIn ou outras foram inventariadas.
- [ ] O carregamento de tags respeita consentimento quando exigido.
- [ ] Política de privacidade está disponível quando há tratamento de dados.
- [ ] Política de cookies está disponível quando aplicável.
- [ ] Não são coletados dados além do necessário.
- [ ] Nenhum formulário envia dados para destino não aprovado.
- [ ] A comunicação é destinada ao público adulto.
- [ ] A advertência de consumo responsável está visível.
- [ ] Não há estímulo ao consumo excessivo ou irresponsável.
- [ ] Não há associação positiva entre álcool e direção.
- [ ] Não há conteúdo dirigido a crianças ou adolescentes.
- [ ] Alegações de saúde ou efeitos foram removidas ou formalmente aprovadas.
- [ ] O cliente aprovou a versão jurídica/comercial final.

## 12. Segurança e boas práticas

- [ ] HTTPS está ativo e válido.
- [ ] Todo recurso usa HTTPS.
- [ ] Não existe conteúdo misto.
- [ ] Redirecionamento HTTP para HTTPS está ativo.
- [ ] Cabeçalhos de segurança compatíveis com a hospedagem foram configurados.
- [ ] `target="_blank"` usa `rel="noopener noreferrer"` quando necessário.
- [ ] Dependências de desenvolvimento foram auditadas.
- [ ] Arquivos de configuração privados não estão públicos.
- [ ] Listagem de diretórios está desativada quando possível.
- [ ] Página e assets não expõem comentários internos ou dados de teste.

## 13. Compatibilidade

- [ ] Google Chrome atual validado.
- [ ] Microsoft Edge atual validado.
- [ ] Firefox atual validado.
- [ ] Safari atual validado.
- [ ] Chrome Android validado.
- [ ] Safari iOS validado.
- [ ] Fallbacks funcionam em navegadores sem AVIF.
- [ ] Recursos modernos possuem degradação aceitável.
- [ ] O site funciona com conexão móvel limitada.

## 14. UOL Host e publicação

- [ ] Plano e painel de hospedagem foram identificados.
- [ ] Domínio final foi confirmado.
- [ ] DNS foi conferido antes da janela de publicação.
- [ ] Diretório público correto foi confirmado (`Web`, `public_html` ou equivalente).
- [ ] Credenciais FTP/SFTP/cPanel foram testadas.
- [ ] Backup completo da versão anterior foi realizado.
- [ ] O conteúdo de `dist/` foi validado antes do upload.
- [ ] Arquivos foram publicados sem incluir fontes de desenvolvimento.
- [ ] Permissões de arquivos e diretórios estão corretas.
- [ ] SSL foi ativado e propagado.
- [ ] Redirecionamento canônico foi testado.
- [ ] Cache do servidor e navegador foi limpo quando necessário.
- [ ] Smoke test de produção foi concluído.
- [ ] Nenhuma URL pública aponta para GreatPages.
- [ ] Procedimento de rollback foi testado ou documentado.

## 15. Homologação final

- [ ] Unti revisou a versão de homologação.
- [ ] Cliente final revisou a versão de homologação.
- [ ] Ajustes solicitados foram registrados e resolvidos.
- [ ] Comparação visual final foi aprovada.
- [ ] Revisão textual final foi aprovada.
- [ ] Relatório de QA foi anexado ao projeto.
- [ ] Exceções conhecidas foram documentadas e aceitas.
- [ ] Aprovação formal para publicação foi recebida.
- [ ] Release `v1.0.0` foi criada.
- [ ] URL de produção foi testada após a publicação.
- [ ] Data, commit e responsável pela publicação foram registrados.

## 16. Pós-publicação

- [ ] Site monitorado imediatamente após o lançamento.
- [ ] Analytics recebe eventos esperados.
- [ ] Search Console consegue acessar a página.
- [ ] Sitemap está acessível.
- [ ] Core Web Vitals serão acompanhadas com dados reais.
- [ ] Links de WhatsApp e redes sociais foram retestados em produção.
- [ ] Nenhum erro crítico foi registrado nas primeiras verificações.
- [ ] Backup da versão `v1.0.0` foi arquivado.
- [ ] Documentação de manutenção foi entregue.

---

Desenvolvido por **Tehkné Solutions**.
