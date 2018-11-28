import React from 'react';
import { render } from 'react-testing-library';

import { ThemeProvider, ItemList, theme } from '../ui';

it('ItemList: should renders text', () => {
    const text = 'Text';
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <ItemList>{ text }</ItemList>
        </ThemeProvider>
    );

    expect(getByText(text)).toBeInTheDocument();
});
