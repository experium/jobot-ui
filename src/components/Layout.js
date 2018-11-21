import { styled, Box } from '@smooth-ui/core-sc'

export const Container = styled(Box)`
    position: relative;
    max-width: 1140px;
`;

Container.defaultProps = {
    mx: 'auto'
};

export const BoxImage = styled(Box)`
    overflow: hidden;
    position: relative;
    background: fixed ${props => `url("${props.image}")`} center -100px no-repeat;
`;
