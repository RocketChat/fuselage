import { execa } from 'execa';

export async function getChangedFile(headCommit) {
  // `git --no-pager diff --name-only --no-relative ${baseCommit} ${headCommit}`
  const { stdout } = await execa('git', [
    '--no-pager',
    'diff',
    '--name-only',
    '--no-relative',
    headCommit,
  ]);
  const changedFile = stdout.split('\n');
  // console.log(headCommit);
  // see the changed files using the sha
  return changedFile;
}
const temp = await getChangedFile('fa873a105b7c304fad6c580d0d65d340e99f1a37');
console.log(temp);
