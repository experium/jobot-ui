import { styled } from "@smooth-ui/core-sc";
import { Button } from "./Button";
import { Textfit } from 'react-textfit';

export const TerminalButton = styled(Button)`
    box-sizing: border-box;
    text-transform: uppercase;
    &:after,&:before{
        content: '';
        display: table;
        clear: both;
    }
`;

TerminalButton.defaultProps = {
    size: "lg",
    display: "block",
    height: "100%",
    width: "100%",
    textAlign: "center",
    borderRadius: 0,
    alignItems: "center",
    justifyContent: "center",
    color: '#fff',
    fontSize: "1.6rem",
    fontWeight: 600,
    variant: "primary"
};

export const TerminalButtonTextfit = styled(Textfit)`
    & > div{
        display: block;
        height: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0px 30px;
    }
`;
