/**
 * @param {Object<Object<string, Set>>} changedCmps
 * @returns {Object<string, string>}
 */
export const generateRegex = (changedCmps) => {
  const rgx = {};

  for (const key in changedCmps) {
    if (Object.prototype.hasOwnProperty.call(changedCmps, key)) {
      // changedCmps[key] is assumed to be a Set or array
      const titles = Array.from(changedCmps[key]);
      rgx[key] = titles.join('|');
    }
  }
  return rgx;
};
