import { trimStatsFile } from './stats/trimStatsFile.js';
import { readStatsFile } from './stats/readStatsFile.js';

// const changedFiles = ['./src/components/Button/Button.tsx'];
// if in compoenet folder check index of the component
// eg - ./src/componets/Button/index.ts
// this takes the index.ts file and return false if index.ts not exists

async function isIndexTsx(index_ts, trimmedFile){
    for(const module of trimmedFile) {
        if(module.name.includes(index_ts) ){
            return false;
        }
    }
    return true;
}

// returns array of objects if matches the moduleName
// else undefined
async function getReasonsOfModule(trimmedFile, moduleName){
    for(const module of trimmedFile) {
        if(module.name.includes(moduleName)){
            return module.reasons;
        }
    }
    return undefined;
}

// changedFiles: array of changed files with path
// eg.['.src/components/Button/Button.tsx]
// pathToTrimmedFile: string
// returns map 
// key: component index
// value: reasons of index
export const getChangedFileReasonMap = async (changedFiles, pathToTrimmedFile) => {
    const trimmedFile = await readStatsFile(pathToTrimmedFile);
    const moduleDependentMap = new Map();

    // componets are imported from the index.ts | index.tsx
    // eg -
    // if changes are in ./src/components/Button/Button.tsx
    // check the reasons for the ./src/componenets/Button/index.ts
    const updateChangeFiles = await Promise.all(
        changedFiles.map(async (fileName) => {
        if(fileName.includes('components')){
            const array = fileName.split('/');
            array[array.length - 1] = 'index.ts';
            const index_ts = array.join('/');
            // below checks whether ./src/components/Button/index.ts 
            // exists or not if not change to index.tsx
            if(await isIndexTsx(index_ts, trimmedFile.modules)){
                const array = index_ts.split('/');
                array[array.length - 1] = 'index.tsx';
                return array.join('/');
            }
                return index_ts;
            }
            return fileName;
        })
    )
    for(const moduleName of updateChangeFiles) {
        const resolvedName = await moduleName;
        const reasons = await getReasonsOfModule(trimmedFile.modules, moduleName);
        moduleDependentMap.set(resolvedName, reasons);
    }
    return moduleDependentMap;
}
