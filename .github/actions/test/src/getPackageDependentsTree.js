// Key: package name
// Value: array of dependent package names
const packageDependents = {
        'css-in-js':{
            'fuselage': null,
            'styled': null
        },
        'css-supports':{
            'fuselage': null
        },
        'emitter':{
            'fuselage-hooks': null
        },
        'fuselage': {
            'fuselage-toastbar': null,
            'onboarding-ui': null,
            'layout': null
        },
        'fuselage-hooks':{
            'fuselage': null,
            'fuselage-toastbar': null,
            'logo': null,
            'onboarding-ui': null
        },
        'fuselage-polyfills': {
            'fuselage': null,
            'onboarding-ui': null
        },
        'fuselage-toastbar': null,
        'fuselage-tokens': {
            'fuselage': null,
            'fuselage-hooks': null,
            'fuselage-toastbar': null,
            'layout': null,
            'logo': null,
            'onboarding-ui': null
        },
        'icons': {
            'onboarding-ui': null,
            'fuselage': null
        },
        'layout':{
            'fuselage-toastbar': null,
            'onboarding-ui': null
        },
        'logo':{
            'onboarding-ui': null,
        },
        'memo':{
            'css-supports': null,
            'fuselage': null
        },
        'mp3-encoder': null,
        'onboarding-ui': null,
        'peggy-loader': null,
        'peggy-config': null,
        'string-helpers': null,
        'styled': {
            'fuselage': null,
            'fuselage-toastbar': null,
            'logo': null,
            'onboarding-ui': null
        },
        'stylis-logical-props-middleware': null
    }

export const getPackageDependentsTree = (pkgName) => {
    const directDependents = packageDependents[pkgName];
    if (!directDependents) return null;

    const result = {};

    for (const dependent in directDependents) {
        result[dependent] = getPackageDependentsTree(dependent, packageDependents);
    }

    return result;
}
/*
{
eg-
const getTree = {'fuselage':getPackageDependentsTree('fuselage')}

  fuselage: {
    'fuselage-toastbar': null,
    'onboarding-ui': null,
    layout: { 'fuselage-toastbar': null, 'onboarding-ui': null }
  }
}
*/
