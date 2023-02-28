import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { testsFromStories } from '../../helpers/tests';
import * as stories from './MultiSelect.stories';

withResizeObserverMock();

testsFromStories(stories);
