import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from '@smooth-ui/core-sc';

import { TerminalTitle } from '../components/TerminalTitle';
import { theme } from '../theme';

it('TerminalTitle: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <TerminalTitle>{ text }</TerminalTitle>
        </ThemeProvider>
    );

    expect(getByText(text)).toBeInTheDocument();
});
