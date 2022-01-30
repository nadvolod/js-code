import React from 'react';
import { render } from '@testing-library/react';
import Error from './pages/Error';

test('404 page back-home button back home', () => {
	const { getByTestId } = render(<Error />);
	const button = getByTestId('back-home');
	expect(button.href).toContain('http://localhost');
});
