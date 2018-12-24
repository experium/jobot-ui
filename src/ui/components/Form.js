import { styled, Box } from '@smooth-ui/core-sc';

export const FormGroup = styled(Box)`
    position: relative;
    box-sizing: border-box;
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
    svg{
        width: 16px;
    }
`;
