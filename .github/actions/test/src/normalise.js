export function normaliseDDPath(changedFiles) {
  const normalizedFiles = [];
  for (const fileName of changedFiles) {
    const splitFile = fileName.split('/');
    splitFile.splice(0, 2, '.');
    normalizedFiles.push(splitFile.join('/'));
  }
  return normalizedFiles;
}
