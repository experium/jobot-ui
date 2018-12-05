import React from 'react';
import { styled, Input as SmoothInput, css } from '@smooth-ui/core-sc';

export const Input = ({ icon, ...props }) => {
    const Component = styled(SmoothInput)`
        border-radius: 0;
        ${icon && css`
            padding-left: 40px;
        `}
    `;

    return <Component {...props} />;
};

Input.defaultProps = {
    position: 'relative',
};
