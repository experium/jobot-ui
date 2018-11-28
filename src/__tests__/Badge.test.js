import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from '@smooth-ui/core-sc';

import { Badge } from '../components/Badge';
import { theme } from '../theme';

it('Badge: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(
        <ThemeProvider theme={theme}>
            <Badge>{ text }</Badge>
        </ThemeProvider>
    );

    expect(getByText(text)).toBeInTheDocument();
});
