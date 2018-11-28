import React from 'react';
import { render } from 'react-testing-library';

import { ThemeProvider, theme, Input } from '../ui';

it('Input: should renders input with placeholder', () => {
    const testId = 'input';
    const placeholder = 'Placeholder';
    const { getByTestId, getByPlaceholderText } = render(
        <ThemeProvider theme={theme}>
            <Input data-testid={testId} placeholder={placeholder} />
        </ThemeProvider>
    );

    expect(getByTestId(testId)).toBeInTheDocument();
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
});
