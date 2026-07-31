# Vodka TiiV

Landing page institucional estática da Vodka TiiV, reconstruída em HTML, CSS e JavaScript puros para publicação na UOL Host.

## Estado atual

Primeira versão funcional da landing com identidade visual baseada nos assets oficiais recebidos, responsividade, controle de maioridade, animações leves, SEO técnico, acessibilidade e otimização de imagens.

## Stack

- HTML5 semântico
- CSS moderno, responsivo e organizado por componentes
- JavaScript ES Modules sem dependências de runtime
- Node.js apenas para validação, build e preview local
- GitHub Actions para qualidade e geração do pacote `dist/`

## Comandos

```bash
npm run check
npm run build
npm run serve
```

O servidor local abre em `http://127.0.0.1:4173`. Para ignorar o controle de idade em revisão visual, use `?preview=1`.

## Publicação na UOL Host

1. Execute `npm run check && npm run build`.
2. Envie o conteúdo interno de `dist/` para o diretório público da hospedagem.
3. Confirme domínio canônico, HTTPS, redirecionamentos e página 404.
4. Execute os testes da checklist em `docs/FINAL_DELIVERY_CHECKLIST.md`.

## Pendências de homologação

- confirmar domínio canônico definitivo;
- confirmar e-mail comercial e redes sociais oficiais;
- congelar screenshots desktop/mobile da página GreatPages para a rodada pixel perfect;
- configurar analytics somente após aprovação e consentimento adequado;
- revisar textos legais e alegações comerciais com o cliente.

## Assinatura

Tehkné Solutions
