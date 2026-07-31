# Plano de Projeto — Vodka TiiV

## 1. Visão do projeto

Reconstruir a página atual da Vodka TiiV fora do GreatPages, utilizando somente HTML, CSS e JavaScript no produto publicado. A entrega deverá ser visualmente fiel à referência oficial, responsiva, performática, acessível, otimizada para mecanismos de busca e compatível com a hospedagem da UOL Host.

A versão publicada não dependerá de runtime Node.js, framework, CMS, banco de dados ou serviço proprietário de page builder.

## 2. Objetivos mensuráveis

1. Paridade visual aprovada nas resoluções de referência.
2. Navegação e conteúdo utilizáveis entre 320 px e telas ultrawide.
3. Lighthouse em ambiente de produção:
   - Performance: meta mínima 95;
   - Accessibility: meta mínima 95;
   - Best Practices: meta mínima 95;
   - SEO: meta mínima 95.
4. Core Web Vitals em faixa “boa”:
   - LCP menor ou igual a 2,5 s;
   - INP menor ou igual a 200 ms;
   - CLS menor ou igual a 0,1.
5. Zero erros de console, links quebrados, recursos 404 ou conteúdo misto HTTP/HTTPS.
6. Nenhuma dependência do GreatPages presente no pacote final.
7. Publicação reproduzível na UOL Host por FTP, gerenciador de arquivos ou cPanel.

## 3. Escopo funcional

### Incluído

- landing page institucional de página única;
- cabeçalho, navegação por âncoras e menu mobile;
- reprodução das seções, textos, imagens, CTAs e rodapé da referência aprovada;
- galeria e blocos visuais existentes na referência;
- botão de contato/WhatsApp, quando confirmado;
- links sociais e links externos confirmados;
- animações de entrada, hover, parallax leve ou microinterações compatíveis com a identidade;
- aviso de conteúdo destinado a adultos e mensagem de consumo responsável;
- SEO técnico on-page;
- Open Graph e metadados sociais;
- dados estruturados aplicáveis e validados;
- `robots.txt`, `sitemap.xml`, favicon e web manifest básico;
- página 404 estática;
- configuração de cache, compressão, HTTPS e cabeçalhos quando suportados pela hospedagem;
- pacote `dist/` pronto para envio ao servidor;
- documentação de implantação e rollback.

### Fora do escopo inicial

- e-commerce, carrinho ou pagamentos;
- painel administrativo ou CMS;
- autenticação;
- banco de dados;
- backend próprio;
- criação de fotografias ou redesign completo da marca;
- integrações não presentes na referência e não aprovadas pelo cliente.

Qualquer formulário que exija envio de dados dependerá de uma solução externa aprovada ou de recurso disponível no plano da hospedagem. Nenhum segredo será embutido no JavaScript público.

## 4. Auditoria inicial dos insumos

O repositório foi recebido vazio e foi inicializado com a documentação do projeto.

O ZIP recebido contém 35 arquivos e aproximadamente 22,8 MB. A triagem inicial identificou:

- 18 imagens com potencial de uso editorial ou de marca;
- fotos do produto e de drinks em diferentes proporções;
- artes de logotipo/selo e bandeira do Brasil;
- uma imagem individual próxima de 9,9 MB, inadequada para publicação sem otimização;
- arquivos do ambiente de edição/preview do GreatPages;
- ícones de desktop, mobile, edição, busca, fechar e voltar que não pertencem ao site final;
- dois pixels GIF de rastreamento de 1 × 1;
- arquivos `.txt` relacionados a tracking;
- um arquivo de imagem vazio;
- ícones de widget de chat que precisam ser separados dos ativos oficiais.

A importação para o repositório será feita somente depois da classificação, renomeação semântica, conversão e validação de direitos de uso.

## 5. Dependências para fidelidade pixel perfect

Antes de fechar o layout, será criada uma captura controlada da página oficial nas larguras:

- 1920 × 1080;
- 1440 × 900;
- 1366 × 768;
- 1280 × 800;
- 1024 × 768;
- 768 × 1024;
- 430 × 932;
- 390 × 844;
- 360 × 800;
- 320 × 568.

Também serão registrados:

- altura e ordem exata das seções;
- containers, margens, espaçamentos e alinhamentos;
- família tipográfica, pesos, line-height e letter-spacing;
- cores, gradientes, sombras e opacidades;
- comportamento do menu, botões e links;
- transições, animações e elementos fixos;
- textos, URLs, telefones, redes sociais e mensagens legais;
- diferenças existentes entre desktop e mobile.

Caso o preview não possa ser capturado automaticamente, a homologação visual usará screenshots integrais fornecidos pelo cliente ou capturados manualmente em navegador.

## 6. Arquitetura proposta

```text
vodka-tiiv/
├── .github/
│   ├── workflows/
│   │   └── quality.yml
│   └── pull_request_template.md
├── docs/
│   ├── PROJECT_PLAN.md
│   ├── FINAL_DELIVERY_CHECKLIST.md
│   ├── REFERENCE_AUDIT.md
│   ├── DEPLOY_UOL_HOST.md
│   └── QA_REPORT.md
├── src/
│   ├── index.html
│   ├── 404.html
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── assets/
│   │   ├── fonts/
│   │   ├── icons/
│   │   ├── images/
│   │   │   ├── brand/
│   │   │   ├── hero/
│   │   │   ├── gallery/
│   │   │   └── recipes/
│   │   └── video/
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── sections.css
│   │   ├── animations.css
│   │   └── responsive.css
│   └── scripts/
│       ├── main.js
│       └── modules/
│           ├── age-gate.js
│           ├── navigation.js
│           ├── reveal.js
│           ├── gallery.js
│           └── analytics-consent.js
├── scripts/
│   ├── build.mjs
│   ├── optimize-images.mjs
│   └── validate-dist.mjs
├── tests/
│   ├── smoke/
│   ├── accessibility/
│   └── visual/
├── dist/
├── .editorconfig
├── .gitignore
├── package.json
└── README.md
```

### Regras arquiteturais

- `src/` é a fonte de verdade;
- `dist/` contém somente o pacote estático publicável;
- CSS organizado por responsabilidade, sem duplicações extensas ou seletores frágeis;
- classes com nomenclatura previsível e componentes isolados;
- custom properties para cores, tipografia, espaçamento, camadas e motion;
- JavaScript modular, com inicialização defensiva e sem poluir `window`;
- recursos carregados de forma local sempre que a licença permitir;
- terceiros carregados somente após aprovação e, quando necessário, consentimento;
- imagens com nomes semânticos e versões AVIF/WebP com fallback adequado;
- dimensões explícitas nas imagens para evitar layout shift;
- sem bibliotecas de animação quando CSS e IntersectionObserver forem suficientes.

## 7. Estratégia visual e responsiva

### Fidelidade

A referência será tratada como especificação visual, não como código a ser copiado. O novo HTML será semântico e o CSS será refeito com medidas e regras consistentes.

### Responsividade

- abordagem mobile-first para regras estruturais;
- containers fluidos com limites máximos;
- tipografia responsiva com `clamp()`;
- imagens responsivas com `srcset`, `sizes` e `picture`;
- grids que se reorganizam sem esconder conteúdo essencial;
- áreas clicáveis com tamanho adequado para toque;
- navegação por teclado e foco visível;
- validação em orientação retrato e paisagem;
- tratamento de telas muito baixas, zoom a 200% e fontes ampliadas.

### Motion

- animações curtas e discretas;
- propriedades preferenciais: `transform` e `opacity`;
- nenhuma animação que bloqueie conteúdo ou navegação;
- desativação/redução automática com `prefers-reduced-motion`;
- lazy initialization para animações fora da viewport;
- sem parallax pesado em dispositivos de baixa capacidade.

## 8. SEO técnico

- HTML semântico e hierarquia única de títulos;
- título e descrição exclusivos e aprovados;
- canonical definitivo;
- idioma `pt-BR` e metadados coerentes;
- Open Graph e Twitter Cards;
- favicon completo e imagem social dedicada;
- dados estruturados validados, limitados a informações comprováveis;
- sitemap e robots corretos;
- URLs HTTPS e versão canônica única com ou sem `www`;
- textos alternativos úteis, sem keyword stuffing;
- conteúdo principal presente no HTML sem depender de JavaScript;
- links rastreáveis e descrições claras;
- Search Console e analytics configurados somente com IDs oficiais;
- nenhuma tag ou pixel herdado do GreatPages será copiado automaticamente.

## 9. Performance

- conversão de imagens para AVIF e WebP com fallback quando necessário;
- tamanhos de imagem adaptados ao uso real;
- preload apenas para o recurso LCP e fontes críticas;
- fontes com subconjunto e `font-display: swap`, quando aplicável;
- CSS crítico pequeno e restante não bloqueante quando houver benefício real;
- JavaScript com `type="module"` e carregamento não bloqueante;
- lazy loading abaixo da dobra;
- cache longo para assets versionados;
- compressão Brotli/Gzip quando disponível;
- remoção de metadados desnecessários das imagens;
- ausência de bibliotecas genéricas para funções simples;
- orçamento inicial de transferência da primeira tela menor que 1 MB em mobile, salvo exigência visual aprovada.

## 10. Acessibilidade

- meta WCAG 2.2 AA;
- landmarks semânticos;
- navegação integral por teclado;
- foco visível e ordem lógica;
- contraste validado;
- textos alternativos e imagens decorativas corretamente marcadas;
- modal de idade com foco controlado, escape e restauração do foco;
- labels acessíveis em botões e links com ícone;
- estados não comunicados apenas por cor;
- respeito a preferências de movimento, contraste e esquema de cor quando aplicável;
- testes automatizados e inspeção manual com leitor de tela.

## 11. Conformidade de conteúdo para bebida alcoólica

A comunicação deverá permanecer voltada ao público adulto e seguir as regras aplicáveis à publicidade de bebidas alcoólicas. O projeto incluirá, conforme aprovação jurídica/comercial:

- indicação clara de conteúdo para maiores de 18 anos;
- advertência de consumo responsável;
- ausência de linguagem dirigida a crianças e adolescentes;
- ausência de estímulo ao consumo excessivo ou irresponsável;
- nenhuma associação positiva entre bebida e direção;
- revisão de alegações de saúde, pureza, efeitos ou ausência de ressaca antes da publicação;
- política de privacidade e consentimento quando houver coleta ou rastreamento de dados.

A aprovação final do conteúdo regulatório pertence ao cliente responsável pela marca.

## 12. Fases de execução

### Fase 0 — Descoberta e congelamento da referência

**Atividades**

- capturar a página atual em todas as resoluções;
- inventariar textos, links, seções e interações;
- separar arquivos oficiais de artefatos da plataforma;
- confirmar domínio, redes sociais, WhatsApp, analytics e políticas;
- definir a versão visual que será a referência final.

**Saída**

- relatório de referência;
- mapa da página;
- inventário de ativos;
- lista de pendências de conteúdo.

**Gate**

Nenhuma seção de produção será considerada pixel perfect antes do congelamento da referência.

### Fase 1 — Fundação técnica

**Atividades**

- criar estrutura profissional do projeto;
- configurar padrões de código, linters e validações;
- criar build estático e diretório `dist/`;
- configurar testes de HTML, CSS e JavaScript;
- adicionar pipeline de qualidade no GitHub Actions.

**Gate**

Build reproduzível, sem erros, gerando pacote estático limpo.

### Fase 2 — Implementação visual desktop

**Atividades**

- implementar tokens e base tipográfica;
- construir cabeçalho, hero e seções na ordem oficial;
- reproduzir espaçamentos, proporções, fundos, bordas e sobreposições;
- inserir ativos já tratados;
- aplicar microinterações essenciais.

**Gate**

Comparação visual aprovada em 1440 px e 1366 px sem divergências relevantes.

### Fase 3 — Responsividade completa

**Atividades**

- adaptar navegação e layouts;
- ajustar tipografia e composição de imagens;
- validar tablet, mobile e telas extremas;
- corrigir overflow, recortes e saltos de layout;
- testar toque, rotação e zoom.

**Gate**

Nenhum overflow horizontal e todas as funções operacionais entre 320 px e 1920 px.

### Fase 4 — Animações e interações

**Atividades**

- menu mobile;
- scroll suave com compensação do cabeçalho;
- reveal progressivo;
- hover/focus states;
- galeria ou lightbox, quando presente na referência;
- botão flutuante de contato;
- age gate, quando aprovado.

**Gate**

Interações acessíveis, sem bloquear conteúdo, sem erros e sem degradação relevante de performance.

### Fase 5 — SEO, performance, acessibilidade e legal

**Atividades**

- metadados, canonical, sitemap, robots e dados estruturados;
- otimização final de imagens e fontes;
- auditoria Lighthouse e Core Web Vitals laboratoriais;
- revisão WCAG;
- revisão de tracking e consentimento;
- revisão de advertências e conteúdo adulto.

**Gate**

Metas de qualidade atingidas ou exceções documentadas e aprovadas.

### Fase 6 — Homologação

**Atividades**

- testes cross-browser e cross-device;
- comparação pixel a pixel;
- validação de links, contatos, analytics e compartilhamento social;
- revisão textual;
- relatório de QA;
- aprovação da Unti e do cliente final.

**Gate**

Checklist final concluída e aceite formal para publicação.

### Fase 7 — Publicação na UOL Host

**Atividades**

- gerar backup do estado anterior;
- validar domínio e DNS;
- ativar SSL;
- publicar os arquivos no diretório web correto;
- configurar redirecionamento HTTPS e domínio canônico;
- limpar cache e testar produção;
- enviar sitemap ao Search Console;
- registrar versão publicada e procedimento de rollback.

**Gate**

Site público estável, HTTPS válido, sem erros 404 ou conteúdo misto.

### Fase 8 — Pós-publicação

**Atividades**

- smoke test imediato;
- monitoramento de indexação, analytics e Core Web Vitals;
- correção de regressões críticas;
- fechamento do relatório de entrega.

## 13. Estratégia de versionamento

- `main`: versão estável e publicável;
- branches curtas `feat/*`, `fix/*`, `chore/*` e `docs/*`;
- commits convencionais;
- pull requests com checklist de QA;
- tags de release, iniciando em `v1.0.0` na primeira publicação;
- o conteúdo de `dist/` deverá corresponder exatamente à release publicada.

## 14. Riscos e mitigação

| Risco | Impacto | Mitigação |
|---|---:|---|
| Referência muda durante a implementação | Alto | congelar screenshots e conteúdo antes do layout final |
| ZIP contém artefatos da plataforma | Médio | triagem manual e allowlist de ativos oficiais |
| Imagens excessivamente pesadas | Alto | redimensionamento, AVIF/WebP e orçamento de performance |
| Fonte original indisponível ou sem licença | Médio | confirmar licença ou definir fallback visual aprovado |
| Tracking herdado sem autorização | Alto | usar apenas IDs oficiais e consentimento aplicável |
| Formulário sem backend na hospedagem estática | Médio | confirmar solução antes de implementar |
| Divergência entre `www` e domínio raiz | Médio | canonical e redirecionamento 301 |
| SSL/DNS em propagação | Médio | janela de publicação e validação prévia |
| Alegações publicitárias sensíveis | Alto | aprovação formal do conteúdo pelo cliente |
| Animações prejudicam mobile | Médio | progressive enhancement e reduced motion |

## 15. Entregáveis finais

- código-fonte organizado e documentado;
- pasta `dist/` pronta para a UOL Host;
- ativos renomeados e otimizados;
- favicon, manifest, social preview e metadados;
- robots, sitemap e 404;
- configuração de servidor aplicável;
- testes automatizados essenciais;
- relatório Lighthouse e QA;
- manual de publicação, backup e rollback;
- tag `v1.0.0` no GitHub;
- assinatura exclusiva da Tehkné Solutions.

## 16. Definition of Done

O projeto será considerado concluído quando:

1. a fidelidade visual estiver aprovada nas resoluções definidas;
2. a checklist final estiver integralmente concluída ou possuir exceções formalmente aprovadas;
3. o site estiver publicado em HTTPS na UOL Host;
4. não houver erros críticos de conteúdo, acessibilidade, performance ou funcionamento;
5. a versão publicada estiver identificada no GitHub;
6. documentação e rollback estiverem entregues;
7. a Unti e o cliente final tiverem realizado o aceite.

---

Desenvolvido por **Tehkné Solutions**.
