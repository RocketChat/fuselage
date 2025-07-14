import { readStatsFile } from './stats/readStatsFile.js';

const seenModules = new Set();
/**
 * 
 * @param {string} name - component filename or path from src
 * @param {string} statsPath - path to .json file of stats
 * @returns {promise<string[]>} - list of affected components stories
 */
export const getReasons = async (name, statsPath) => {
  const stats = await readStatsFile(statsPath);
  const affectedStories = new Set();

  const walk = (file) => {
    if (seenModules.has(file)) return;
    seenModules.add(file);

    for (const module of stats.modules) {
      if (!module.name) continue;

      if (module.name.includes(file)) {
        if (module.name.includes('.stories')) {
          affectedStories.add(module.name);
        }

        if (module.reasons) {
          for (const reason of module.reasons) {
            if (reason.moduleName) {
              walk(reason.moduleName);
            }
          }
        }
      }
    }
  };

  if (name.includes('.stories')) {
    affectedStories.add(name);
  } else {
    walk(name);
  }

  return [...affectedStories];
};
