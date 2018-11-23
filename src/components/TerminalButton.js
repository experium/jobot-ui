import { styled } from "@smooth-ui/core-sc";
import Button from "./Button";

export const TerminalButton = styled(Button)``;

TerminalButton.defaultProps = {
    textAlign: 'center',
    borderRadius: '1rem',
    p: '2rem',
    display: 'block',
    my: '2rem',
    mx: '3rem',
    color: '#fff',
    fontSize: '3rem',
    variant: "primary"
};
