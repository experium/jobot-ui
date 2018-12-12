import React from 'react';
import { Textfit } from "react-textfit";
import logo from "../../assets/img/logo.svg";
import qr from "../../assets/img/qr.png";

import {
    Alert, Box, Typography,
    TerminalButton, TerminalTitle,
    TerminalButtonTextfit, TerminalRow,
    TerminalCol, TerminalEqualButton,
    TerminalText, TerminalLogoBox
} from '../ui';

const TerminalVacancy = () => (
    <Box>
        <Typography variant="h1">Examples Terminal vacancy</Typography>
        <Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box, Typography, Button</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-typography#api">API component <b>Typography</b> smooth-ui</a> for <b>TerminalTitle</b><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a> for <b>TerminalButton</b><br/>
            Support <a href="https://github.com/malte-wessel/react-textfit">API component <b>Textfit</b> react-textfit</a> for <b>TerminalButtonTextfit</b>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { `}<b>Box, TerminalButton, TerminalTitle, TerminalButtonTextfit, TerminalRow, TerminalCol, TerminalEqualButton, TerminalLogoBox</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
import `}<b>logo</b>{` from `}<Box color="red" display="inline-block">'../../assets/img/logo.svg';</Box>{`
import `}<b>qr</b>{` from `}<Box color="red" display="inline-block">'../../assets/img/qr.png';</Box>{`
import { `}<b>Textfit</b>{` } from `}<Box color="red" display="inline-block">'react-textfit';</Box><br/>{`
<Box>
    <TerminalRow `}<b>num={`{2}`} py={`{15}`}</b>{`>
            <TerminalCol `}<b>num={`{2.5}`} alignItems="center"</b>{`>
                <TerminalEqualButton `}<b>borderRadius='0' fontSize="1.7rem"</b>{`>Назад</TerminalEqualButton>
            </TerminalCol>
            <TerminalCol `}<b>num={`{7}`} textAlign="center" display="inline-flex" justifyContent="center" alignItems="center" flexDirection="column"</b>{`>
                <TerminalTitle><Textfit `}<b>min={`{20}`} max="1.5rem" mode="multi"</b>{`>Вакансии</Textfit></TerminalTitle>
                <Box `}<b>fontSize={`{18}`}</b>{`>1 из 2 страниц</Box>
            </TerminalCol>
            <TerminalCol `}<b>num={`{2.5}`} textAlign="right"</b>{`>
                <TerminalLogoBox>
                    <img alt="" `}<b>src={`{logo}`}/</b>{`>
                </TerminalLogoBox>
            </TerminalCol>
        </TerminalRow>
        <TerminalRow `}<b>num={`{8}`} my={`{15}`} mx={`{-15}`} px={`{15}`} overflow="auto" display="block"</b>{`>
            <TerminalText `}<b>flex={`{1}`} display="flex" justifyContent="space-around" flexDirection="column"</b>{`>
                <Box `}<b>display="flex" alignItems="center"</b>{`>
                    <TerminalCol `}<b>num={`{6}`}</b>{`>Col 1/2</TerminalCol>
                    <TerminalCol `}<b>num={`{6}`} display="flex" alignItems="flex-end" justifyContent="flex-end" pr={15}</b>{`>
                        <img `}<b>width="300px" height="300px" src={`{qr}`}</b>{` alt="" />
                    </TerminalCol>
                </Box>
                <Box `}<b>textAlign="left" mt={`{20}`}</b>{`>
                    Col full width
                </Box>
            </TerminalText>
        </TerminalRow>
        <TerminalRow `}<b>num={`{2}`} pb={`{30}`}</b>{`>
            <TerminalButton `}<b>borderRadius="0"</b>{`>
                <TerminalButtonTextfit `}<b>min={`{20}`} max={`{40}`} mode="single"</b>{`>Откликнуться</TerminalButtonTextfit></TerminalButton>
        </TerminalRow>
</Box>
`}</pre>
        </code>
        <TerminalRow num={2} py={15}>
            <TerminalCol num={2.5} alignItems="center">
                <TerminalEqualButton borderRadius='0' fontSize="1.7rem">
                    Назад
                </TerminalEqualButton>
            </TerminalCol>
            <TerminalCol num={7} textAlign="center" display="inline-flex" justifyContent="center" alignItems="center" flexDirection="column">
                <TerminalTitle><Textfit min={20} max="1.5rem" mode="multi">Вакансии</Textfit></TerminalTitle>
            </TerminalCol>
            <TerminalCol num={2.5} textAlign="right">
                <TerminalLogoBox>
                    <img alt="" src={logo}/>
                </TerminalLogoBox>
            </TerminalCol>
        </TerminalRow>
        <TerminalRow num={8} my={15} overflow="auto" display="block">
            <TerminalText flex={1} display="flex" justifyContent="space-around" flexDirection="column">
                <Box display="flex" alignItems="center">
                    <TerminalCol num={6}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TerminalCol>
                    <TerminalCol num={6} display="flex" alignItems="flex-end" justifyContent="flex-end" pr={15}>
                        <img width="300px" height="300px" src={qr} alt="" />
                    </TerminalCol>
                </Box>
                <Box textAlign="left" mt={20}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Box>
            </TerminalText>
        </TerminalRow>
        <TerminalRow num={2} pb={30}>
            <TerminalButton borderRadius="0">
                <TerminalButtonTextfit min={20} max={40} mode="single">Откликнуться</TerminalButtonTextfit></TerminalButton>
        </TerminalRow>
    </Box>
);

export default TerminalVacancy;
