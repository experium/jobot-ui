import { css, styled, th } from "@smooth-ui/core-sc";
import { Button } from "./Button";
import { Textfit } from 'react-textfit';

const themeStyle = {
    white: css`
        height: auto;
        color: #bd102c;
        border-radius: 40px;
        background: #fff;
        font-weight: bold;
        padding: 1.5rem 1rem;
        &:not(:disabled):hover{
            background: #fff;
        }
    `,
    red: css`
        height: auto;
        border-radius: 40px;
        background: #b23249;
        font-weight: bold;
        padding: 1.5rem 1rem;
        &:not(:disabled):hover{
            background: #b23249;
        }
    `,
    blue: css`
        height: auto;
        border-radius: 10px;
        background: #095f9c;
        font-weight: bold;
        padding: 1.5rem 1rem;
        &:not(:disabled):hover{
            background: #095f9c;
        }
    `,
    green: css`
        height: auto;
        border-radius: 40px;
        background: #1b7f37;
        font-weight: bold;
        &:not(:disabled):hover{
            background: #1b7f37;
        }
    `,
};

const themeStyleText = {
    white: css`
        font-size: 65px;
    `,
    blue: css`
        font-size: 70px;
    `,
    green: css`
        font-size: 75px;
    `,
};

export const TerminalButton = styled(Button)`
    color: #fff;
    border-radius: 0;
    height: 100%;
    width: 100%;
    display: block;
    ${p => p.themes && themeStyle[p.themes]};
    box-sizing: border-box;
    text-transform: uppercase;
    &:after,&:before{
        content: '';
        display: table;
        clear: both;
    }
`;

TerminalButton.defaultProps = {
    size: "lg",
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: "1.6rem",
    fontWeight: 600,
    variant: "primary"
};

export const TerminalButtonTextfit = styled(Textfit)`
    & > div{
        display: block;
        height: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0px 30px;
        ${p => p.themes && themeStyleText[p.themes]};
    }
`;
