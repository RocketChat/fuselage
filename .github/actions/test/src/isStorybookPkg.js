const storybookPkgs = ['fuselage', 'fuselage-toastbar', 'onboarding-ui', 'layout'];

export const isStoryBookPkg = (packageName) => {
    for(const pkg of storybookPkgs) {
        if(pkg === packageName) return true;
    }
    return false;
}