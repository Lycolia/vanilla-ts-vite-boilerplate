const { readFileSync } = require('fs');
const path = require('path');

const indexHtmlPath = path.join(process.cwd(), 'index.html');
const indexHtml = readFileSync(indexHtmlPath).toString();

// Mock of index.html
document.body.innerHTML = indexHtml;
