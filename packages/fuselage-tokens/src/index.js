import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const dirs = (p) =>
  readdirSync(p).filter((f) => statSync(join(p, f)).isDirectory());

export default dirs(import.meta.dirname);
