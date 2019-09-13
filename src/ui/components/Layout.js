import {styled, css, Box, Col, th} from '@smooth-ui/core-sc'

export const BoxImage = styled(Box)`
    box-sizing: border-box;
    ${p => p.image && css`
        background: ${props => `url("${props.image}")`} right top no-repeat;
        overflow: hidden;
        @media (max-width: 769px){
            background: none;
        }
    `}
`;

BoxImage.defaultProps = {
    position: 'relative',
    backgroundSize: '830px auto'
};

const animate = {
    var1: css`
        width: 230px;
        height: 115px;
        right: 240px;
        top: 100px;
        transform: rotate(-25deg);
    `,
    var2: css`
        width: 115px;
        height: 160px;
        right: 250px;
        top: 205px;
        transform: rotate(-8deg);
    `,
    var3: css`
        
        width: 115px;
        height: 160px;
        right: 28px;
        top: 220px;
        transform: rotate(-25deg);
    `,
    var4: css`
        width: 115px;
        height: 160px;
        right: 115px;
        top: 195px;
        transform: rotate(15deg);

    `,
    var5: css`
        width: 222px;
        height: 275px;
        right: -1px;
        top: 188px;
    `,
};

export const BoxImageAnimateWrap = styled(Box)`
    position: relative;
    z-index: 90;
    box-sizing: border-box;
`;

export const BoxImageAnimate = styled(Box)`
    box-sizing: border-box;
    display: inline-block;
    background-size: contain;
    ${p => p.variant && animate[p.variant]};
    ${p => p.image && css`
        background: ${props => `url("${props.image}")`} no-repeat;
        @media (max-width: 769px){
            background: none;
        }
    `}
`;

BoxImageAnimate.defaultProps = {
    position: 'absolute',
    backgroundSize: 'contain',
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
        max-width: 1300px;
        padding: 0 25px;
    `}
    a{
        color: #5E57A7;
        outline: none;
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
        ${p => p.imagetop && css`
            background: ${props => `url("${props.imagetop}")`} top center / cover no-repeat;
            height: 400px;
            @media (max-width: 769px){
                height: 150px;
            }
        `}
    }
    &:after{
        ${p => p.imagebottom && css`
            background: ${props => `url("${props.imagebottom}")`} bottom center /cover no-repeat;
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
        height: 108px;
        display: block;
        background-size: cover;
    }
    &:after{
        ${p => p.image && css`
            background: ${props => `url("${props.image}")`} bottom left / contain no-repeat;
            @media (max-width: 769px){
                background-position: top left;
            }
        `}
    }
`;

BoxImageSearch.defaultProps = {
    position: 'relative',
};
