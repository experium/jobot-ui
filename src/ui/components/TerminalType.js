import {styled, Box, css, th} from "@smooth-ui/core-sc";


export const TerminalTypeBox = styled(Box)`
    box-sizing: border-box;
    overflow: hidden;
    border: 1px solid #8c97b2;
    margin-left: -1px;
    margin-top: -1px;
    flex: 0 0 calc(100%/5);
    ${p => p.columnCount && css`
        flex: 0 0 calc(100%/${p.columnCount});
    `}
    ${p => p.rowCount && css`
        height: calc(100%/${p.rowCount});
    `}
`;
TerminalTypeBox.defaultProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center"
};
export const TerminalTypes = styled(Box)`
    margin: -2px -2px 0;
    box-sizing: border-box;
    align-content: baseline;
    &:after {
      content: "";
      flex: auto;
    }
`;

TerminalTypes.defaultProps = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "normal",
    flex: "10",
};

export const TypeIcon = styled(Box)`
    margin: 5px auto;
    box-sizing: border-box;
    color: ${th('primary')};
    svg{
        width: 3rem;
        height: 3rem;
    }
`;

TypeIcon.defaultProps = {
    width: "3rem"
};
