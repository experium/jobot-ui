import styled, { css } from 'styled-components';

const Circle = `
   width: 40px;
   line-height: 42px;
   padding: 0;
`;
export const Button = styled.button`
    display: inline-block;
    background: ${props => props.primary ? '#FF4F57' : '#fff'};
    color: ${props => props.primary ? '#fff' : '#FF4F57'};
    border: ${props => props.primary ? 'none' : '1px solid #ddd'};
    padding: ${props => props.large ? '14px 22px' : '10px 21px'};
    font-size: ${props => props.large ? '22px' : '14px'};
    height: ${props => props.large ? '55px' : '40px'};
    border-radius: 50px;
    ${props => props.circle ? css`${Circle}` : ''}
    border-radius: ${props => `${props.radius}`};
    width: ${props => props.large & props.circle  ? '55px' : ''};
    font-weight: 400;
    min-height: 40px;
    text-transform: uppercase;
    text-align: center;
    transition: all .3s linear;
    white-space: nowrap;
    touch-action: manipulation;
    cursor: pointer;
    outline: none;
    user-select: none;
    
    &:hover{
        background: ${props => props.primary ? '#f96b73' : '#FF4F57'};
        color: ${props => props.primary ? '' : '#fff'};
        box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.12), 0 1px 6px 0 rgba(0, 0, 0, 0.12);
        text-decoration: none;
    }
    &:active{
        box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    }
    svg{
        height: ${props => props.large ? '20px' : '16px'};
    }
`;
