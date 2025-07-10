// import { readStatsFile } from './readStatsFile.js';

const filePath = './dump/compilation-stats.json';

const data = await readStatsFile(filePath);
// const changedFiles = ['./src/components/Chip.tsx']
const changedFiles = ['./src/index.ts']

export const affectedFiles = async () => {
    const moduleObj = data.modules;
    moduleObj.map((value) => {
        if(value.name === changedFiles[0]){
            value.reasons.map((dependentName) => {
                console.log(dependentName.moduleName)
            })
        }
    })
}
affectedFiles();