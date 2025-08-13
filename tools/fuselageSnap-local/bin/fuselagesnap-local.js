import { getChangedFileLocal } from '../src/git_local.js'
import { execa } from 'execa';

// const log = await getChangedFileLocal('c458a8c74637a09521c6122891732b941295ae1e')
// git rev-parse HEAD
async function run() {
    const headCommit = await execa`git rev-parse HEAD`;
    const changedFiles = await getChangedFileLocal(headCommit.stdout);
    console.log(changedFiles);
}
run();