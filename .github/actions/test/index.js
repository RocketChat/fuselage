import * as github from '@actions/github';
import * as core from '@actions/core';
import { getChangedFile } from './src/git/git.js';
import { copyFiles } from './src/utils/copyFiles.js';
import { trimStatsFile } from './src/stats/trimStatsFile.js';
import { runner } from './src/runner.js';
import { runLoki } from './src/runLoki.js';
import { generateRegex } from './src/utils/generateRegex.js';

// yarn build-storybook --stats-json gives project-stats.json which has component titles
// where as index.json gives the webpack base dependency graph
// index.js run from the root of the project
const context = github.context;
const filesToCopy = [
    {src:'./packages/fuselage/storybook-static/index.json', dest:'.github/actions/test/dist/fuselage-sb.json'},
    {src:'./packages/fuselage-toastbar/storybook-static/index.json', dest:'.github/actions/test/dist/fuselage-toastbar-sb.json'},
    {src:'./packages/onboarding-ui/storybook-static/index.json', dest:'.github/actions/test/dist/onboarding-ui-sb.json'},
    {src:'./packages/layout/storybook-static/index.json', dest:'.github/actions/test/dist/layout-sb.json'},
    {src:'./packages/fuselage/storybook-static/preview-stats.json', dest: '.github/actions/test/dist/fuselage-stats.json'},
    {src:'./packages/fuselage-toastbar/storybook-static/preview-stats.json', dest:'.github/actions/test/dist/fuselage-toastbar-stats.json'},
    {src:'./packages/onboarding-ui/storybook-static/preview-stats.json', dest:'.github/actions/test/dist/onboarding-ui-stats.json'},
    {src:'./packages/layout/storybook-static/preview-stats.json', dest:'.github/actions/test/dist/layout-stats.json'},
]

async function run(context){
    // getTrimmedstats
    for( const {src, dest} of filesToCopy ){
            copyFiles(src, dest);
            if(dest.includes('stats')){
                await trimStatsFile(dest,`.github/actions/test/dist/trimmed-${dest.split('/').slice(-1)}`);
            }
        }
    if(context.eventName === 'pull_request'){
        const changedFiles = await getChangedFile(context);        
        const data = await runner(changedFiles);
        const regex = generateRegex(data);
        core.startGroup('click to see the changed files');
        console.log(changedFiles);
        core.endGroup();
        core.setOutput('fuselage', 'fuselage');
        // core.setOutput('fusealge-toastbar', JSON.stringify(regex['fuselage-toastbar']));
        core.setOutput('layout', 'fuselage');
        // core.setOutput('onboarding-ui', JSON.stringify(regex['onboarding-ui']));
        
        // await runLoki('fuselage', regex.fuselage);
        // for(const reg in regex) {
        //     if(regex[reg].length === 0) {
        //         console.log(`skipping Loki in packages/${reg}`);
        //     } else if (regex[reg] === 'full test') {
        //         core.startGroup(`currenlty running Loki on packages/${reg}--full test:`);
        //         await runLoki(reg, 'full test');
        //         core.endGroup();
        //     } else {
        //         core.startGroup(`currenlty running Loki on packages/${reg}:`);
        //         await runLoki(reg, regex[reg]);
        //         core.endGroup();
        //     }
        // }
    }
    else {
        core.error('To use Loki OdinSnap please use trigger events like pull request or push');
    }
}
run(context);


