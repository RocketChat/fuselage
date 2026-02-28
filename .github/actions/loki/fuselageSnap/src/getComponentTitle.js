import { readStatsFile } from './stats/readStatsFile.js';

/**
 *
 * @param {string[]} storyNameArray - name or file path from src which includes .stories
 * @param {string} changedPackage - current pacakge which is changed
 * @returns {promise<Set<string>>} - A Promise that resolves to a set of component titles.
 */
export const getComponentTitle = async (storyNameArray, changedPackage) => {
  const indexJSON = await readStatsFile(
    `.github/actions/loki/fuselageSnap/dist/${changedPackage}-sb.json`,
  );
  const componentSet = new Set();
  for (const storyName of storyNameArray) {
    for (const entry of Object.values(indexJSON.entries)) {
      if (entry.importPath === storyName) {
        componentSet.add(entry.title);
      }
    }
  }
  return componentSet;
};
