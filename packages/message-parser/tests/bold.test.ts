const { parser: grammar } = require("../dist");
import { bold, paragraph, plain, italic } from "../src/utils";

var assert = require("assert");
describe("Bold", function () {
  describe("Testing alone", function () {
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("**bold**", console.log);
      assert.deepEqual(tokens, paragraph([bold([plain("bold")])]));
    });
  });
  describe("Testing with whitespaces inside **", function () {
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("** bold**", console.log);
      assert.deepEqual(tokens, paragraph([bold([plain(" bold")])]));
    });
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("**bold **", console.log);
      assert.deepEqual(tokens, paragraph([bold([plain("bold ")])]));
    });
    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("** bold **", console.log);
      assert.deepEqual(tokens, paragraph([bold([plain(" bold ")])]));
    });

    it("should return the token and the inner text", function () {
      const [tokens] = grammar.parse("** bo ld **", console.log);
      assert.deepEqual(tokens, paragraph([bold([plain(" bo ld ")])]));
    });
  });

  describe("Testing with more inline elements", function () {
    it("should return the `pre` text and the bold token", function () {
      const [tokens] = grammar.parse("pre**bold**");
      assert.deepEqual(
        tokens,
        paragraph([plain("pre"), bold([plain("bold")])])
      );
    });

    it("should return the bold token and pos text", function () {
      const [tokens] = grammar.parse("**bold**pos");
      assert.deepEqual(
        tokens,
        paragraph([bold([plain("bold")]), plain("pos")])
      );
    });

    it("should return two bold blocks", function () {
      const [tokens] = grammar.parse("**bold****bold**");
      assert.deepEqual(
        tokens,
        paragraph([bold([plain("bold")]), bold([plain("bold")])])
      );
    });

    it("should return two bold blocks between spaces", function () {
      const [tokens] = grammar.parse("**bold** **bold**");
      assert.deepEqual(
        tokens,
        paragraph([bold([plain("bold")]), plain(" "), bold([plain("bold")])])
      );
    });

    it("should return bold and italic blocks", function () {
      const [tokens] = grammar.parse("**bold** __italic__");
      assert.deepEqual(
        tokens,
        paragraph([
          bold([plain("bold")]),
          plain(" "),
          italic([plain("italic")]),
        ])
      );
    });

    describe("Italic inside Bold", function () {
      it("should return bold and italic blocks", function () {
        const [tokens] = grammar.parse("**__italicbold__**");
        assert.deepEqual(
          tokens,
          paragraph([bold([italic([plain("italicbold")])])])
        );
      });
    });

    describe("Italic and Text inside Bold", function () {
      it("should return a plain block and an italic inside bold", function () {
        const [tokens] = grammar.parse("plain **__italicbold__**");
        assert.deepEqual(
          tokens,
          paragraph([plain("plain "), bold([italic([plain("italicbold")])])])
        );
      });
    });
  });
});
