import { styled, Box, css, th } from '@smooth-ui/core-sc';

const badgeTheme = {
    primary: css`
        background: ${th('primary')};
    `,
    secondary: css`
        background: #7f8c8d;
    `,
    light: css`
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.3);
        &:hover{
            background: ${props => props.link === 'true' ? '#FF4F57' : 'inherit'};
        }
    `,
    dark: css`
        background: ${th('dark')};
    `,
};

export const Badge = styled(Box)`
    cursor: ${props => props.link === 'true' ? 'pointer' : 'inherit'};
    ${p => p.variant && badgeTheme[p.variant]};
`;

Badge.defaultProps = {
    variant: 'primary',
    display: 'inline-block',
    color: '#fff',
    fontSize: '12px',
    ml: '10px',
    p: '5px 10px',
    borderRadius: '4px',
    textDecoration: 'none'
};
