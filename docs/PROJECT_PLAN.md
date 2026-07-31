# Plano de Projeto — Vodka TiiV

## Objetivo

Migrar a landing oficial da Vodka TiiV do GreatPages para HTML, CSS e JavaScript puros, preservando fielmente a referência visual e preparando um pacote estático otimizado para UOL Host.

## Escopo visual obrigatório

A implementação deve reproduzir somente o que estiver presente na página oficial aprovada.

Referência atual confirmada:

- landing de tela única;
- fundo branco;
- selo TiiV no lado esquerdo;
- headline “A primeira vodka orgânica do Brasil. Naturalmente suave.”;
- destaque verde nas palavras “primeira vodka orgânica”;
- imagem da garrafa e vegetação ocupando o lado direito;
- transição suave entre o fundo branco e a fotografia;
- botão flutuante de WhatsApp;
- assinatura discreta da Unti Digital.

Não devem ser adicionados:

- menu institucional;
- manifesto;
- história da marca;
- processo de fabricação;
- galeria de drinks;
- cards;
- formulários;
- placeholders;
- controle de maioridade;
- textos ou seções não presentes na referência.

## Melhorias permitidas

As melhorias técnicas devem ser invisíveis e não alterar a composição visual:

- HTML semântico;
- CSS responsivo;
- otimização de imagens;
- SEO técnico;
- metadados sociais;
- acessibilidade;
- cabeçalhos e cache para UOL Host;
- validação automatizada;
- alta performance;
- compatibilidade entre navegadores.

## Responsividade

Desktop deve manter a composição horizontal da referência.

Em telas pequenas, o conteúdo textual deve aparecer antes da fotografia, preservando legibilidade, hierarquia da marca, enquadramento da garrafa e ausência de overflow.

## Pendências antes da publicação

- número oficial do WhatsApp;
- domínio canônico definitivo;
- confirmação dos arquivos finais de logo e imagem;
- aprovação pixel perfect desktop e mobile;
- autorização para analytics, caso aplicável;
- revisão final do texto legal e comercial.

## Entrega

A pasta `dist/` deverá conter somente os arquivos necessários para publicação estática na UOL Host.

Assinatura pública: [Unti Digital](https://www.untidigital.com.br).
