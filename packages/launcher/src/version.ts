import { getPackage } from './package';

export const run = (dir = process.cwd()): void => {
  const pkg = getPackage(dir);

  if (!pkg) {
    console.error('No package.json found');
    process.exit(1);
  }

  pkg?.workspaces.forEach((workspace) => {
    console.log(workspace);
  });
};
