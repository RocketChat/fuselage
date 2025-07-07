const childProcess = require('child_process');
const github = require('@actions/github');
const core = require('@actions/core');

const context = JSON.stringify(github.context,undefined,2);
// let ps = childProcess.spawn('./index.sh', [],{interactive: true})

// ps.stdout.on('data', data => {
//   console.log(`${data}`)
// })
core.startGroup();
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