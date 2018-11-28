import { styled, css, Box } from '@smooth-ui/core-sc'

export const BoxImage = styled(Box)`
    ${p => p.image && css`
        background: ${props => `url("${props.image}")`} center center no-repeat;
        &:before {
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: inline-block;
            background-color: rgba(42, 46, 50, 0.8);
            position: absolute;
        }
    `}
`;

BoxImage.defaultProps = {
    position: 'relative',
    backgroundSize: 'cover'
};

export const Container = styled(Box)`
    position: relative;
    max-width: 1120px;
    @media (max-width: 1170px){
        padding: 0 25px;
    }
`;

Container.defaultProps = {
    mx: 'auto'
};
