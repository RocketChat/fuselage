const storybookPkgs = [
  'fuselage',
  'fuselage-toastbar',
  'onboarding-ui',
  'layout',
];
/**
 *
 * @param {string} packageName - name of the pakage
 * @returns {boolean} - true if package uses storybook
 */
export const isStoryBookPkg = (packageName) => {
  for (const pkg of storybookPkgs) {
    if (pkg === packageName) return true;
  }
  return false;
};
