import { copyFileSync } from 'fs';

export function copyFiles(src, dest){
  try {
    copyFileSync(src, dest);
  } catch(error) {
    console.log("could not copy files:"+error);
  }
}
