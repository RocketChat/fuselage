import endent from 'endent';

import { Package } from '../types/Package';
import { section } from './section';

export const pkgReadme = (pkg: Package): string =>
  endent`
    ${section(pkg, 'header')}

    ## Install

    ${section(pkg, 'install')}

    ## Contributing

    ${section(pkg, 'contributing(msg)')}

    ${
      pkg.scripts?.build
        ? endent`
            ### Building

            As this package dependends on others in this monorepo, before anything run the following at the root directory:

            ${section(pkg, 'yarn(build)')}
          `
        : ''
    }

    ${
      pkg.scripts?.lint
        ? endent`
            ### Linting

            To ensure the source is matching our coding style, we perform [linting](https://en.wikipedia.org/wiki/Lint_(software)).
            Before commiting, check if your code fits our style by running:

            ${section(pkg, 'yarn(lint)')}

            Some linter warnings and errors can be automatically fixed:

            ${section(pkg, 'yarn(lint-and-fix)')}
          `
        : ''
    }

    ${
      pkg.scripts?.test
        ? endent`
            ### Running tests

            Whenever possible, add tests to describe exactly what your code do. You can run them by yourself:

            ${section(pkg, 'yarn(test)')}
          `
        : ''
    }

    ${
      pkg.scripts?.storybook
        ? endent`
            ### Component stories

            We develop and describe our visual components in the form of stories, manage by a tool called [Storybook](https://storybook.js.org/).
            To start developing with Storybook, run:

            ${section(pkg, 'yarn(storybook)')}
          `
        : ''
    }

    ${
      pkg.scripts?.['update-storybook']
        ? endent`
            ### Visually testing stories

            We perform visual regression testing in our component stories using [Loki](https://loki.js.org/).
            Everytime you add, modify, or remove components, you should update the set of reference images used to match
            how the components render in a real browser by running the following:

            ${section(pkg, 'yarn(update-storybook)')}
          `
        : ''
    }
  `;
