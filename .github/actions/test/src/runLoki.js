import { execa } from 'execa';
import * as core from '@actions/core';

export const runLoki = async (storyPkg, reg) => {
    try {
        if(reg.length === 0) {
            const subprocess = await execa('sh', ['-c', `cd packages/${storyPkg}  && yarn loki --requireReference --reactUri file:./storybook-static`], {
                stdio: 'inherit',
            });
        } else {
            const subprocess = await execa('sh', ['-c', `cd packages/${storyPkg}  && yarn loki --requireReference --reactUri file:./storybook-static --storiesFilter="${reg}"`], {
                stdio: 'inherit',
            });
        }
    } catch (error) {
        core.setFailed(`some visual tests failed at packages/${storyPkg}`+error)
    }
}
