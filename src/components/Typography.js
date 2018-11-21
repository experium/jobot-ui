import { styled } from "@smooth-ui/core-sc";

export const ListUl = styled.ul`
    margin: 0;
    list-style: ${props => props.styleNone ? 'none' : ''};
    padding-left: ${props => props.styleNone ? '0' : '40px'};
`;
export const LinkWhite = styled.a`
    color: #fff;
    &:hover{
        color: #FF4F57;
    }
`;

