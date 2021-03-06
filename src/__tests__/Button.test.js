import React from 'react';
import { render } from 'react-testing-library';
import { Search } from 'styled-icons/octicons';

import { Button } from '../ui';

it('Button: should renders with text', () => {
    const text = 'Text';
    const { getByText } = render(<Button>{ text }</Button>);

    expect(getByText(text)).toBeInTheDocument();
});

it('Button: should renders with icon', () => {
    const title = 'Search';
    const { getByTitle } = render(<Button size='lg'><Search title={title} /></Button>);

    expect(getByTitle(title)).toBeInTheDocument();
});
