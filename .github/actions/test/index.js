const github = require('@actions/github');
const core = require('@actions/core');
// const context = JSON.stringify(github.context,undefined,2);
const localContext = require('./dump/context.json');

function run(context){
    if(context.eventName !== 'pull_request'){
        core.error("Loki OdinSnap is for pull_requests only please change the event trigger");
    }
    core.info('\u001b[48;5;6mSuccess')
}
run(localContext);

// const childProcess = require('child_process');
// let ps = childProcess.spawn('./index.sh', [],{interactive: true})
// ps.stdout.on('data', data => {
//   console.log(`${data}`)
// })
core.startGroup('click to see context');
// console.log(context);
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