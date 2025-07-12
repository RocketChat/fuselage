import { getPackageDependentsTree } from './getPackageDependentsTree.js';

// test
const changedFiles = [
    'packages/fuselage/src/components/Button/Button.tsx',
    'packages/fuselage/src/components/Box/Box.tsx',
    'packages/fuselage-toastbar/src/ToastBar.stories.tsx',
    'packages/css-in-js/index.ts',
    'packages/anxhul10/css/in/js'
]
const packageNameTemp = 'fuselage';
const tree = {[packageNameTemp]: getPackageDependentsTree(packageNameTemp)};

//
const arrangeChangedFiles = (changedFiles) => {
    const packageToFileMap = {};
    for(const filePath of changedFiles) {
        try {
            const match = filePath.match(/^packages\/([^/]+)/);
            const packageName = match[1];
            if(match){
                if(!packageToFileMap[packageName]) {
                    packageToFileMap[packageName] = [];
                }
            packageToFileMap[packageName].push(filePath);
        } 
        } catch(error) {
            console.log('Ensure file path contains packages ');
            console.log(error.message);
        }
    }
    return packageToFileMap;
}
const getPackagetoFileMap = arrangeChangedFiles(changedFiles);
export const runner = async ()=> {

}

export const traverseDependencyTree = (tree, parent = null) => {
  for (const [key, value] of Object.entries(tree)) {
    if (value === null) {
        console.log('current:'+key);
      console.log(parent); // Print the parent when leaf node (null)
    } else if (typeof value === 'object') {
      printLeafParents(value, key); // Go deeper, pass current key as parent
    }
  }
};