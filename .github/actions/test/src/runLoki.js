import { execa } from 'execa';

export const runLoki = async (storyPkg, reg) => {
  await execa(
    'yarn',
    [
      'loki',
      '--requireReference',
      '--reactUri',
      'file:./storybook-static',
      '--chromeFlags=--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor',
    ],
    {
      cwd: `packages/${storyPkg}`,
      stdio: 'inherit',
    },
  );

  // if(reg === 'full test') {
  //     child_process.execSync(`cd packages/${storyPkg} && yarn loki --requireReference --reactUri file:./storybook-static --chromeFlags=\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\"`,{stdio:[0,1,2]});
  // }
  // else {
  //     console.log('smart test');
  // }
  // try {
  //     if(reg === 'full test') {
  //         const subprocess = await execa('sh', ['-c', `cd packages/${storyPkg}  && yarn loki --requireReference --reactUri file:./storybook-static --chromeFlags=\"--headless --no-sandbox --disable-gpu --disable-features=VizDisplayCompositor\"`], {
  //             stdio: 'inherit',
  //         });
  //     } else {
  //         const subprocess = await execa('sh', ['-c', `cd packages/${storyPkg}  && yarn loki --requireReference --reactUri file:./storybook-static --storiesFilter="${reg}" --chromeTolerance=0.1`], {
  //             stdio: 'inherit',
  //         });
  //     }
  // } catch (error) {
  //     core.setFailed(`some visual tests failed at packages/${storyPkg}`+error)
  // }
};
