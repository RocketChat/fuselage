import { prevent } from '../../helpers/prevent';
import { render } from '../../testing';

import Option, { OptionContent } from '.';

jest.mock('../../helpers/prevent');

describe('Option', () => {
  it('renders without crashing', () => {
    render(
      <Option>
        <OptionContent>Lorem Ipsum Lorem</OptionContent>
      </Option>,
    );
  });

  it('should call onClick when click', () => {
    const click = jest.fn();

    const { getByText } = render(
      <Option onClick={click}>
        <OptionContent>Option</OptionContent>
      </Option>,
    );

    getByText('Option').click();

    expect(click).toHaveBeenCalledTimes(1);
  });

  it('should call prevent when click on disabled', () => {
    const click = jest.fn();

    const { getByText } = render(
      <Option disabled onClick={click}>
        <OptionContent>Option</OptionContent>
      </Option>,
    );

    getByText('Option').click();

    expect(click).toHaveBeenCalledTimes(0);
    expect(prevent).toHaveBeenCalledTimes(1);
  });

  it('should render description when passed', () => {
    const { getByText } = render(
      <Option label='Option label' description='Option description' />,
    );

    expect(getByText('Option label')).toBeInTheDocument();
    expect(getByText('Option description')).toBeInTheDocument();
  });

  it('should not render description when description is passed but label is not', () => {
    const { queryByText } = render(<Option description='Option description' />);

    expect(queryByText('Option description')).not.toBeInTheDocument();
  });
});
