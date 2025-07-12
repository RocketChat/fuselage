import { isStoryBookPkg } from './isStorybookPkg.js';
import { getChangedFileReasonMap } from './getChangedFileReasonMap.js';

// changedPackage: string
// changedFile: array of file of this package
export const getDirectAffected = async (changedPackage, changedFile) => {
    if(isStoryBookPkg(changedPackage)) {
        // returns me the list of file affected
        if( changedPackage === 'fuselage' || changedPackage === 'layout'){
            const result = await getChangedFileReasonMap(changedFile, `../dist/trimmed-${changedPackage}-stats.json`)
            console.log(result);
        }

    }
    return {[changedPackage]: null};
}
const changedFile = ['./src/components/ActionLink/ActionLink.tsx']
console.log(await getDirectAffected('layout', changedFile));