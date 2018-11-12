import { Box } from '@rebass/grid'
import styled from 'styled-components';
import { Button } from './Button';

export const Card = styled(Box)`
    border: 1px solid #f1f1f1;
    &:hover{
        box-shadow: 0 13px 21px rgba(0, 0, 0, 0.13);
    }
    hr{
        border: none;
        color: #ddd;
        background-color: #ddd;
        height: 1px;
    }
`;
export const CardBtn = styled(Box)`
    position: relative;
    text-align: right;
    padding-right: 15px;
    &:before{
        content: '';
        background: #e5e5e5;
        height: 1px;
        left: -10px;
        right: -10px;
        position: absolute;
        top: 18px;
        z-index: -1;
    }
    ${Button}{
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.18), 0 2px 5px 0 rgba(0, 0, 0, 0.15);
        svg{
            position: relative;
            top: -3px;
            width: 20px;
        }
    }
`;

