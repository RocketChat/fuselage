import { execa } from 'execa';
import * as core from '@actions/core';

export const runLoki = (storyPkg, reg) => {
    try {
        if(reg.length === 0) {
            const subprocess = execa('sh', ['-c', `cd packages/${storyPkg}  && yarn loki --requireReference --reactUri file:./storybook-static`], {
                stdio: 'inherit',
            });
        } else {
            const subprocess = execa('sh', ['-c', `cd packages/${storyPkg}  && yarn loki --requireReference --reactUri file:./storybook-static --storiesFilter="${reg}" --chromeTolerance=0.1`], {
                stdio: 'inherit',
            });
        }
    } catch (error) {
        core.setFailed(`some visual tests failed at packages/${storyPkg}`+error)
    }
}
