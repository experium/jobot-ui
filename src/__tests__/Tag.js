import React from 'react';
import { render } from 'react-testing-library';
import { Computer } from 'styled-icons/material';

import { Tag } from '../ui';

it('Tag: should renders text', () => {
    const text = 'Text';
    const { getByText } = render(<Tag>{ text }</Tag>);

    expect(getByText(text)).toBeInTheDocument();
});

it('Tag: should renders icon and text', () => {
    const text = 'Text';
    const title = 'Computer';
    const { getByText, getByTitle } = render(
        <Tag>
            <Computer title={title} /> { text }
        </Tag>
    );

    expect(getByText(text)).toBeInTheDocument();
    expect(getByTitle(title)).toBeInTheDocument();
});
