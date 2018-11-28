import React from 'react';
import { render } from 'react-testing-library';

import { ThemeProvider, theme, TerminalTitle } from '../ui';

it('TerminalTitle: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <TerminalTitle>{ text }</TerminalTitle>
        </ThemeProvider>
    );

    expect(getByText(text)).toBeInTheDocument();
});
