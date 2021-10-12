import path from 'path';

import { hashElement, HashElementNode } from 'folder-hash';

import { Workspace } from './workspace';

export const getFingerprint = async (
  name: string,
  cwd = process.cwd(),
  options: Parameters<typeof hashElement>[2] = {}
): Promise<[string, HashElementNode]> => {
  const result = await hashElement('.', cwd, {
    ...options,
    encoding: 'hex',
    folders: {
      exclude: ['.*', '**.*', '**node_modules', '**test_coverage', '**dist'],
    },
    files: {
      exclude: ['bundle-report.html'],
    },
    symbolicLinks: {
      include: false,
    },
  });
  return [result.hash, result];
};

if (module === require.main) {
  Workspace.getWorspaces()
    .then((workspaces) => {
      workspaces.forEach(async (workspace) => {
        const [fingerprint] = await getFingerprint(
          workspace.name,
          path.join(process.cwd(), workspace.location),
          {}
        );
        console.log(`${workspace.name}: ${fingerprint}`);
      });
    })
    .catch(console.error);
}
