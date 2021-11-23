import conventionalCommitsParser from 'conventional-commits-parser';

const parsingOptions = {
  headerPattern: /^(\w*)(?:\((.*)\))?!?: (.*)$/,
  breakingHeaderPattern: /(?:^(\w*)(?:\((.*)\))?!: (.*)$)/,
  headerCorrespondence: ['type', 'scope', 'subject'],
  noteKeywords: ['BREAKING CHANGE'],
  revertPattern:
    /^(?:Revert|revert:)\s"?([\s\S]+?)"?\s*This reverts commit (\w*)\./i,
  revertCorrespondence: ['header', 'hash'],
};

export const parseCommitMessage = (message) => {
  const parsed = conventionalCommitsParser.sync(message, parsingOptions);

  if (typeof parsed.scope === 'string') {
    parsed.scope = parsed.scope.split(/[;,]/g).map((scope) => scope.trim());
  }

  return parsed;
};
