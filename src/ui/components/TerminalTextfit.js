import { styled } from "@smooth-ui/core-sc";
import { Textfit } from 'react-textfit';

export const TerminalTextfit = styled(Textfit)`
    & > div{
        display: block;
        white-space: nowrap;
        height: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        padding: 0px 30px;
    }
`;
