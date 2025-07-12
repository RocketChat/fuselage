import { readStatsFile } from './stats/readStatsFile.js';

const seenModules = new Set();
// usage
// changedfile = Button.tsx
// const result = await getChangedStories(changedFile, '../dist/trimmed-fuselage-stats.json');
export const getChangedStories = async (changedFile, statsPath) => {
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

  if (changedFile.includes('.stories')) {
    affectedStories.add(changedFile);
  } else {
    walk(changedFile);
  }

  return [...affectedStories];
};

