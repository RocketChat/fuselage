const { parser } = require('./dist');

console.log(
  JSON.stringify(
    parser(`\`\`\`
code
\`\`\``),
    null,
    2
  )
);
