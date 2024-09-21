const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf8');

const wordCount = data.split(' ').length;

const ReactPalabras = data.match(/React/ig).length;

console.log('Palabras:', wordCount);

console.log('Palabras de react:', ReactPalabras);
