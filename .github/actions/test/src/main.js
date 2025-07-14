import { getPackageDependentsTree } from './getPackageDependentsTree.js';
import { getDirectDependencies } from './getDirectDependencies.js';
import { execa } from 'execa';

// test
const changedFiles = [
    'packages/fuselage/src/components/Button/Button.tsx',
    'packages/fuselage/src/components/Box/Box.tsx',
    'packages/fuselage-toastbar/src/ToastBar.stories.tsx',
    'packages/css-in-js/index.ts',
    'packages/anxhul10/css/in/js',
    'packages/onboarding-ui/src/common/AgreeTermsField.tsx',
    'packages/layout/src/components/ActionLink/ActionLink.tsx',
    'packages/layout/src/contexts/LayoutContext.ts'
]
// key: package name
// value: array of file name of path
const mapPackagesToFilePath = (changedFiles) => {
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

async function mapToPackageSet(changedFiles, pkgName) {
    const getDirectCmp = await getDirectDependencies(changedFiles, pkgName);
    return getDirectCmp;
}
async function runLoki(pkgName, titles) {
    try {
    const subprocess = execa('sh', ['-c', 'cd packages/fuselage  && yarn loki --requireReference --reactUri file:./storybook-static --storiesFilter Button'], {
        stdio: 'inherit',
    });
    console.log(titles);
    await subprocess;
    } catch (error) {
    console.error('Command failed:', error);
    }
}

async function checkNullValue(pkgWithCmpObj) {
    if( Object.values(pkgWithCmpObj)[0] === null ) return true;
    return false;
}
export const runner = async ()=> {
    const map = mapPackagesToFilePath(changedFiles);
    const ovrerallAffectedComponents = [];
    for(const pkgName in map) {
        const pkgWithCmpObj = await mapToPackageSet(map[pkgName], pkgName)
        if(!await checkNullValue(pkgWithCmpObj)) {
           ovrerallAffectedComponents.push(pkgWithCmpObj); 
        }
    }
    // loki 
    // for(const obj of ovrerallAffectedComponents) {
    //     for(const pkg in obj) {
    //         await runLoki(pkg, obj[pkg]);
    //     }
    // }
}
runner(changedFiles);

/*
    const overallAffectedComponents = {};
    const getPackagetoFilePathMap = mapPackagesToFilePath(changedFiles);
    const package1 = new Set();
    package1.add('foo');
    package1.add('bar');
    package1.add('foo');
    const package2 = new Set();
    package2.add('another');
    package2.add('package');
    overallAffectedComponents['package1'] = package1;
    overallAffectedComponents['package2'] = package2;
    for(const property in overallAffectedComponents) {
        for(const value of overallAffectedComponents[property]) {
            console.log(property+":"+value);
        }
    }
*/