import React from 'react';
import { render } from 'react-testing-library';

import { Card, CardBtn } from '../components/Card';
import { Button } from '../components/Button';

it('Card: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(<Card>{ text }</Card>);

    expect(getByText(text)).toBeInTheDocument();
});

it('Card: should renders with CardBtn', () => {
    const testId = 'cardBtn';
    const { getByTestId } = render(
        <Card>
            <CardBtn data-testid={testId} />
        </Card>
    );

    expect(getByTestId(testId)).toBeInTheDocument();
});

it('CardBtn: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(<CardBtn>{ text }</CardBtn>);

    expect(getByText(text)).toBeInTheDocument();
});

it('CardBtn: should renders with button', () => {
    const testId = 'button';
    const { getByTestId } = render(
        <CardBtn>
            <Button data-testid={testId}>Text</Button>
        </CardBtn>
    );

    expect(getByTestId(testId)).toBeInTheDocument();
});
