import { readStatsFile } from './readStatsFile.js';
import { writeFile } from 'fs/promises';

const isUserCode = (module) => {
    if(!module.name) return false;
    const isWebpackInternal = module.name.startsWith('(webpack)')
    const isNodeModuleRuntime = module.name.includes('node_modules') || module.name.includes('webpack/runtime/');
    return !isWebpackInternal && !isNodeModuleRuntime;
}

export const trimStatsFile = async (filePath) => {
    const getStats = await readStatsFile(filePath);
    const trimmedStats = getStats.modules
    .filter(module => isUserCode(module))
    .map(value => {
        return ['name', 'id','reasons'].reduce((result, key) => {
            if( key === 'reasons'){
                result[key] = value[key].map(reasonObj => {
                    return {
                        moduleName: reasonObj.moduleName,
                        moduleId: reasonObj.moduleId
                    }
                })
            }
            else{
                result[key] = value[key];
            }
            return result;
        }, {});
    })
    try {
        const trimmedJSON = JSON.stringify({'modules': trimmedStats}, null, 4);
        await writeFile('trimmedStats.json' ,trimmedJSON);
    }
    catch(err){
        console.error("Error occured while writing file ...");
    }
}
