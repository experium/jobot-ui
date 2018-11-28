import React from 'react';
import { render } from 'react-testing-library';

import { BoxImage, Container } from '../ui';

it('Container: should renders text', () => {
    const text = 'Text';
    const { getByText } = render(<Container>{ text }</Container>);

    expect(getByText(text)).toBeInTheDocument();
});

it('BoxImage: should renders text', () => {
    const text = 'Text';
    const { getByText } = render(<BoxImage image='img.png'>{ text }</BoxImage>);

    expect(getByText(text)).toBeInTheDocument();
});
