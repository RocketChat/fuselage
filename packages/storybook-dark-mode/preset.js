function managerEntries(entry = []) {
  return [...entry, require.resolve('./dist/preset/manager')];
}

module.exports = {
  managerEntries,
};
