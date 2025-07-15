export const getChangedPackages = (filechanged) => {
    const changedPackages = new Array();
    filechanged.map((fileName) => {
        const dismantle = fileName.split('/');
        changedPackages.push(dismantle[1]);
    })
    return changedPackages;
}
