import { getComponentTitle } from './getComponentTitle.js';
import { getReasons } from './getReasons.js';
import { isStoryBookPkg } from './isStorybookPkg.js';

// turbo run build --graph
const graph = [
  { 'css-in-js': 'css-supports' },
  { 'css-in-js': 'memo' },
  { 'css-in-js': 'stylis-logical-props-middleware' },
  { 'css-in-js': 'lint-all' },
  { 'css-supports': 'memo' },
  { 'css-supports': 'lint-all' },
  { emitter: 'lint-all' },
  { fuselage: 'css-in-js' },
  { fuselage: 'css-supports' },
  { fuselage: 'fuselage-hooks' },
  { fuselage: 'fuselage-polyfills' },
  { fuselage: 'fuselage-tokens' },
  { fuselage: 'icons' },
  { fuselage: 'memo' },
  { fuselage: 'styled' },
  { fuselage: 'lint-all' },
  { fuselage: 'testing-utils' },
  { 'fuselage-hooks': 'emitter' },
  { 'fuselage-hooks': 'fuselage-tokens' },
  { 'fuselage-hooks': 'lint-all' },
  { 'fuselage-hooks': 'testing-utils' },
  { 'fuselage-polyfills': 'lint-all' },
  { 'fuselage-toastbar': 'fuselage' },
  { 'fuselage-toastbar': 'fuselage-hooks' },
  { 'fuselage-toastbar': 'fuselage-tokens' },
  { 'fuselage-toastbar': 'layout' },
  { 'fuselage-toastbar': 'styled' },
  { 'fuselage-toastbar': 'lint-all' },
  { 'fuselage-tokens': 'build-design-tokens' },
  { 'fuselage-tokens': 'lint-all' },
  { icons: 'build-icons' },
  { icons: 'lint-all' },
  { layout: 'fuselage' },
  { layout: 'fuselage-tokens' },
  { layout: 'lint-all' },
  { logo: ' === isStoryBookPkgfuselage-hooks' },
  { logo: 'fuselage-tokens' },
  { logo: 'styled' },
  { logo: 'build-logo' },
  { logo: 'lint-all' },
  { memo: 'lint-all' },
  { 'mp3-encoder': 'lint-all' },
  { 'onboarding-ui': 'fuselage' },
  { 'onboarding-ui': 'fuselage-hooks' },
  { 'onboarding-ui': 'fuselage-polyfills' },
  { 'onboarding-ui': 'fuselage-tokens' },
  { 'onboarding-ui': 'icons' },
  { 'onboarding-ui': 'layout' },
  { 'onboarding-ui': 'logo' },
  { 'onboarding-ui': 'styled' },
  { 'onboarding-ui': 'lint-all' },
  { 'peggy-loader': 'lint-all' },
  { 'prettier-config': 'lint-all' },
  { 'string-helpers': 'lint-all' },
  { styled: 'css-in-js' },
  { styled: 'lint-all' },
  { 'stylis-logical-props-middleware': 'css-supports' },
  { 'stylis-logical-props-middleware': 'lint-all' },
  { 'build-design-tokens': 'lint-all' },
  { 'build-design-tokens': 'tools-utils' },
  { 'build-icons': 'lint-all' },
  { 'build-icons': 'tools-utils' },
  { 'build-logo': 'lint-all' },
  { 'build-logo': 'tools-utils' },
  { 'lint-all': '___ROOT___' },
  { scripts: '___ROOT___' },
  { 'testing-utils': 'lint-all' },
  { 'tools-utils': 'lint-all' },
  { 'update-readme': 'lint-all' },
];
/**
 *
 * @param {string} pkgName - Name of the package that a changed file belongs to.
 * @returns {Promise<Array<Object<string, Set<string>>>>} - A list of objects where each key is the dependent package name
 * and the value is a Set of affected component titles.
 */
export const traverseGraph = (pkgName) => {
  const traversedData = graph.filter((obj) => {
    const key = Object.keys(obj)[0];
    return isStoryBookPkg(key) && Object.values(obj)[0] === pkgName;
  });
  return traversedData;
};
export const mergePkgsObj = (pkgName) => {
  const relevantGraph = traverseGraph(pkgName);
  const transitive = [];
  for (const obj of relevantGraph) {
    transitive.push(traverseGraph(Object.keys(obj)[0]));
  }
  for (const arr of transitive) {
    for (const obj_tr of arr) {
      const transitive_keys = Object.keys(obj_tr)[0];
      let isPresent = 0;
      for (const obj_rel of relevantGraph) {
        const rel_keys = Object.keys(obj_rel)[0];
        if (transitive_keys === rel_keys) {
          isPresent = 1;
        }
      }
      if (isPresent === 0) {
        relevantGraph.push(obj_tr);
      }
    }
  }
  return relevantGraph;
};
export const getIndirectDps = async (pkgName) => {
  const relevantGraph = mergePkgsObj(pkgName);
  const promises = relevantGraph.map(async (obj) => {
    const key = Object.keys(obj)[0];
    const result = await getReasons(
      pkgName,
      `.github/actions/loki/fuselageSnap/dist/trimmed-${key}-stats.json`,
    );
    const titles = await getComponentTitle(result, key);
    return { [key]: titles };
  });

  const overall = await Promise.all(promises);
  return overall;
};
