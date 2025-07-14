import { getDirectDependencies } from './getDirectDependencies.js';
import { execa } from 'execa';
import { getIndirectDps } from './getIndirectDependency.js';

// test
const changedFiles = [
    'packages/fuselage/src/components/Button/Button.tsx',
    'packages/fuselage/src/components/Box/Box.tsx',
    'packages/fuselage-toastbar/src/ToastBar.stories.tsx',
    'packages/css-in-js/index.ts',
    'packages/anxhul10/css/in/js',
    'packages/onboarding-ui/src/common/AgreeTermsField.tsx',
    'packages/layout/src/components/ActionLink/ActionLink.tsx',
    'packages/layout/src/contexts/LayoutContext.ts',
    'tools/scripts/package.json'
]

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

/**
 * @param {} saveDirectDps - list of dependent components within the changed package
 * @param {} saveIndirectDps - list of dependent component within dependent packages
 * @returns {{Promise<object<Set>>}} - list of merged changed componet titles from saveDirectDps and saveIndirectDps
 */
async function mergeCmpDeps(saveDirectDps, saveIndirectDps) {
    const fuselage = new Set();
    const fuselageToastbar = new Set();
    const onboardingUi = new Set();
    const layout = new Set();
    for (const parentObj of saveIndirectDps) {
        for (const childObj of parentObj) {
            const [key, valueSet] = Object.entries(childObj)[0];

            if (key === 'fuselage') {
                for (const item of valueSet) fuselage.add(item);
            } else if (key === 'fuselage-toastbar') {
                for (const item of valueSet) fuselageToastbar.add(item);
            } else if (key === 'onboarding-ui') {
                for (const item of valueSet) onboardingUi.add(item);
            } else if (key === 'layout') {
                for (const item of valueSet) layout.add(item);
            }
        }
    }
    for(const parentObj of saveDirectDps) {
        const [key, value] = Object.entries(parentObj)[0];
        if(value !== null) {
            if(key === 'fuselage') {
                for(const cmp of value) fuselage.add(cmp);
            } else if(key === 'fuselage-toastbar') {
                for(const cmp of value) fuselageToastbar.add(cmp);
            } else if(key === 'onboarding-ui') {
                for(const cmp of value) onboardingUi.add(cmp);
            }
            else if (key === 'layout') {
                for(const cmp of value) layout.add(cmp);
            }
        }
    }
    return {['fuselage']:fuselage, ['fuselage-toastbar']:fuselageToastbar, ['onboarding-ui']:onboardingUi, ['layout']:layout};
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
    const saveIndirectDps = new Array();
    const saveDirectDps = new Array();
    for(const pkgName in map) {
        saveDirectDps.push(await getDirectDependencies(map[pkgName], pkgName));
        saveIndirectDps.push(await getIndirectDps(pkgName));
    }
    const result = await mergeCmpDeps(saveDirectDps, saveIndirectDps);
    console.log(result);
    // console.log(totalChangedCmp);
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