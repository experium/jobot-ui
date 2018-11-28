import { styled, css } from "@smooth-ui/core-sc";

export const ListUl = styled.ul`
    margin: 0;
    list-style: ${props => props.styleNone ? 'none' : ''};
    padding-left: ${props => props.styleNone ? '0' : '40px'};
    ${p => p.borderItem && css`
        li{
            padding: 7px 0;
            border-bottom: 1px solid #ddd;
            color: #999;
            &:last-child{
                border: 0;
            }
            a{
                color: #999;
            }
        }
    `}
`;
export const LinkWhite = styled.a`
    color: #fff;
    &:hover{
        color: #FF4F57;
    }
`;

