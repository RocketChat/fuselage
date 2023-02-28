import { withResizeObserverMock } from 'testing-utils/mocks/withResizeObserverMock';

import { testsFromStories } from '../../helpers/tests';
import * as stories from './Select.stories';

withResizeObserverMock();

testsFromStories(stories);
