import * as github from '@actions/github';
import * as core from '@actions/core';
import { getChangedFile } from './src/git/git.js';
import { copyFiles } from './src/utils/copyFiles.js';

// yarn build-storybook --stats-json gives project-stats.json which has component titles
// where as index.json gives the webpack base dependency graph
// index.js run from the root of the project
const context = github.context;
const filesToCopy = [
    {src:'./packages/fuselage/storybook-static/preview-stats.json', dest:'.github/actions/test/dist/fuselage-sb'},
    {src:'./packages/fuselage-toastbar/storybook-static/index.json', dest:'.github/actions/test/dist/fuselage-toastbar-sb.json'},
    {src:'./packages/onboarding-ui/storybook-static/index.json', dest:'.github/actions/test/dist/onboarding-ui-sb.json'},
    {src:'./packages/layout/storybook-static/index.json', dest:'.github/actions/test/dist/layout-sb.json'},
    {src:'./packages/fuselage/storybook-static/preview-stats.json', dest: '.github/actions/test/dist/fuselage-stats.json'},
    {src:'./packages/fuselage-toastbar/storybook-static/preview-stats.json', dest:'.github/actions/test/dist/fuselage-toastbar-stats.json'},
    {src:'./packages/onboarding-ui/storybook-static/preview-stats.json', dest:'.github/actions/test/dist/onboarding-ui-stats.json'},
    {src:'./packages/layout/storybook-static/preview-stats.json', dest:'.github/actions/test/dist/layout-stats.json'},
]

async function run(context){
    // later for loop be used in if statement
    for( const {src, dest} of filesToCopy ){
            copyFiles(src, dest);
        }
    if(context.eventName === 'pull_request'){
        const changedFiles = await getChangedFile(context);
        core.info('\u001b[48;5;6mSuccess');
        core.startGroup('click to see the changed files');
        console.log(changedFiles);
        core.endGroup();
    }
    else {
        core.error('To use Loki OdinSnap please use trigger events like pull request or push');
    }
}
run(context);
core.startGroup('click to see context');
console.log(context);
core.endGroup();

