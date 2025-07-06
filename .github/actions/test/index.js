const subProcess = require('child_process');
const childProcess = require('child_process')

let ps = childProcess.spawn('./index.sh', [],{interactive: true})

ps.stdout.on('data', data => {
  console.log(`${data}`)
})

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