import { styled, css, Box, Button } from "@smooth-ui/core-sc";

export const CubeVacancy = styled(Box)`
    box-sizing: border-box;
    overflow: hidden;
    border: 2px solid #fff;
    flex: 0 0 calc(100%/5);
    color: #444c63;
    position: relative;
    ${p => p.columnCount && css`
        flex: 0 0 calc(100%/${p.columnCount});
    `}
    ${p => p.rowCount && css`
        height: calc(100%/${p.rowCount});
    `}
    &:before {
        content: "";
        width: 0;
        height: 0;
        border-left: 60px solid transparent;
        position: absolute;
        right: 0;
        border-top: 60px solid ${p => `${p.triangleColor}`};
    }
`;
CubeVacancy.defaultProps = {
    display: "flex",
    flexDirection: "column",
};

export const CubeVacancyName = styled(Box)`
    overflow: hidden;
    font-weight: 600;
    min-height: 40px;
    line-height: 1.16;
    font-size: 1rem;
`;

CubeVacancyName.defaultProps = {
    display: "flex",
};

export const CubeContainer = styled(Box)`
    box-sizing: border-box;
    overflow: hidden;
`;

CubeContainer.defaultProps = {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column"
};

export const CubeVacancies = styled(Box)`
    margin: -2px -2px 0;
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
    padding: 0 15px 15px;
`;

CubeVacancyText.defaultProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
};

export const CubeVacancySalary = styled(Box)`
    box-sizing: border-box;
    overflow: hidden;
`;

CubeVacancySalary.defaultProps = {
    display: "flex",
};

export const CubeVacancyLogo = styled(Box)`
    box-sizing: border-box;
    margin: 15px 60px 15px 15px;
    height: 30%;
    min-height: 30px;
    width: auto;
    background: ${p => `url("${p.image}")`} no-repeat;
    background-size: contain;
    width: 100%;
`;

CubeVacancyLogo.defaultProps = {
    display: "block",
};

