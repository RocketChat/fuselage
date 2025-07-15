import { isStoryBookPkg } from './isStorybookPkg.js';
import { getReasons } from './getReasons.js';
import { normaliseDDPath } from './normalise.js';
import { getComponentTitle } from './getComponentTitle.js';

/**
 * 
 * @param {Array<string>} changedFiles 
 * @param {string} changedPackage 
 * @returns 
 */
export const getDirectDependencies = async (changedFiles, changedPackage) => {
    const normalizedFiles = normaliseDDPath(changedFiles);
    const saveComponentTitles = new Set();
    if(isStoryBookPkg(changedPackage)) {
        for(const name of normalizedFiles) {
            // returns me the array of changed stories
            const result = await getReasons(name, `.github/actions/test/dist/trimmed-${changedPackage}-stats.json`);
            const componentTiltes = await getComponentTitle(result, changedPackage);
            for(const value of componentTiltes) {
                saveComponentTitles.add(value);
            }
        }
        return {[changedPackage]: saveComponentTitles}
    }
    return {[changedPackage]: null};
}
