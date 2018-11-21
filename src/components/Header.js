import { styled, Box } from '@smooth-ui/core-sc'
import bgHeader from '../assets/img/bg-header.jpg';

export const Header = styled(Box)`
    background: url(${bgHeader}) center center no-repeat;
    background-size: cover;
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
`;

Header.defaultProps = {
    position: 'relative',
    py: '150px',
    backgroundSize: 'cover'
};
