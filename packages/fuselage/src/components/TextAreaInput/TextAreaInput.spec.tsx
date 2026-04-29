import { render, screen } from '../../testing';

import TextAreaInput from './TextAreaInput';

describe('[TextAreaInput]', () => {
	it('renders without crashing', () => {
		render(<TextAreaInput />);
	});

	it('should have the disabled attribute when the disabled prop is true', () => {
		render(<TextAreaInput disabled />);
		
		const textArea = screen.getByRole('textbox');
		
		expect(textArea).toBeDisabled();
		expect(textArea).toHaveAttribute('disabled');
	});

	it('should be read-only when the readOnly prop is true', () => {
		render(<TextAreaInput readOnly />);
		
		const textArea = screen.getByRole('textbox');
		
		// Note: readOnly elements are NOT 'disabled', but they are 'readOnly'
		expect(textArea).not.toBeDisabled();
		expect(textArea).toHaveAttribute('readonly');
	});

	it('should render an addon when provided', () => {
		render(<TextAreaInput addon={<span data-testid='addon'>icon</span>} />);
		
		const addon = screen.getByTestId('addon');
		expect(addon).toBeInTheDocument();
	});
});