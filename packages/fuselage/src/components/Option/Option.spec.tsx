import { render } from '@testing-library/react';
import React from 'react';

import Option, { OptionContent } from '.';
import { prevent } from '../../helpers/prevent';

jest.mock('../../helpers/prevent');

describe('Option', () => {
  it('renders without crashing', () => {
    render(
      <Option>
        <OptionContent>Lorem Ipsum Lorem</OptionContent>
      </Option>
    );
  });

  it('should call onClick when click', () => {
    const click = jest.fn();

    const { getByText } = render(
      <Option onClick={click}>
        <OptionContent>Option</OptionContent>
      </Option>
    );

    getByText('Option').click();

    expect(click).toBeCalledTimes(1);
  });

  it('should call prevent when click on disabled', () => {
    const click = jest.fn();

    const { getByText } = render(
      <Option disabled onClick={click}>
        <OptionContent>Option</OptionContent>
      </Option>
    );

    getByText('Option').click();

    expect(click).toBeCalledTimes(0);
    expect(prevent).toBeCalledTimes(1);
  });
});
