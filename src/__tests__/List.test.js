import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from '@smooth-ui/core-sc';

import { ItemList } from '../components/List';
import { theme } from '../theme';

it('ItemList: should renders text', () => {
    const text = 'Text';
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <ItemList>{ text }</ItemList>
        </ThemeProvider>
    );

    expect(getByText(text)).toBeInTheDocument();
});
