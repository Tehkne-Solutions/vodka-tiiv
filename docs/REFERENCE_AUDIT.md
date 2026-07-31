# Auditoria Inicial da Referência — Vodka TiiV

## 1. Fontes recebidas

- página de preview no GreatPages;
- arquivo ZIP exportado/salvo a partir da visualização;
- repositório GitHub `Tehkne-Solutions/vodka-tiiv`.

## 2. Estado do repositório

O repositório foi recebido público, vazio e com branch padrão `main`. A documentação inicial passou a constituir a primeira base versionada do projeto.

## 3. Limitação atual da captura

O endereço de preview não pôde ser carregado pelo ambiente automatizado usado nesta auditoria. O ZIP também não contém o HTML completo nem uma screenshot integral da página; ele contém principalmente recursos baixados durante a visualização.

Consequência: a ordem exata das seções, os textos, as medidas e os comportamentos não devem ser inferidos apenas pelos arquivos. A etapa de pixel perfect exige uma captura integral desktop/mobile ou acesso manual controlado à referência.

## 4. Resumo do ZIP

- 35 arquivos reais após extração;
- aproximadamente 22,8 MB;
- 21 imagens raster não vazias, incluindo ícones de widgets;
- 7 SVGs;
- 2 GIFs de 1 × 1 pixel;
- 3 arquivos de texto ligados a recursos externos/tracking;
- 1 arquivo JPG vazio.

## 5. Ativos com potencial de uso no site

### Fotografias de produto e drinks

| Arquivo original | Dimensões | Tamanho aproximado | Observação |
|---|---:|---:|---|
| `394271-c82bd75a94f7c402baace875d5354cb1.png` | 1080 × 1080 | 2,09 MB | produto com drink rosa e limões |
| `394271-bb7a3779b1e4cbf909616d244d626b2c.jpg` | 960 × 1280 | 0,12 MB | produto e drink em ambiente externo |
| `394271-a3afb692bcad2e8b47ae46be4cf4b36d.png` | 2404 × 1024 | 2,29 MB | composição horizontal da garrafa em vegetação |
| `394271-7262c5e49b55c5500964a7b53530cd79.jpg` | 1200 × 1600 | 0,19 MB | produto e drink à beira-mar |
| `394271-4bbcbbd3c289379dce0cda80513c1962.png` | 1890 × 2363 | 1,36 MB | recorte isolado da garrafa |
| `394271-a4a219c95b6e56b8729f39a1171181c3.png` | 808 × 815 | 0,91 MB | drink amarelo/cremoso |
| `394271-7bc2a3656352bf9eef4550409f68f1e6.png` | 802 × 802 | 0,63 MB | drink amarelo com limão |
| `394271-32bffa355e11500d316f5b3783ed7c6c.png` | 2295 × 2869 | 9,88 MB | produto com drink de frutas escuras; prioridade alta de otimização |
| `394271-2c7999ffd93fb224952bf270e2868e5c.png` | 1080 × 1080 | 2,40 MB | produto em cena escura de bar |
| `394271-e5b5a5f3ba4d5ce30503ce544227ddb6.png` | 800 × 800 | 0,65 MB | caneca de drink e garrafa |
| `394271-20e7e90f251d7e3b3c79d495c1e4d770.jpg` | 1200 × 1600 | 0,29 MB | produto e refeição em área de piscina |
| `394271-69a4a99aed58eac57c5b04f15f5f7549.jpg` | 1080 × 1080 | 0,19 MB | produto, taça e limões em área rural |
| `394271-c0f4692087095e65bcaff1fc21bb216f.png` | 1080 × 1920 | 1,24 MB | captura vertical/composição de marca a revisar |

### Marca e elementos gráficos

| Arquivo original | Dimensões | Observação |
|---|---:|---|
| `394271-247c25616a493722edd1ef58c5196e50.png` | 3500 × 1968 | marca escura sobre transparência; contraste precisa ser conferido |
| `394271-885ca34cea41d1e427ccbb014859bca7.png` | 1226 × 1287 | selo circular escuro |
| `394271-2941d5cf9ec73a3fdf87a7be133eecad.png` | 1226 × 1287 | selo circular claro “Thanks it is Vodka / Naturally Smooth” |
| `394271-30c999d5650b30a0832c927716f39eca.png` | 200 × 200 | marca/ícone escuro de baixa legibilidade |
| `394271-424319cfc97d18455908fd45fa176729.png` | 160 × 160 | bandeira do Brasil |

## 6. Arquivos que não devem ser importados automaticamente

### Artefatos do editor/preview

- `16c5b637-2714-4091-b891-d1d371e0da25.png` — logotipo do GreatPages;
- `image.svg` — seta do preview;
- `image (1).svg` — ícone de desktop;
- `image (2).svg` — ícone de mobile;
- `image (3).svg` — ícone de edição;
- `image (4).svg` — avatar genérico;
- `image (6).svg` — busca;
- `image (7).svg` — fechar.

### Tracking e telemetria

- `ga-audiences.gif` — pixel 1 × 1;
- `image.gif` — pixel 1 × 1 duplicado;
- `attribution_trigger.jpg.txt`;
- `insight_tag_errors.gif.txt`;
- `image.jpg.txt`.

### Arquivos inválidos ou de widgets

- `0.jpg` — arquivo vazio;
- `image.webp` — ícone de chat/widget;
- `remCfu1AOh91r51f9B5HuJ2W.jpg` — pequeno ícone de fornecedor/widget;
- `image (5).svg` — ícone de WhatsApp; poderá ser substituído por SVG próprio e acessível, caso o botão seja confirmado.

## 7. Plano de tratamento dos ativos

Para cada ativo aprovado:

1. identificar o uso exato na referência;
2. renomear semanticamente em português técnico ou inglês consistente;
3. preservar o original em diretório de origem não publicado, se necessário;
4. recortar e redimensionar para os tamanhos reais de renderização;
5. gerar AVIF e WebP;
6. manter fallback JPEG/PNG apenas quando necessário;
7. remover metadados dispensáveis;
8. definir `width`, `height`, `srcset` e `sizes`;
9. verificar transparência, halo, recorte e contraste;
10. registrar autoria/licença e aprovação de uso.

Exemplo de renomeação:

```text
394271-c82bd75a94f7c402baace875d5354cb1.png
→ assets/images/gallery/tiiv-cocktail-pink-lemon-original.png
→ assets/images/gallery/tiiv-cocktail-pink-lemon-640.avif
→ assets/images/gallery/tiiv-cocktail-pink-lemon-640.webp
→ assets/images/gallery/tiiv-cocktail-pink-lemon-640.jpg
```

## 8. Informações pendentes para produção

- screenshot integral desktop da página aprovada;
- screenshot integral mobile da página aprovada;
- texto completo e final de cada seção;
- domínio de produção e decisão entre raiz ou `www`;
- URL oficial de Instagram e demais redes;
- número e mensagem inicial do WhatsApp;
- destino de cada CTA;
- confirmação sobre formulário de contato;
- IDs oficiais de Google Analytics, Google Tag Manager, Meta Pixel ou LinkedIn Insight Tag;
- política de privacidade e cookies, quando aplicável;
- texto jurídico de maioridade e consumo responsável;
- confirmação da fonte e licença;
- confirmação de quais imagens do ZIP são oficiais e atuais.

## 9. Critério para início da implementação visual

A produção do layout poderá começar com a estrutura técnica, mas a validação pixel perfect somente será iniciada após existir:

- uma referência visual congelada;
- um inventário de conteúdo aprovado;
- uma allowlist dos ativos oficiais;
- confirmação dos links e dados de contato.

## 10. Referências técnicas e operacionais

- Core Web Vitals: https://web.dev/articles/vitals?hl=pt-BR
- Google Search Essentials: https://developers.google.com/search/docs/essentials
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- CONAR — Código e Anexo A para bebidas alcoólicas: https://www.conar.org.br/codigo/codigo.php
- UOL Host — publicação por FTP/gerenciador: https://faq.uol.com.br/uolhost/content/como-publicar-as-paginas-do-meu-site/
- UOL Host — acesso FTP e pasta Web: https://faq.uol.com.br/uolhost/content/como-realizo-o-acesso-ao-ftp-na-nova-plataforma-de-hospedagem/
- UOL Host — SSL: https://faq.uol.com.br/uolhost/content/como-instalar-o-certificado-de-seguranca-da-hospedagem-de-sites/

---

Desenvolvido por **Tehkné Solutions**.
