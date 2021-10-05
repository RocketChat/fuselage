import path from 'path';

import { hashElement, HashElementNode } from 'folder-hash';

import { getPackages } from './workspace';

export const getFingerprint = async (
  name: string,
  cwd = process.cwd(),
  options: Parameters<typeof hashElement>[2]
): Promise<[string, HashElementNode] | []> => {
  try {
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
    console.log(`${name} fingerprint: ${result.hash}`);
    return [result.hash, result];
  } catch (error) {
    return [];
  }
};

if (module === require.main) {
  getPackages()
    .then((packages) => {
      packages.forEach(async (pkg) => {
        const [fingerprint] = await getFingerprint(
          pkg.name,
          path.join(process.cwd(), pkg.location),
          {}
        );
        console.log(`${pkg.name}: ${fingerprint}`);
      });
    })
    .catch(console.error);
}
