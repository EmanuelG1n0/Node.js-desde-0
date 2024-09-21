const fs = require('fs');

const data = fs.readFileSync('readme.md', 'utf8');

const newdata = data.replace(/React/ig, 'ANGULAR');

console.log(data);

fs.writeFileSync('readme-Angular.md', newdata);