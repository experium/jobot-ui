import { styled, Input, css } from '@smooth-ui/core-sc';

export default styled(Input)`
    border-radius: 0;
    ${p => p.icon && css`
        padding-left: 40px;
    `}
`;
Input.defaultProps = {
    position: 'relative',
};
