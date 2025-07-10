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
core.startGroup('click to see context');
console.log(context);
core.endGroup();

