/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-dynamic-require */
import fs from 'fs';
import path from 'path';

export type PackageJson = {
  name: string;
  version: string;
  workspaces: string[];
};

export function getPackage(root: string): PackageJson | undefined {
  const pkgPath = path.resolve(root, 'package.json');
  if (fs.existsSync(pkgPath)) {
    return require(pkgPath) as PackageJson;
  }
  return undefined;
}
