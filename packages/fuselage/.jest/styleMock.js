const identityObjProxy = require('identity-obj-proxy');

module.exports = new Proxy(identityObjProxy, {
  get: (target, key) => {
    if (['use', 'unuse', 'ref', 'unref'].includes(key)) {
      return () => {};
    }

    return target[key];
  },
});
