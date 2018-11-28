import { styled, Select as SmoothSelect, css } from '@smooth-ui/core-sc'

export const Select = styled(SmoothSelect)`
        select{
            border-radius: 0;
        }
    ${p => p.icon && css`
        select{
            padding-left: 40px;
        }
    `}
`;
