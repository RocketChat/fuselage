import { listWorkspaces } from 'yarn-workspaces-list';

export const getPackages = (
  cwd = process.cwd()
): ReturnType<typeof listWorkspaces> => listWorkspaces({ cwd });

if (module === require.main) {
  getPackages().then(console.log).catch(console.error);
}
