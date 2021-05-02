const { parser: grammar } = require("../dist");
const { italic, paragraph, plain } = require("../src/utils");

var assert = require("assert");
describe("Italic", function () {
  describe("__italic__", function () {
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("__italic__");
      assert.deepEqual(tokens, paragraph([italic([plain("italic")])]));
    });
  });

  describe("pre__italic__post", function () {
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("pre__italic__post");
      assert.deepEqual(
        tokens,
        paragraph([plain("pre"), italic([plain("italic")]), plain("post")])
      );
    });
  });

  describe(" pre__italic__post ", function () {
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse(" pre__italic__post ");
      assert.deepEqual(
        tokens,
        paragraph([plain(" pre"), italic([plain("italic")]), plain("post ")])
      );
    });
  });
});
