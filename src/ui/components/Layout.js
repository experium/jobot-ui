import { styled, css, Box, Col } from '@smooth-ui/core-sc'

export const BoxImage = styled(Box)`
    box-sizing: border-box;
    ${p => p.image && css`
        background: ${props => `url("${props.image}")`} right top no-repeat;
        @media (max-width: 769px){
            background: none;
        }
    `}
`;

BoxImage.defaultProps = {
    position: 'relative',
    backgroundSize: '700px auto'
};

export const Container = styled(Box)`
    position: relative;
    max-width: 1120px;
    box-sizing: border-box;
    @media (max-width: 1170px){
        padding: 0 25px;
    }
    @media (max-width: 769px){
        padding: 0 10px;
    }
    ${Col}{
        box-sizing: border-box;
    }
    ${({header}) => header && css`
        max-width: 100%;
        padding: 0 25px;
    `}
    a{
        color: #5E57A7;
    }
`;

Container.defaultProps = {
    mx: 'auto'
};

export const BoxImageTopBottom = styled(Box)`
    box-sizing: border-box;
    &:before,&:after{
        content: '';
        width: 100%;
        height: 400px;
        display: block;
        background-size: cover;
    }
    &:before{
        ${p => p.imageTop && css`
            background: ${props => `url("${props.imageTop}")`} top center / cover no-repeat;
            height: 400px;
            @media (max-width: 769px){
                height: 150px;
            }
        `}
    }
    &:after{
        ${p => p.imageBottom && css`
            background: ${props => `url("${props.imageBottom}")`} bottom center /cover no-repeat;
            height: 300px;
            @media (max-width: 769px){
                height: 150px;
            }
        `}
    }
`;

BoxImageTopBottom.defaultProps = {
    position: 'relative',
};

export const BoxImageSearch = styled(Box)`
    box-sizing: border-box;
    &:after{
        content: '';
        width: 100%;
        height: 70px;
        display: block;
        background-size: cover;
    }
    &:after{
        ${p => p.image && css`
            background: ${props => `url("${props.image}")`} bottom left / contain no-repeat;
        `}
    }
`;

BoxImageSearch.defaultProps = {
    position: 'relative',
};
