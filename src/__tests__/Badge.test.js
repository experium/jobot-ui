import React from 'react';
import { render } from 'react-testing-library';

import { theme, Badge, ThemeProvider } from '../ui';

it('Badge: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <Badge>{ text }</Badge>
        </ThemeProvider>
    );

    expect(getByText(text)).toBeInTheDocument();
});
