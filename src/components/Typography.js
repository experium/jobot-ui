import styled from 'styled-components';

export const H1 = styled.h1`
    margin: 0;
    font-size: 36px;
    font-weight: 900;
    line-height: 1.15em;
    color: ${ props => props.color };
    font-weight: ${ props => props.fontWeight };
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
`;
export const H2 = styled.h2`
    margin: 0;
    font-size: 30px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -1px;
    color: ${ props => props.color };
    font-weight: ${ props => props.fontWeight };
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
`;
export const H3 = styled.h3`
    margin: 0;
    font-size: 24px;
    line-height: 1.1;
    color: ${ props => props.color };
    font-weight: ${ props => props.fontWeight };
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
`;
export const H4 = styled.h4`
    margin: 0;
    font-size: 16px;
    line-height: 1.1;
    color: ${ props => props.color };
    font-weight: ${ props => props.fontWeight };
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
`;
export const H5 = styled.h5`
    margin: 0;
    line-height: 26px;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.1;
    color: ${ props => props.color };
    font-weight: ${ props => props.fontWeight };
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
`;
export const H6 = styled.h6`
    margin: 0;
    font-size: 14px;
    color: ${ props => props.color };
    font-weight: ${ props => props.fontWeight };
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
`;
export const P = styled.p`
    color: ${ props => props.color };
    font-weight: ${ props => props.fontWeight };
    text-transform: ${props => props.uppercase ? 'uppercase' : null};
`;
export const AlignCenter = styled.div`
    text-align: center;
`;
export const AlignRight = styled.div`
    text-align: right;
`;
export const ListUl = styled.ul`
    list-style: ${props => props.styleNone ? 'none' : ''};
    padding-left: ${props => props.styleNone ? '0' : '40px'};
`;
export const LinkWhite = styled.a`
    color: #fff;
    &:hover{
        color: #FF4F57;
    }
`;

