/**
 * @param {Object<Object<string, Set>>} changedCmps
 * @returns {Object<string, string>}
 */
export const generateRegex = (changedCmps) => {
  const rgx = new Object();
  for (const key in changedCmps) {
    const trray = [];
    for (const title of changedCmps[key]) {
      trray.push(title);
    }
    rgx[key] = trray.join('|');
  }
  return rgx;
};
