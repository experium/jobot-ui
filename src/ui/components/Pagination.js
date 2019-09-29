import { styled, Box } from '@smooth-ui/core-sc'

export const Pagination = styled(Box)`
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    justify-content: center;
    ul{
        list-style: none;
        padding-left: 0;
        li{
            position: relative;
            display: inline-block;
            margin: 0 5px;
            border: 1px solid #5E57A7;
            border-radius: .3rem;
            width: 32px;
            height: 32px;
            text-align: center;
            vertical-align: middle;
            line-height: 32px;
            font-size: 14px;
            cursor: pointer;
            &:first-child,&:last-child{
                border: 0;
            }
            a{
                position: absolute;
                left: 0;
                right: 0;
            }
            &.active{
                background-color: #5E57A7;
                color: #fff;
                a{
                    color: #fff;
                }
            }
        }
    }
`;

Pagination.defaultProps = {
    borderRadius: '50%',
    p: '10px',
};
