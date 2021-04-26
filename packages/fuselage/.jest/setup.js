const { warn, error } = console;

const printf = (message, args) => {
  if (Array.isArray(args)) {
    let i = 0;
    return message.replace(/\%s/g, () => args[i++]);
  }

  return message.replace(/{([^{}]*)}/g, (a, b) => {
    const r = args[b];
    return typeof r === 'string' || typeof r === 'number' ? r : a;
  });
};

global.console.warn = (message, ...args) => {
  warn.call(console, message, ...args);

  if (message instanceof Error) {
    throw message;
  }

  throw new Error(printf(message, args));
};

global.console.error = (message, ...args) => {
  error.call(console, message, ...args);

  if (message instanceof Error) {
    throw message;
  }

  throw new Error(printf(message, args));
};
