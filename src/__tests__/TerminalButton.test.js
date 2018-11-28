import React from 'react';
import { render } from 'react-testing-library';
import { Search } from 'styled-icons/octicons/Search.cjs';
import { ThemeProvider } from '@smooth-ui/core-sc';

import { TerminalButton } from '../components/TerminalButton';
import { theme } from '@smooth-ui/core-sc';

it('TerminalButton: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <TerminalButton>{ text }</TerminalButton>
        </ThemeProvider>
    );

    expect(getByText(text)).toBeInTheDocument();
});

it('TerminalButton: should renders with icon', () => {
    const title = 'Search';
    const { getByTitle } = render(
        <ThemeProvider theme={theme}>
            <TerminalButton>
                <Search title={title} />
            </TerminalButton>
        </ThemeProvider>
    );

    expect(getByTitle(title)).toBeInTheDocument();
});
