import React from 'react';
import { render } from 'react-testing-library';
import { LocationOn } from 'styled-icons/material/LocationOn.cjs';
import { ThemeProvider } from '@smooth-ui/core-sc'

import { FormGroup, FormGroupIcon } from '../components/Form';
import { Input } from '../components/Input';
import { theme } from '../theme';

it('FormGroup: should renders input', () => {
    const testId = 'input';
    const { getByTestId } = render(
        <ThemeProvider theme={theme}>
            <FormGroup mb={10}>
                <FormGroupIcon><LocationOn /></FormGroupIcon>
                <Input data-testid={testId} icon='true' placeholder='placeholder' />
            </FormGroup>
        </ThemeProvider>
    );

    expect(getByTestId(testId)).toBeInTheDocument();
});

it('FormGroupIcon: should renders icon', () => {
    const title = 'Location';
    const { getByTitle } = render(
        <FormGroupIcon>
            <LocationOn title={title} />
        </FormGroupIcon>
    );

    expect(getByTitle(title)).toBeInTheDocument();
});
