import { Flex } from '@rebass/grid'
import styled from 'styled-components';
import { Badge } from './Badge';

export const Item = styled(Flex)`
    width: 100%;
    border: 1px solid #f1f1f1;
    padding: 15px;
    margin-bottom: 15px;
    ${Badge}{
        position: relative;
        top: -3px;
    }
    hr{
        border: none;
        color: #ddd;
        background-color: #ddd;
        height: 1px;
    }
`;
