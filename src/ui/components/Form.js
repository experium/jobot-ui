import { styled, css, Box } from '@smooth-ui/core-sc';

export const FormGroup = styled(Box)`
    position: relative;
    box-sizing: border-box;
    ${({header}) => header && css`
        float: right;
        @media (max-width: 769px){
            float: none;
        }
        ${FormGroupIcon}{
            color: #fff;
            @media (max-width: 769px){
                color: #5e57a7;
            }
        }
    `}
`;
export const FormGroupIcon = styled(Box)`
    position: absolute;
    top: 50%;
    margin-top: -12px;
    color: #888;
    left: 12px;
    width: 16px;
    height: 16px;
    z-index: 9;
    ${({landing}) => landing && css`
        color: #5e57a7;
    `}
    svg{
        width: 16px;
    }
`;
