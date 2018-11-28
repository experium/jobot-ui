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
    p: '2rem',
    display: 'flex',
    mb: '2rem',
    mx: '3rem',
    color: '#fff',
    fontSize: '3rem',
    variant: "primary"
};
