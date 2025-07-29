import { renameSync, readdirSync, statSync } from 'fs';
import path from 'path';

export const resolveLokiReferences = () => {
  const root = path.join(process.cwd(), '.loki/reference');
  readdirSync(root)
    .map((file) => path.join(root, file))
    .filter((path) => !statSync(path).isDirectory() && path.includes('_docker'))
    .forEach((dir) => {
      renameSync(dir, dir.replace('_docker', ''));
    });
};
