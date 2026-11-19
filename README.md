# Nexus Tecnologia — site/portfólio

## Como visualizar
1. Extraia a pasta.
2. Abra `index.html` no navegador. Para desenvolvimento, recomendamos a extensão Live Server do VS Code.

## Como adicionar ou editar projetos
Abra `projects.js`. Cada projeto é um objeto dentro da lista `projects`.
- `title`: nome do projeto.
- `category`: `site`, `landing-page` ou `ecommerce`.
- `categoryLabel`: texto mostrado no cartão.
- `description`: resumo do projeto.
- `symbol`: símbolo/ícone simples.
- `cover`: classe visual; pode usar `cover-barber`, `cover-law`, `cover-shop` ou `cover-custom`.
- `link`: URL pública do projeto. Troque o endereço de exemplo pelo link real.

Exemplo para adicionar outro projeto:
```js
{
  title: "Site para Clínica",
  category: "site",
  categoryLabel: "SITE INSTITUCIONAL",
  description: "Site para apresentar especialidades, equipe e formas de contato.",
  symbol: "+",
  cover: "cover-custom",
  link: "https://meusite.com.br"
}
```
Coloque uma vírgula entre os objetos.

## Configurar WhatsApp
No final de `script.js`, altere `whatsappNumber` para seu número no formato:
`55 + DDD + número`, somente dígitos. Exemplo fictício: `5591991234567`.

## Publicação
Envie os arquivos `index.html`, `style.css`, `projects.js` e `script.js` para a hospedagem, mantendo todos na mesma pasta. Você pode usar Hostinger, Netlify, Vercel ou outra hospedagem estática.
