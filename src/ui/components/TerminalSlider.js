import { styled, css, Box } from "@smooth-ui/core-sc";
import { Textfit } from 'react-textfit';

export const TerminalSliderWrap = styled(Box)`
    height: 100%;
    background: ${p => `url("${p.image}")`} no-repeat;
    background-size: cover;
    overflow: hidden;
    position: relative;
    z-index: 1;
`;

TerminalSliderWrap.defaultProps = {
    display: 'flex',
    flexDirection: 'column'
};

export const TerminalSliderRow = styled(Box)`
    flex: 1;
`;

TerminalSliderRow.defaultProps = {
    display: 'flex',
    flexDirection: 'row'
};

export const TerminalSliderBg = styled(Box)`
    background: ${p => `url("${p.image}")`} no-repeat;
    box-sizing: border-box;
    background-position: ${p => p.bgPosition ? p.bgPosition : "center"};
    width: 100%;
    height: 100%;
    ${p => p.absolute && css`
        position: absolute;
        height: 70%;
        left: 0;
        right: 0;
        z-index: -1;
        background-position: center top;
    `}
`;

TerminalSliderBg.defaultProps = {
    display: 'flex',
    backgroundSize: 'cover',
};

export const TerminalSliderFigure = styled(Box)`
    background: #8C97B2;
    position: absolute;
    width: 110%;
    height: 75%;
    right: -33%;
    top: 18%;
    z-index: -1;
    transform: rotate(50deg) skew(20deg);
    border-radius: 100px;
    &:before{
        content: '';
        position: relative;
        background: #8C97B2;
        width: 100%;
        height: 100%;
        display: block;
        right: -12%;
        top: -33%;
    }
`;

export const TerminalSliderFlex = styled(Box)`
    box-sizing: border-box;
`;

TerminalSliderFlex.defaultProps = {
    display: 'flex',
    width: '100%',
    height: '100%',
};

export const TerminalCompanyLogoBox = styled(Box)`
    box-sizing: border-box;
`;

TerminalCompanyLogoBox.defaultProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '50%',
};

export const TerminalCompanyLogo = styled(Box)`
    background: ${p => `url("${p.image}")`} center no-repeat;
`;

TerminalCompanyLogo.defaultProps = {
    backgroundSize: "contain",
    height: '60%'
};

export const TerminalSliderContentColumn = styled(Box)`
    box-sizing: border-box;
    ${TerminalCompanyLogoBox}{
        align-items: flex-start;
        flex-direction: row;
        width: auto;
        flex: 2;
    }
    ${TerminalCompanyLogo}{
        width: 100%;
    }
`;

TerminalSliderContentColumn.defaultProps = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',
    p: '4%',
};

export const TerminalSliderQRBtn = styled(Box)`
    box-sizing: border-box;
    align-self: center;
    justify-content: center;
`;

TerminalSliderQRBtn.defaultProps = {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'row',
};

export const TerminalSliderBoxFloat = styled(Box)`
    box-sizing: border-box;
    align-self: center;
    border-bottom-left-radius: 20px;
    width: 100%;

`;

TerminalSliderBoxFloat.defaultProps = {
    display: 'flex',
    flexDirection: 'column',
    p: '4%'
};

export const TerminalSliderFooterBg = styled(Box)`
    box-sizing: border-box;
    ${TerminalSliderQRBtn}{
        width: 200%;
        justify-content: center;
    }
`;

TerminalSliderFooterBg.defaultProps = {
    display: 'flex',
    backgroundColor: '#fff',
    flex: 1,
};

export const TerminalSliderTitle = styled(Textfit)`
    font-family: 'Open Sans',sans-serif;
    font-size: 80px;
    font-weight: 800;
    line-height: 1.2;
    color: #ffffff;
    display: flex;
    flex: 2;
    padding-bottom: 20px;
    ${p => p.color && css`
        color: ${p.color};
    `}
    ${p => p.flex && css`
        flex: ${p.flex};
    `}
    ${p => p.fontWeight && css`
        font-weight: ${p.fontWeight};
    `}
    ${p => p.textTransform && css`
        text-transform: ${p.textTransform};
    `}
    ${p => p.p && css`
        padding: ${p.p};
    `}
    ${p => p.alignItems && css`
        align-items: ${p.alignItems};
    `}
    ${p => p.justifyContent && css`
        justify-content: ${p.justifyContent};
    `}
`;

TerminalSliderTitle.defaultProps = {
    min: 20,
    max: 80,
    mode: 'multi'
};

export const TerminalSliderList = styled(Textfit)`
    height: 100%;
    font-family: 'Open Sans',sans-serif;
    font-weight: 600;
    line-height: 1.3;
    color: #fff;
    display: flex;
    flex: 2;
    align-items: center;
    ${p => p.color && css`
        color: ${p.color};
    `}
    ${p => p.flex && css`
        flex: ${p.flex};
    `}
    ${p => p.p && css`
        padding: ${p.p};
    `}
    ${p => p.fontWeight && css`
        font-weight: ${p.fontWeight};
    `}
    span:before{
        content: "\\2713";
        margin-right: 8px;
    }
    ${p => p.noCheck && css`
        span:before{
            content: none;
        }
    `}
`;

TerminalSliderList.defaultProps = {
    min: 12,
    max: 45,
    mode: 'multi'
};

export const TerminalQRCodeBox = styled(Box)`
    height: 80%;
    width: fit-content;
    canvas,svg{
        width: auto!important;
        height: 100%!important;
        max-height: 450px!important;
    }
`;

export const TerminalQRCodeImg = styled.img`
    display: inline-block;
    padding: 20px;
    box-sizing: border-box;
    height: 100%;
    background: #fff;
    ${p => p.backgroundColor && css`
        background: ${p.backgroundColor};
    `}
`;
