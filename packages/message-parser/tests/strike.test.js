const { parser: grammar } = require("../dist");
const { strike, paragraph, plain } = require("../src/utils");

var assert = require("assert");
describe("Strike", function () {
  describe("~~strike~~", function () {
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("~~strike~~");
      assert.deepEqual(tokens, paragraph([strike(plain("strike"))]));
    });
  });

  describe("pre~~strike~~post", function () {
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("pre~~strike~~post");
      assert.deepEqual(
        tokens,
        paragraph([plain("pre"), strike(plain("strike")), plain("post")])
      );
    });
  });

  describe(" pre~~strike~~post ", function () {
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse(" pre~~strike~~post ");
      assert.deepEqual(
        tokens,
        paragraph([plain(" pre"), strike(plain("strike")), plain("post ")])
      );
    });
  });
});
