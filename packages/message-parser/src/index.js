import grammar from "./grammar.peg";
/**
 * The square of a number
 * @param {string} msg
 * @return {import("./definitions").ASTMessage}
 */
const parser = (msg) => grammar.parse(msg);
export { parser };
