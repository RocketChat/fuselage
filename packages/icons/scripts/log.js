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
      process.stdout.write(chalk`\u231b ${args.join(' ')}`);
    })
    .then(check.promise)
    .then(
      () => {
        process.stdout.write(
          chalk`\r{green \u2705} {gray ${args.join(' ')}}\n`
        );
      },
      () => {
        process.stdout.write(chalk`\r{red \u274c} {gray ${args.join(' ')}}\n`);
      }
    );

  return check;
};

module.exports = {
  ...chalk,
  log,
  logStep,
};
