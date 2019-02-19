import { styled, Typography, Box } from "@smooth-ui/core-sc";
import { Textfit } from 'react-textfit';

export const TerminalTitle = styled(Typography)``;

TerminalTitle.defaultProps = {
    variant: 'display-3'
};
export const TerminalSubTitle = styled(Textfit)`
    color: #444c63;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
`;
export const TerminalOrText = styled(Box)`
    overflow: hidden;
    text-align: center;
    color: #444c63;
    &:after,&:before{
        content: "";
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        height: 1px;
        background-color: #dfdfdf;
        position: relative;
    }
    &:before{
        margin-left: -100%;
        left: -14px;
    }
    &:after{
        margin-right: -100%;
        right: -14px;
    }
    span{
        display: inline-block;
        vertical-align: middle;
    }
`;
TerminalOrText.defaultProps = {
    mode: 'single',
    max: 32
};
