import { styled, css, Typography } from "@smooth-ui/core-sc";

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
    ${p => p.filter && css`
        li{
            font-weight: 300;
            span{
                float: right;
            }
        }
    `}
`;

export const LinkOther = styled.span`
    color: #5E57A7;
    cursor: pointer;
    float: none!important;
`;

export const LinkWhite = styled.a`
    color: #fff;
    &:hover{
        color: #FF4F57;
    }
`;

export const TitleBox = styled(Typography)`
    color: #5E57A7;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.2rem;
`;

TitleBox.defaultProps = {
    variant: 'h1',
    mb: '15px',
};

export const TitleVacancy = styled.a`
    color: #5E57A7;
    font-size: 16px;
    font-weight: 600;
`;

export const SumVacancy = styled.span`
    color: #5E57A7;
    font-size: 14px;
    font-weight: 600;
`;

export const TypographyUppercase = styled(Typography)`
    text-transform: uppercase;
`;

TypographyUppercase.defaultProps = {
    variant: 'h2',
};
