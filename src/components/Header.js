import { Flex, Box } from '@rebass/grid'
import styled from 'styled-components';
import bgHeader from '../assets/img/bg-header.jpg';

export const Header = styled(Box)`
    background: url(${bgHeader}) center center no-repeat;
    background-size: cover;
    color: #fff;
    position: relative;
    width: 100%;
    padding: 200px 0;
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
    h1{
        font-weight: 900;
        font-size: 50px;
        letter-spacing: 1px;
        line-height: 30px;
    }
`;
export const HeaderToolbar = styled(Flex)`
    background: rgba(255, 255, 255, 0.1);
`;

