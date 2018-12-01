import { styled } from "@smooth-ui/core-sc";
import { Button } from "./Button";

export const TerminalButton = styled(Button)`
    &:after,&:before{
        content: '';
        display: table;
        clear: both;
    }
`;

TerminalButton.defaultProps = {
    textAlign: 'center',
    borderRadius: '1rem',
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: '#fff',
    fontSize: '3rem',
    variant: "primary"
};
