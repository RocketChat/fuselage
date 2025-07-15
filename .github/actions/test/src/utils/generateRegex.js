/**
 * @param {Object<Object<string, Set>>} changedCmps 
 * @returns {Object<string, string>}
 */
export const generateRegex = async (changedCmps) => {
    const rgx = new Object();
    for(const key in changedCmps) {
        const trray = new Array();
        for(const title of changedCmps[key]) {
            trray.push(title);
        }
        rgx[key] = trray.join('|');
    }
    return rgx;
}