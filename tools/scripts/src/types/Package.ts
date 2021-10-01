export type Package = {
  name: string;
  dirname: string;
  description?: string;
  license?: string;
  scripts?: Record<string, string>;
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
};
