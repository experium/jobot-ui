import { styled, Typography } from "@smooth-ui/core-sc";
import Button from "./Button";

export const TerminalVacancyButton = styled(Button)``;

TerminalVacancyButton.defaultProps = {
    borderRadius: '1rem',
    p: '2rem',
    display: 'block',
    my: '2rem',
    mx: '3rem',
    color: '#fff',
    fontSize: '3rem',
    variant: "primary"
};
export const TerminalVacancyTitle = styled(Typography)``;

TerminalVacancyTitle.defaultProps = {
    variant: 'display-1',
    mx: '3rem',
    py: '2rem',
};
