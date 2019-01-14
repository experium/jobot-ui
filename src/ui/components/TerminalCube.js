import { styled, css, Box, Button } from "@smooth-ui/core-sc";

export const CubeVacancy = styled(Box)`
    box-sizing: border-box;
    border: 2px solid #fff;
    flex: 1 0 calc(100%/5);
    ${p => p.columnCount && css`
        flex: 1 0 calc(100%/${p.columnCount});
    `}
    ${p => p.rowCount && css`
        height: calc(100%/${p.rowCount});
    `}
`;
CubeVacancy.defaultProps = {
    display: "flex",
    flexDirection: "column",
};

export const CubeVacancyName = styled(Box)`
    overflow: hidden;
`;

CubeVacancyName.defaultProps = {
    display: "flex",
};

export const CubeContainer = styled(Box)`
    box-sizing: border-box;
    margin: -2px;
`;

CubeContainer.defaultProps = {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column"
};

export const CubeVacancies = styled(Box)`
    box-sizing: border-box;
    align-content: baseline;
    &:after {
      content: "";
      flex: auto;
    }
`;

CubeVacancies.defaultProps = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "normal",
    flex: "10",
};

export const CubeControls = styled(Box)`
    box-sizing: border-box;
`;

CubeControls.defaultProps = {
    display: "flex",
    flex: "1",
};

export const CubeControlsBtn = styled(Button)`
    outline: 0;
    box-sizing: border-box;
    border: 2px solid #fff;
    flex: 1 0 auto;
    ${p => p.columnCount && css`
        flex: 0 0 calc(100%/${p.columnCount});
    `}
    &:disabled {
    
      color: #333;
      background: #eff1f7;
    }
`;

CubeControlsBtn.defaultProps = {
    display: "flex",
    backgroundColor: "#5688d7",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    borderRadius: 0

};

export const CubeVacancyText = styled(Box)`
    box-sizing: border-box;
`;

CubeVacancyText.defaultProps = {
    display: "flex",
    flexDirection: "column",
    p: 15,
    justifyContent: "space-between",
};

export const CubeVacancySalary = styled(Box)`
    box-sizing: border-box;
    overflow: hidden;
`;

CubeVacancySalary.defaultProps = {
    display: "flex",
};
