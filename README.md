# XMX Corp - Desafio Técnico - Kayo Bitencourt

Landing page do Tenurima™, feita com HTML e CSS puro.

🔗 **Projeto ao vivo:** [xmx-corp-desafio-tech.vercel.app](https://xmx-corp-desafio-tech.vercel.app/)

📋 **Diagnóstico (Etapa 1):** a auditoria da página `biogutex.com` está em [`docs/DIAGNOSTICO.md`](docs/DIAGNOSTICO.md), com as imagens de apoio em `docs/img/`.

## Como rodar

O projeto é estático, não precisa de build nem de dependências. Para rodar com o Live Server:

1. Abra a pasta do projeto no VS Code.
2. Instale a extensão **Live Server** (`ritwickdey.LiveServer`).
3. Abra o `index.html` e clique em **Go Live**, no canto inferior direito. Também dá para clicar com o botão direito no arquivo e escolher **Open with Live Server**.
4. O navegador abre em `http://127.0.0.1:5500` e recarrega sozinho a cada alteração.

## Estrutura de pastas

```
tenurima-lp/
├── .vscode/
│   └── settings.json    # configuração do autocomplete de variáveis CSS
├── docs/
│   ├── DIAGNOSTICO.md   # Etapa 1: auditoria da página biogutex.com
│   └── img/             # prints usados no diagnóstico
├── assets/
│   └── images/          # ícones e imagens em SVG
├── styles/
│   ├── index.css        # ponto de entrada, importa os demais arquivos
│   ├── global.css       # reset, variáveis (:root) e estilos globais
│   └── banner.css       # marquee de selos (banner)
├── index.html
└── README.md
```

## Autocomplete de variáveis CSS

O `.vscode/settings.json` existe só para o autocomplete da extensão **CSS Variable Autocomplete** (`vunguyentuan.vscode-css-variables`). Ele aponta para o `styles/global.css`, onde ficam as variáveis, para que elas sejam sugeridas ao digitar `var(--` nos outros arquivos `.css`.

Ele não afeta o funcionamento da página. Sem a extensão instalada, o projeto roda igual.
