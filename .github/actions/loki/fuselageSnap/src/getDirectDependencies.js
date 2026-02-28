import { getComponentTitle } from './getComponentTitle.js';
import { getReasons } from './getReasons.js';
import { isStoryBookPkg } from './isStorybookPkg.js';
import { normaliseDDPath } from './normalise.js';

/**
 *
 * @param {Array<string>} changedFiles
 * @param {string} changedPackage
 * @returns
 */
export const getDirectDependencies = async (changedFiles, changedPackage) => {
  const normalizedFiles = normaliseDDPath(changedFiles);
  const saveComponentTitles = new Set();

  if (isStoryBookPkg(changedPackage)) {
    const promises = normalizedFiles.map(async (name) => {
      const result = await getReasons(
        name,
        `.github/actions/loki/fuselageSnap/dist/trimmed-${changedPackage}-stats.json`,
      );
      const componentTitles = await getComponentTitle(result, changedPackage);
      return componentTitles;
    });

    const allTitles = await Promise.all(promises);

    for (const titles of allTitles) {
      for (const title of titles) {
        saveComponentTitles.add(title);
      }
    }

    return { [changedPackage]: saveComponentTitles };
  }

  return { [changedPackage]: null };
};
