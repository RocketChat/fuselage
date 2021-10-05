import { listWorkspaces } from 'yarn-workspaces-list';

export const getPackages = async (cwd = process.cwd()) =>
  listWorkspaces({ cwd });

if (module === require.main) {
  getPackages().then(console.log).catch(console.error);
}
