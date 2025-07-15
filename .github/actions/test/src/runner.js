import { getDirectDependencies } from './getDirectDependencies.js';
import { execa } from 'execa';
import { getIndirectDps } from './getIndirectDependency.js';
import { generateRegex } from './utils/generateRegex.js';

// test
const changedFiles = [
    // 'packages',
    // 'some.txt',
    // 'package.json',
    // 'yarn.lock',
    'packages/layout/package.json',
    // 'packages/fuselage/package.json',
    // 'packages/fuselage/src/components/Box/Box.tsx',
    // 'packages/fuselage-toastbar/src/ToastBar.stories.tsx',
    // 'packages/css-in-js/index.ts',
    // 'packages/anxhul10/css/in/js',
    // 'packages/onboarding-ui/src/common/AgreeTermsField.tsx',
    // 'packages/layout/src/components/ActionLink/ActionLink.tsx',
    // 'packages/layout/src/contexts/LayoutContext.ts',
]

const mapPackagesToFilePath = (changedFiles) => {
    const packageToFileMap = {};
    for(const filePath of changedFiles) {
        if(filePath.split('/').length !== 1) {
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
    }
    return packageToFileMap;
}

/**
 * @param {Array<Object<string, set<string>>>} saveDirectDps - list of dependent components within the changed package
 * @param {Array<Array<Object<string, Set<string>>>>} saveIndirectDps - list of dependent component within dependent packages
 * @param {Object<string, string[]>} pkgToFileMap - Mapping of package name to array of changed files.
 * @returns {Promise<Object<string, Set<string>>>} - Merged map of package names to their affected component titles. 
*/
async function mergeCmpDeps(saveDirectDps, saveIndirectDps, pkgToFileMap) {
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
    for(const pkg in pkgToFileMap) {
        for(const file of pkgToFileMap[pkg]) {
            if(file.includes('package.json')|| file.includes('.storybook')) {
                if(pkg === 'fuselage') {
                    fuselage.clear();
                    fuselage.add('full test');
                } else if (pkg === 'fuselage-toastbar') {
                    fuselageToastbar.clear();
                    fuselageToastbar.add('full test');
                } else if (pkg === 'onboarding-ui') {
                    onboardingUi.clear();
                    onboardingUi.add('full test');
                } else if (pkg === 'layout') {
                    layout.clear();
                    layout.add('full test');
                }
                else {
                    console.log('package donot contain storybook ');
                }
            }
        }
    }
    return {['fuselage']:fuselage, ['fuselage-toastbar']:fuselageToastbar, ['onboarding-ui']:onboardingUi, ['layout']:layout};
}


function potentialFullTest(changedFiles) {
    for(const file of changedFiles) {
        if(file.includes('tools') || file.includes('yarn.lock') ){
            return true;
        } else {
            const pkg = file.split('/')[0];
            if(pkg.includes('package.json')){
                return true;
            }
        }
    }
    return false;
}
export const runner = async ()=> {
    if(potentialFullTest(changedFiles)) {
        const fuselage = new Set();
        const fuselageToastbar = new Set();
        const onboardingUi = new Set();
        const layout = new Set();
        fuselage.add('full test')
        fuselageToastbar.add('full test');
        onboardingUi.add('full test');
        layout.add('full test');
        return {['fuselage']:fuselage, ['fuselage-toastbar']:fuselageToastbar, ['onboarding-ui']:onboardingUi, ['layout']:layout};
    } else {
        const map = mapPackagesToFilePath(changedFiles);
        const saveIndirectDps = new Array();
        const saveDirectDps = new Array();
        for(const pkgName in map) {
            const chunk = map[pkgName][0].split('/');
            if(chunk.length === 3 && chunk[2] != 'package.json') continue;
            else if(chunk.length === 2 ) continue;
            else if(chunk.length === 1) continue;
            saveDirectDps.push(await getDirectDependencies(map[pkgName], pkgName));
            saveIndirectDps.push(await getIndirectDps(pkgName));
        }
        const result = await mergeCmpDeps(saveDirectDps, saveIndirectDps, map);
        return result;
    }
}


/*
AIL  chrome.docker/tablet/Feedback/Callout
       With Actions

*/