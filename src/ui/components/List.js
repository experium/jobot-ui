import { styled, Row } from '@smooth-ui/core-sc'
import { Badge } from './Badge';

export const ItemList = styled(Row)`
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

ItemList.defaultProps = {
    border: '1px solid #f1f1f1',
    p: '15px',
    mb: '15px'
};
