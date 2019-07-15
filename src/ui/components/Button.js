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
const buttonTheme = {
    primary: css`
        background: ${th('primary')};
    `,
    secondary: css`
        background: ${th('secondary')};
    `,
    light: css`
        background: transparent;
        border: 1px solid #fff
        color: #fff;
        &:not(:disabled):hover{
            background: transparent;
            opacity: 0.7;
        }
    `,
    success: css`
        background: ${th('success')};
    `,
    danger: css`
        background: ${th('danger')};
    `,
    warning: css`
        background: ${th('warning')};
    `,
    info: css`
        background: rgba(155,78,254,1);
        background: linear-gradient(45deg, rgba(155,78,254,1) 0%, rgba(107,115,255,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#9b4efe', endColorstr='#6b73ff', GradientType=1 );
    `,
    dark: css`
        background: ${th('dark')};
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
    ${p => p.variant && buttonTheme[p.variant]};
`;

Button.propTypes = {
    round: PropTypes.bool
};

