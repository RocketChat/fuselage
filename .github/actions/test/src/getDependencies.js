import { trimStatsFile } from './stats/trimStatsFile.js';
import { readStatsFile } from './stats/readStatsFile.js';
const test = new Map();

test.set("key", {"obj1":"hii","obj2":"hii"});
console.log(test.get("key"));

const changedFiles = ['./src/components/Card/CardBody.tsx','./src/components/AudioPlayer/AudioPlayer.tsx'];
// if in compoenet folder check index of the component
// eg - ./src/componets/Button/index.ts
// this takes the index.ts file and return false if index.ts not exists

async function isIndexTsx(index_ts, trimmedFile){
    for(const module of trimmedFile) {
        if(module.name === index_ts ){
            return false;
        }
    }
    return true;
}

const filePath = '../dump/compilation-stats.json';
export const getDependencies = async (changedFiles, filePath) => {
    await trimStatsFile(filePath);
    const trimmedFile = await readStatsFile('./trimmedStats.json');
    // componets are imported from the index.ts | index.tsx
    // eg -
    // if changes are in ./src/components/Button/Button.tsx
    // check the reasons for the ./src/componenets/Button/index.ts
    const updateChangeFiles = changedFiles.map(async (fileName) => {
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
    })
    
    changedFiles.map((fileName) => {
        trimmedFile.modules.map((module) => {
            if(module.name === fileName){
                // console.log(module.reasons);
            }
        })
    })
}
getDependencies(changedFiles, filePath);
