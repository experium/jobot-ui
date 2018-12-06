import React from 'react';
import { styled , Box, css } from "@smooth-ui/core-sc";

export const Tag = ({ link, ...props }) => {
    const Component = styled(Box)`
        cursor: ${link === 'true' ? 'pointer' : 'inherit'};
        &:hover {
                ${link && css`
                    color: #FF4F57;
                `}
            }
        svg {
            margin-right: 5px;
            width: 16px;
            position: relative;
            top: -2px;
        }
    `;

    return <Component {...props} />;
};

Tag.defaultProps = {
    display: 'inline-block',
    color: '#999',
    fontSize: '14px',
    mr: '15px',
    textDecoration: 'none'
};
