const github = require('@actions/github');
const core = require('@actions/core');
const context = github.context;
const getChangedFile = require('./git');
// const context = JSON.stringify(github.context,undefined,2);
// const localContext = require('./dump/context.json');

function run(context){
    if(context.eventName === 'pull_request'){
        core.info('\u001b[48;5;6mSuccess');
        console.log(getChangedFile(context));
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

// subProcess.exec('cd ../../../packages/fuselage && ls',  (err, stdout)  => {
//     if( err ){
//         console.error(err);
//         process.exit(1);
//     }
//     console.log(stdout.toString())
// })  

// subProcess.exec('./index.sh' ,(err, stdout) => {
//     if ( err ){
//         console.err(err);
//         process.exit(1);
//     }
//     console.log(stdout.toString());
// })