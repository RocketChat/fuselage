import { readStatsFile } from './stats/readStatsFile.js';

export const getComponentTitle = async (storyNameArray, changedPackage) => {
    const indexJSON = await readStatsFile(`.github/actions/test/dist/${ changedPackage }-sb.json`);
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