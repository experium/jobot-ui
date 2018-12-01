import { styled, css, Box, Button } from "@smooth-ui/core-sc";
import { TerminalTextfit } from "./TerminalTextfit";

const gridCalcH = "100vh/12";
const gridCalcW = "100vw/12";

export const TerminalEqualButton = styled(Button)`
    height: 100%;
    img{
        height: 100%;
        width: 100%;
    }
`;

TerminalEqualButton.defaultProps = {
    variant: "secondary",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center"
};

export const TerminalRow = styled(Box)`
    ${p => p.num && css`
        height: calc(${gridCalcH}*${p.num});
        ${Button}{
            ${TerminalTextfit}{
                ${p => p.py && css`
                    & > div{
                        line-height: calc(${gridCalcH}*${p.num} - (${p.py}px*2));
                    }
                `}
                ${p => p.pt && css`
                    & > div{
                        line-height: calc(${gridCalcH}*${p.num} - ${p.pt}px);
                    }
                `}
                ${p => p.pb && css`
                    & > div{
                        line-height: calc(${gridCalcH}*${p.num} - ${p.pb}px);
                    }
                    ${p => p.pt && css`
                        & > div{
                            line-height: calc(${gridCalcH}*${p.num} - (${p.pb}px + ${p.pt}px));
                        }
                    `}
                `}
            }
        }
        ${TerminalEqualButton && css`
            ${p => p.py && css`
                ${TerminalEqualButton}{
                    width: calc(${gridCalcH}*${p.num} - (${p.py}px*2));
                }
            `}
            ${p => p.pt && css`
                ${TerminalEqualButton}{
                    width: calc(${gridCalcH}*${p.num} - ${p.pt}px);
                }
            `}
            ${p => p.pb && css`
                ${TerminalEqualButton}{
                    width: calc(${gridCalcH}*${p.num} - (${p.pb}px));
                }
                ${p => p.pt && css`
                    ${TerminalEqualButton}{
                        width: calc(${gridCalcH}*${p.num} - (${p.pb}px + ${p.pt}px));
                    }
                `}
            `}
        `}
    `}
`;

export const TerminalCol = styled(Box)`
    ${p => p.num && css`
        height: 100%;
        width: calc(${gridCalcW}*${p.num});
    `}
`;
