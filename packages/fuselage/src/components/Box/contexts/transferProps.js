let lastSourceProps;
let entries;

const getEntries = (sourceProps) => {
  if (lastSourceProps !== sourceProps) {
    lastSourceProps = sourceProps;
    entries = Object.entries(sourceProps);
  }

  return entries;
};

const deleteKey = (sourceProps, key) => {
  delete sourceProps[key];
  lastSourceProps = undefined;
};

export const consumeProps = (sourceProps, targetProps, loop, after) => {
  const set = (key, fn) => {
    targetProps[key] = fn(targetProps[key]);
  };

  for (const [key, value] of getEntries(sourceProps)) {
    const consumed = loop(key, value, set);

    if (consumed) {
      deleteKey(sourceProps, key);
    }
  }

  if (after) {
    after(set);
  }
};

export const consumeProp = (sourceProps, targetProps, key, cb) => {
  const set = (fn) => {
    targetProps[key] = fn(targetProps[key]);
  };

  cb(sourceProps[key], set);

  if (key in sourceProps) {
    deleteKey(sourceProps, key);
  }
};

export const injectProps = (targetProps, newProps) => {
  Object.assign(targetProps, newProps);
};
