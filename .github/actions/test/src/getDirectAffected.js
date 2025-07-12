import { isStoryBookPkg } from './isStorybookPkg.js';
import { getChangedStories } from './getChangedStories.js';
import { readStatsFile } from './stats/readStatsFile.js';

// usage
// const changedFile = ['./src/components/Button/Button.tsx']
// await getDirectAffected(changedFile, 'fuselage');

const getComponentName = async (storyNameArray, changedPackage) => {
    const indexJSON = await readStatsFile(`../dist/${ changedPackage }-sb.json`);
    const componentSet = new Set();
    for(const storyName of storyNameArray) {
        for(const entry of Object.values(indexJSON.entries)) {
            if(entry.importPath === storyName) {
                componentSet.add(entry.title);
            }
        }
    }
    return componentSet;
}
// changedPackage: string
// changedFile: array of file of this package
export const getDirectAffected = async (changedFile, changedPackage) => {
    const saveComponentTitles = new Set();
    if(isStoryBookPkg(changedPackage)) {
        for(const fileName of changedFile) {
            // returns me the array of changed stories
            const result = await getChangedStories(fileName, `../dist/trimmed-${changedPackage}-stats.json`);
            const componentTiltes = await getComponentName(result, changedPackage);
            for(const value of componentTiltes) {
                saveComponentTitles.add(value);
            }
        }
        return {[changedPackage]: saveComponentTitles}
    }
    return {[changedPackage]: null};
}
const changedFile = ['./src/components/Button/Button.tsx', './src/components/Box/Box.tsx']
await getDirectAffected(changedFile, 'fuselage');
// console.log(await getDirectAffected('fuselage', changedFile));