import styled from 'styled-components';

const badgeTheme = {
    primary: {
        background: '#2c3e50',
    },
    secondary: {
        background: '#7f8c8d',
    },
    light: {
        background: 'rgba(255, 255, 255, 0.1)',
    },
    pink: {
        background: '#FF4F57',
    },
};

export const Badge = styled.span`
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    margin-left: 10px;
    padding: 7px 18px;
    font-weight: 700;
    border: ${props => props.theme === 'light' ? '1px solid rgba(255, 255, 255, 0.3)' : null};
    background: ${props => badgeTheme[props.theme].background};
`;

export const BadgeLink = styled(Badge)`
    cursor: pointer;
    &:hover{
        background: ${props => props.theme === 'light' ? '#FF4F57' : null};
    }
`;
