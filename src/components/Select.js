import { styled, Select, css } from '@smooth-ui/core-sc'

export default styled(Select)`
        select{
            border-radius: 0;
        }
    ${p => p.icon && css`
        select{
            padding-left: 40px;
        }
    `}
`;
