import { styled, css, Box, Button } from "@smooth-ui/core-sc";
import { TerminalButtonTextfit } from "./TerminalButton";

export const TerminalEqualButton = styled(Button)`
    box-sizing: border-box;
    height: 100%;
    ${p => p.bgHover && css`
        &:not(:disabled):hover{
            background-color: ${p.bgHover};
        }
    `}
    img{
        width: 100%;
    }
`;

TerminalEqualButton.defaultProps = {
    p: 0,
    borderRadius: "1rem",
    variant: "secondary",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
};
export const TerminalLogoBox = styled(Box)`
    box-sizing: border-box;
    height: 100%;
    img{
        width: auto;
        max-height: 100%;
        padding: 15px;
    }
`;

export const TerminalRow = styled(Box)`
    display: flex;
    ${p => p.num && css`
        height: calc(${p.gridRowHeight}/12*${p.num});
        box-sizing: border-box;
        ${Button}{
            ${TerminalButtonTextfit}{
                & > div{
                    line-height: calc(${p.gridRowHeight}/12*${p.num});
                }
                ${p => p.py && css`
                    & > div{
                        line-height: calc(${p.gridRowHeight}/12*${p.num} - (${p.py}px*2));
                    }
                `}
                ${p => p.pt && css`
                    & > div{
                        line-height: calc(${p.gridRowHeight}/12*${p.num} - ${p.pt}px);
                    }
                `}
                ${p => p.pb && css`
                    & > div{
                        line-height: calc(${p.gridRowHeight}/12*${p.num} - ${p.pb}px);
                    }
                    ${p => p.pt && css`
                        & > div{
                            line-height: calc(${p.gridRowHeight}/12*${p.num} - (${p.pb}px + ${p.pt}px));
                        }
                    `}
                `}
            }
        }
        ${TerminalEqualButton && css`
            ${p => p.py && css`
                ${TerminalEqualButton}{
                    width: calc(${p.gridRowHeight}/12*${p.num} - (${p.py}px*2));
                }
            `}
            ${p => p.pt && css`
                ${TerminalEqualButton}{
                    width: calc(${p.gridRowHeight}/12*${p.num} - ${p.pt}px);
                }
            `}
            ${p => p.pb && css`
                ${TerminalEqualButton}{
                    width: calc(${p.gridRowHeight}/12*${p.num} - (${p.pb}px));
                }
                ${p => p.pt && css`
                    ${TerminalEqualButton}{
                        width: calc(${p.gridRowHeight}/12*${p.num} - (${p.pb}px + ${p.pt}px));
                    }
                `}
            `}
        `}
    `}
`;

TerminalRow.defaultProps = {
    gridRowHeight: "100vh",
};

export const TerminalCol = styled(Box)`
    box-sizing: border-box;
    ${p => p.num && css`
        height: 100%;
        width: calc(${p.gridColWidth}/12*${p.num});
    `}
`;
TerminalCol.defaultProps = {
    gridColWidth: "100vw",
};
