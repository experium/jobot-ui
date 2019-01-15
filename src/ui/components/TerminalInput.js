import { styled, Input, Label } from "@smooth-ui/core-sc";

export const TerminalLabel = styled(Label)`
    box-sizing: border-box;
`;

TerminalLabel.defaultProps = {
    size: "lg",
    color: "#8c97b2",
    fontWeight: 600,
    fontSize: "1.2rem"
};
export const TerminalInput = styled(Input)`
    box-sizing: border-box;
`;

TerminalInput.defaultProps = {
    size: "lg",
    fontSize: "1.6rem",
    borderColor: "#8c97b2",
    borderRadius: 0,
    fontWeight: 600,
    color: "#444c63",
    height: "56px",
};

