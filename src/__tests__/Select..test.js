import React from 'react';
import { render } from 'react-testing-library';
import { ThemeProvider } from '@smooth-ui/core-sc';

import { Select } from '../components/Select';
import { theme } from '../theme';

it('Select: should renders select with placeholder and options', () => {
    const testId1 = 'option1';
    const testId2 = 'option2';
    const testId3 = 'option3';
    const placeholder = 'Placeholder';
    const { getByTestId, getByPlaceholderText } = render(
        <ThemeProvider theme={theme}>
            <Select placeholder={placeholder}>
                <option data-testid={testId1}>option 1</option>
                <option data-testid={testId2}>option 2</option>
                <option data-testid={testId3}>option 3</option>
            </Select>
        </ThemeProvider>
    );

    expect(getByTestId(testId1)).toBeInTheDocument();
    expect(getByTestId(testId2)).toBeInTheDocument();
    expect(getByTestId(testId3)).toBeInTheDocument();
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();
});
