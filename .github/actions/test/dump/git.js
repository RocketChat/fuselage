import { execaCommand, $ } from 'execa';
// const stdout = await execa ` yarn install`;
// console.log(stdout);

const branch = await $`git branch --show-current`;
console.log(branch)

const installLog = await execaCommand('yarn install && ls',{shell:'&&'});
console.log(installLog);

// let ps = childProcess.spawn('./index.sh', [],{interactive: true})
// console.log(ps);

// const showDirectory = await $`cd ..`;
// console.log(showDirectory);