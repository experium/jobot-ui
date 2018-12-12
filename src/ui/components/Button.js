import React from 'react';
import { styled, css, Button as SmoothButton, th } from '@smooth-ui/core-sc';
import PropTypes from 'prop-types';

const sizeStyle = {
    sm: css`
        padding: ${th('btnPaddingYSm')};
        width: calc(${th('btnPaddingYSm')} + ${th('btnPaddingYSm')} + 0.9rem);
    `,
    md: css`
        padding: ${th('btnPaddingY')};
    `,
    lg: css`
        padding: ${th('btnPaddingYLg')};
        width: calc(${th('btnPaddingYLg')} + ${th('btnPaddingYLg')} + 1.6rem);
    `,
};
const sizeStyleIcon = {
    sm: css`
        svg{
            width: calc(${th('btnLineHeightSm')}rem / 3);
        }
    `,
    md: css`
        svg{
            width: ${th('fontSizeBase')};
        }
    `,
    lg: css`
        svg{
            width: ${th('btnLineHeightLg')}rem;
            height: ${th('btnLineHeightLg')}rem;
        }
    `,
};

export const Button = styled(SmoothButton)`
    ${p => p.size && sizeStyleIcon[p.size]};
    ${p => p.round && css`
        border: ${props => props.variant === 'secondary' ? '1px solid #ddd' : 'initial'};
        border-radius: 50%;
        padding: ${th('inputBtnPaddingY')};
        width: calc(${th('inputBtnPaddingY')} + ${th('inputBtnPaddingY')} + ${th('btnLineHeight')}rem);
        ${p => p.size && sizeStyle[p.size]};
    `}
`;

Button.propTypes = {
    round: PropTypes.bool
};

