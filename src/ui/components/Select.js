import React from 'react';
import { styled, Select as SmoothSelect, css } from '@smooth-ui/core-sc'

export const Select = ({ icon, ...props }) => {
    const Component = styled(SmoothSelect)`
        select {
            border-radius: 0;
        }

        ${icon && css`
            select {
                padding-left: 40px;
            }
        `}
    `;

    return <Component {...props} />;
};
