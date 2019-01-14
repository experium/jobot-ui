import { styled, Box, } from "@smooth-ui/core-sc";

export const CubeVacancy = styled(Box)`
    box-sizing: border-box;
    border: 2px solid #fff;
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
`;

CubeVacancies.defaultProps = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    flex: "10",
};

export const CubeControls = styled(Box)`
    box-sizing: border-box;
`;

CubeControls.defaultProps = {
    display: "flex",
    flex: "1",
};

export const CubeControlsBtn = styled(Box)`
    box-sizing: border-box;
    border: 2px solid #fff;
`;

CubeControlsBtn.defaultProps = {
    display: "flex",
    backgroundColor: "#5688d7",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
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
`;

CubeVacancySalary.defaultProps = {
    display: "flex",
};
