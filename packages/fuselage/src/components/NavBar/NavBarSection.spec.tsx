import { render } from '../../testing';

import NavBarGroup from './NavBarGroup';
import NavBarItem from './NavBarItem';
import NavBarSection from './NavBarSection';

describe('[NavBarSection]', () => {
  it('renders the group children passed to it', () => {
    const { getByTitle } = render(
      <NavBarSection>
        <NavBarGroup role='toolbar'>
          <NavBarItem icon='home' title='home' />
          <NavBarItem icon='magnifier' title='search' />
        </NavBarGroup>
      </NavBarSection>,
    );

    expect(getByTitle('home')).toBeInTheDocument();
    expect(getByTitle('search')).toBeInTheDocument();
  });

  it('keeps rendering groups when interleaved with falsy conditional children', () => {
    const show = false;

    const { getByTitle } = render(
      <NavBarSection>
        {show && <NavBarGroup role='toolbar' />}
        <NavBarGroup role='toolbar'>
          <NavBarItem icon='plus' title='create new' />
        </NavBarGroup>
      </NavBarSection>,
    );

    expect(getByTitle('create new')).toBeInTheDocument();
  });
});
