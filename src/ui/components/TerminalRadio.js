import { styled, FormCheck, Radio, FormCheckLabel } from "@smooth-ui/core-sc";

export const TerminalFormCheck = styled(FormCheck)`
    box-sizing: border-box;
    align-items: flex-end;
    position: relative;
    margin-left: -1px;
    &:checked{
        background-color: #5688d7;
    }
`;

TerminalFormCheck.defaultProps = {
    display: "flex",
    flex: "0 0 auto",
};

export const TerminalFormCheckLabel = styled(FormCheckLabel)`
    position: relative;
    padding: 0 1rem;
    line-height: 56px;
    box-sizing: border-box;
    &:checked{
        background-color: #5688d7;
    }
`;

TerminalFormCheckLabel.defaultProps = {
    fontSize: '1rem',
};

export const TerminalRadio = styled(Radio)`
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    height: 56px;
    input:checked{
        border-color: #5688d7;
        & + ${TerminalFormCheckLabel}{
            color: #fff;
        }
    }
    .sui-radio-content {
        cursor: pointer;
        box-sizing: border-box;
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
    .sui-radio-circle {
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
`;

TerminalRadio.defaultProps = {
    display: "inline-block",
    border: "1px solid #8c97b2",
    flex: "0 0 auto",
};

