import { styled, Input as SmoothInput, css } from '@smooth-ui/core-sc';

export const Input = styled(SmoothInput)`
    border-radius: 0;
    ${p => p.icon && css`
        padding-left: 40px;
    `}
`;
Input.defaultProps = {
    position: 'relative',
};
