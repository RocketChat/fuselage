import * as github from '@actions/github';
import * as core from '@actions/core';
import { getChangedFile } from './git.js';

const context = github.context;

async function run(context){
    if(context.eventName === 'pull_request'){
        core.info('\u001b[48;5;6mSuccess');
        const changedFiles = await getChangedFile(context);
        console.log(changedFiles);
    }
    else {
        core.error('To use Loki OdinSnap please use trigger events like pull request or push');
    }
}
run(context);
// run(localContext);
// const childProcess = require('child_process');
// let ps = childProcess.spawn('./index.sh', [],{interactive: true})
// ps.stdout.on('data', data => {
//   console.log(`${data}`)
// })
core.startGroup('click to see context');
console.log(context);
core.endGroup();
