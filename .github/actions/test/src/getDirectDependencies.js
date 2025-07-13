import { isStoryBookPkg } from './isStorybookPkg.js';
import { getReasons } from './getReasons.js';
import { normaliseDDPath } from './normalise.js';
import { getComponentTitle } from './getComponentTitle.js';

// usage
// const changedFile = ['./src/components/Button/Button.tsx']
// await getDirectAffected(changedFile, 'fuselage');


// changedPackage: string
// changedFile: array of file of this package

export const getDirectDependencies = async (changedFiles, changedPackage) => {
    const normalizedFiles = normaliseDDPath(changedFiles);
    const saveComponentTitles = new Set();
    if(isStoryBookPkg(changedPackage)) {
        for(const name of normalizedFiles) {
            // returns me the array of changed stories
            const result = await getReasons(name, `../dist/trimmed-${changedPackage}-stats.json`);
            const componentTiltes = await getComponentTitle(result, changedPackage);
            for(const value of componentTiltes) {
                saveComponentTitles.add(value);
            }
        }
        return {[changedPackage]: saveComponentTitles}
    }
    return {[changedPackage]: null};
}
// const changedFile = ['./src/components/Button/Button.tsx', './src/components/Box/Box.tsx']
// const changedFiles = ['packages/fuselage/src/components/Button/Button.tsx']
// const temp = await getDirectDependencies(changedFiles,'fuselage');
// console.log(temp);
// // const temp = await getDirectDependencies(changedFile, 'fuselage');
// // console.log(temp);
// // // console.log(await getDirectAffected('fuselage', changedFile));