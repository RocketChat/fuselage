const { warn, error } = console;

global.console.warn = (message) => {
  warn.call(console, message);
  throw (message instanceof Error ? message : new Error(message));
}

global.console.error = (message) => {
  error.call(console, message);
  throw (message instanceof Error ? message : new Error(message));
}
