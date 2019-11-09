const chalk = require('chalk');

const defer = () => {
  let resolve;
  let reject;
  const promise = new Promise((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  return Object.assign(promise, { resolve, reject });
};

let promise = Promise.resolve();

const log = (...args) => {
  promise = promise.then(() => {
    console.log(...args);
  });
};

const logStep = (...args) => {
  const check = defer();

  promise = promise
    .then(() => {
      process.stdout.write(chalk.gray('⌛', ...args));
    })
    .then(check.promise)
    .then(() => {
      console.log(chalk`\r{green ✔️} {gray ${ args.join(' ') }}`);
    }, () => {
      console.log(chalk`\r{red ❌} {gray ${ args.join(' ') }}`);
    });

  return check;
};

module.exports = {
  ...chalk,
  log,
  logStep,
};
