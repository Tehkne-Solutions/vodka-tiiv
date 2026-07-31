# Vodka TiiV

Reconstrução técnica da landing oficial da Vodka TiiV, migrada do GreatPages para uma aplicação estática em HTML, CSS e JavaScript puros.

## Escopo

O projeto deve reproduzir fielmente a página oficial, sem redesign, expansão editorial ou criação de novas seções.

A versão atual contém:

- composição principal em tela única;
- selo oficial da marca;
- headline “A primeira vodka orgânica do Brasil. Naturalmente suave.”;
- fotografia oficial da garrafa em vegetação;
- botão flutuante de WhatsApp;
- assinatura Unti Digital;
- SEO técnico e metadados sociais;
- responsividade para desktop, tablet e celular;
- configuração estática compatível com UOL Host.

## Stack

- HTML5 semântico;
- CSS responsivo;
- JavaScript puro;
- nenhuma dependência de framework no ambiente publicado.

## Desenvolvimento

```bash
npm run check
npm run build
npm run serve
```

O conteúdo publicável é gerado na pasta `dist/`.

## Regras do projeto

- não adicionar seções que não existam na referência aprovada;
- não reutilizar scripts, pixels ou componentes proprietários do GreatPages;
- manter o visual da referência e melhorar apenas a implementação técnica;
- inserir links, telefone e analytics somente após confirmação oficial;
- toda assinatura pública deste projeto deve usar **Unti Digital**.

Desenvolvido por [Unti Digital](https://www.untidigital.com.br).
