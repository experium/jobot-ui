import { styled, Row, Box } from '@smooth-ui/core-sc'

export const BoxList = styled(Box)`
    background-color: #fff;
`;

BoxList.defaultProps = {
    borderRadius: '.5rem',
    p: '0 25px',
};

export const ItemList = styled(Row)`
    background-color: #fff;
    border-bottom: 1px solid #D7D4F2;
    min-height: 91px;
    color: #5E57A7;
    &:last-child{
        border: 0;
    }
`;

ItemList.defaultProps = {
    p: '15px 0',
};

export const ItemListBox = styled(Box)`
    background-color: rgba(255,255,255,0.1);
    min-height: 90px;
    text-align: center;
    position: relative;
    &:hover{
        cursor: cover;
        background-color: rgba(255,255,255,0.4);
        box-shadow: 0 3px 50px rgba(0,0,0,0.4);
        &:before{
            content: '';
            border: 1px solid #fff;
            border-radius: .5rem;
            position: absolute;
            left: -5px;
            top: -5px;
            right: -5px;
            bottom: -5px;
        }
    }
    h4{
        font-size: 12px;
        color: #fff;
        text-transform: uppercase;
        margin-top: 10px;
        font-weight: 600;
        padding: 0 10px;
        line-height: 1.5;
    }
`;

ItemListBox.defaultProps = {
    p: '15px 0',
    borderRadius: '.5rem'
};
