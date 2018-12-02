import { styled } from "@smooth-ui/core-sc";
import { Button } from "./Button";
import { Textfit } from 'react-textfit';

export const TerminalButton = styled(Button)`
    &:after,&:before{
        content: '';
        display: table;
        clear: both;
    }
`;

TerminalButton.defaultProps = {
    display: "block",
    height: "100%",
    p: 0,
    textAlign: "center",
    borderRadius: "1rem",
    alignItems: "center",
    justifyContent: "center",
    color: '#fff',
    fontSize: "3rem",
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
