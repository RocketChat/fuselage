const { parser } = require('./dist');

console.log(JSON.stringify(parser(`http://localhost:3000`), null, 2));
