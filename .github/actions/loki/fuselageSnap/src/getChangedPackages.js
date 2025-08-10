export const getChangedPackages = (filechanged) => {
  const changedPackages = [];
  filechanged.forEach((fileName) => {
    const dismantle = fileName.split('/');
    changedPackages.push(dismantle[1]);
  });
  return changedPackages;
};
