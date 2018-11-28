import React from 'react';
import { render } from 'react-testing-library';

import { LinkWhite, ListUl } from '../ui';

it('LinkWhite: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(<LinkWhite>{ text }</LinkWhite>);

    expect(getByText(text)).toBeInTheDocument();
});

it('ListUl: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(<ListUl>{ text }</ListUl>);

    expect(getByText(text)).toBeInTheDocument();
});
