const { parser: grammar } = require("../dist");
const { heading, paragraph, plain } = require("../src/utils");

var assert = require("assert");
describe("Heading", function () {
  describe("# h1", function () {
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("# h1");
      assert.deepEqual(tokens, heading(plain("h1")));
    });
  });
});
