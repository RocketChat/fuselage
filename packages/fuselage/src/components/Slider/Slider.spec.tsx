import { composeStories } from '@storybook/react-webpack5';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { ReactElement } from 'react';
import { I18nProvider } from 'react-aria';

import { render } from '../../testing';

import * as stories from './Slider.stories';
import Slider from './Slider';

const { Default, WithLabel, MultiThumb, WithDefaultValue } =
  composeStories(stories);

const getInjectedGradients = (): string[] => {
  const fromStyleTags = Array.from(document.querySelectorAll('style')).map(
    (style) => style.textContent ?? '',
  );
  const fromStyleSheets = Array.from(document.styleSheets).flatMap((sheet) =>
    Array.from(sheet.cssRules).map((rule) => rule.cssText),
  );

  return [...fromStyleTags, ...fromStyleSheets]
    .join('\n')
    .match(/linear-gradient\([^;]*\)/g) ?? [];
};

// The css-in-js stylesheet is shared across tests, so only gradients that
// appear after a render are attributable to it.
const renderAndCollectGradients = (ui: ReactElement) => {
  const before = new Set(getInjectedGradients());
  const result = render(ui);

  return { result, gradients: getInjectedGradients().filter((gradient) => !before.has(gradient)) };
};

describe('[Slider Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('should display the label when passed', () => {
    render(<WithLabel />);
    const label = screen.queryByText('Range');
    expect(label).toBeInTheDocument();
    expect(label?.textContent).toBe('Range');
  });

  it('should output the defaultValue when passed', () => {
    render(<WithDefaultValue />);
    const output = screen.queryByTestId('slider-output');
    expect(output?.textContent).toBe('25');
  });

  it('should have two thumbs when multiThumb prop is true', () => {
    render(<MultiThumb />);
    const thumbs = screen.queryAllByRole('slider');
    expect(thumbs.length).toBe(2);
  });

  it("should update Thumb's position when Thumb is clicked and dragged", async () => {
    render(<Default />);

    const slider = screen.getByRole<HTMLFormElement>('slider');

    await userEvent.tab();
    await userEvent.keyboard('{ArrowRight}');
    await userEvent.keyboard('{ArrowRight}');
    await userEvent.keyboard('{ArrowRight}');
    await userEvent.keyboard('{ArrowRight}');

    expect(slider['value']).toBe('4');
  });

  it('should position the track fill relative to minValue', () => {
    const { gradients } = renderAndCollectGradients(
      <Slider aria-label='range' minValue={50} maxValue={150} defaultValue={100} />,
    );

    const fillGradient = gradients.find((gradient) =>
      gradient.includes('to right'),
    );

    expect(fillGradient).toBeDefined();
    expect(fillGradient).toMatch(/50%(?!\d)/);
  });

  it('should mirror the track fill direction in RTL locales', () => {
    const { gradients } = renderAndCollectGradients(
      <I18nProvider locale='ar-AE'>
        <Slider aria-label='range' defaultValue={25} />
      </I18nProvider>,
    );

    expect(gradients.some((gradient) => gradient.includes('to left'))).toBe(
      true,
    );
    expect(gradients.some((gradient) => gradient.includes('to right'))).toBe(
      false,
    );
  });

  it('should keep the multi-thumb band ordered in RTL locales', () => {
    const { gradients } = renderAndCollectGradients(
      <I18nProvider locale='ar-AE'>
        <Slider aria-label='range' multiThumb defaultValue={[25, 75]} />
      </I18nProvider>,
    );

    const bandGradient = gradients.find((gradient) =>
      gradient.includes('to left'),
    );

    expect(bandGradient).toBeDefined();
    expect(bandGradient).toMatch(/25%/);
    expect(bandGradient).toMatch(/75%/);
  });
});
