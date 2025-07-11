import { getDependencies } from './getDependencies.js';
// temp
const changedFiles = ['./src/components/Button/Button.tsx']
const filePath = '../dump/compilation-stats.json';

export const getComponentsName = async () => {
    const changedAndAffectedNames = new Map();
    const dependenciesMap = await getDependencies(changedFiles, filePath);
    for(const [key, value] of dependenciesMap){
        
    }
}
getComponentsName();