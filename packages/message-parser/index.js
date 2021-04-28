const fs = require("fs");
var pegjs = require("peggy");
var tspegjs = require("ts-pegjs");

const data = fs.readFileSync("./grammar.peg", "utf8");

var parser = pegjs.generate(data, {
  output: "source",
  format: "commonjs",
  plugins: [tspegjs],
  tspegjs: {
    customHeader: `// import lib\nimport {
    bold,
    italic,
    plain,
    link,
    paragraph,
    code,
    heading,
    strike,
    inlineCode } from './utils';`,
  },
});
fs.writeFileSync("./grammar.ts", parser);
