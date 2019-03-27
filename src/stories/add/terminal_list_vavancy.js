import React from 'react';
import { Textfit } from "react-textfit";
import { ChevronLeft, ChevronRight } from 'styled-icons/fa-solid'
import logo from "../../assets/img/logo.svg";

import {
    Alert, Box, Typography,
    TerminalButton, TerminalTitle,
    TerminalButtonTextfit, TerminalRow,
    TerminalCol, TerminalEqualButton, TerminalLogoBox
} from '../ui';

const TerminalListVacancy = () => (
    <Box>
        <Typography variant="h1">Examples Terminal list vacancy</Typography>
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
import { `}<b>ChevronLeft, ChevronRight</b>{` } from `}<Box color="red" display="inline-block">'styled-icons/fa-solid';</Box>{`
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
        <Box `}<b>display="flex" alignItems="center"</b>{`>
            <TerminalCol `}<b>num={`{1.5}`} textAlign="center"</b>{`>
                <ChevronLeft `}<b>size="3rem"</b>{` />
            </TerminalCol>
            <TerminalCol `}<b>num={`{9}`}</b>{`>
                <TerminalRow `}<b>num={`{2}`} py={`{15}`}</b>{`>
                    <TerminalButton `}<b>borderRadius="0"</b>{`>
                        <TerminalButtonTextfit `}<b>min={`{20}`} max={`{40}`} mode="single"</b>{`>Продавец консультант</TerminalButtonTextfit></TerminalButton>
                </TerminalRow>
                <TerminalRow `}<b>num={`{2}`} py={`{15}`}</b>{`>
                    <TerminalButton `}<b>borderRadius="0"</b>{`>
                        <TerminalButtonTextfit `}<b>min={`{20}`} max={`{40}`} mode="single"</b>{`>Администратор магазина</TerminalButtonTextfit></TerminalButton>
                </TerminalRow>
                <TerminalRow `}<b>num={`{2}`} py={`{15}`}</b>{`>
                    <TerminalButton `}<b>borderRadius="0"</b>{`>
                        <TerminalButtonTextfit `}<b>min={`{20}`} max={`{40}`} mode="single"</b>{`>Заместитель директора  директора  директора  директора  директора директора магазина</TerminalButtonTextfit>
                    </TerminalButton>
                </TerminalRow>
                <TerminalRow `}<b>num={`{2}`} py={`{15}`}</b>{`>
                    <TerminalButton `}<b>borderRadius="0"</b>{`>
                        <TerminalButtonTextfit `}<b>min={`{20}`} max={`{40}`} mode="single"</b>{`>Продавец-консультант/Кассир</TerminalButtonTextfit></TerminalButton>
                </TerminalRow>
                <TerminalRow `}<b>num={`{2}`} py={`{15}`}</b>{`>
                    <TerminalButton `}<b>borderRadius="0"</b>{`>
                        <TerminalButtonTextfit `}<b>min={`{20}`} max={`{40}`} mode="single"</b>{`>Кассир</TerminalButtonTextfit></TerminalButton>
                </TerminalRow>
            </TerminalCol>
            <TerminalCol `}<b>num={`{1.5}`} textAlign="center"</b>{`>
                <ChevronRight `}<b>size="3rem"</b>{` />
            </TerminalCol>
        </Box>
</Box>
`}</pre>
        </code>
        <TerminalRow num={2} py={15}>
            <TerminalCol num={2.5} alignItems="center">
                <TerminalEqualButton bgHover="#f1f1f1" to="/shop/" borderRadius='0' fontSize="1.7rem">
                    Назад
                </TerminalEqualButton>
            </TerminalCol>
            <TerminalCol num={7} textAlign="center" display="inline-flex" justifyContent="center" alignItems="center" flexDirection="column">
                <TerminalTitle><Textfit min={20} max="1.5rem" mode="multi">Вакансии</Textfit></TerminalTitle>
                <Box fontSize={18}>1 из 2 страниц</Box>
            </TerminalCol>
            <TerminalCol num={2.5} textAlign="right">
                <TerminalLogoBox>
                    <img alt="" src={logo}/>
                </TerminalLogoBox>
            </TerminalCol>
        </TerminalRow>
        <Box display="flex" alignItems="center">
            <TerminalCol num={1.5} textAlign="center">
                <ChevronLeft size="3rem" />
            </TerminalCol>
            <TerminalCol num={9}>
                <TerminalRow num={2} py={15}>
                    <TerminalButton borderRadius="0">
                        <TerminalButtonTextfit min={20} max={40} mode="single">Продавец консультант</TerminalButtonTextfit></TerminalButton>
                </TerminalRow>
                <TerminalRow num={2} py={15}>
                    <TerminalButton borderRadius="0">
                        <TerminalButtonTextfit min={20} max={40} mode="single">Администратор магазина</TerminalButtonTextfit></TerminalButton>
                </TerminalRow>
                <TerminalRow num={2} py={15}>
                    <TerminalButton borderRadius="0">
                        <TerminalButtonTextfit min={30} max={40} mode="single">Заместитель директора  директора  директора  директора  директора директора магазина</TerminalButtonTextfit>
                    </TerminalButton>
                </TerminalRow>
                <TerminalRow num={2} py={15}>
                    <TerminalButton borderRadius="0">
                        <TerminalButtonTextfit min={20} max={40} mode="single">Продавец-консультант/Кассир</TerminalButtonTextfit></TerminalButton>
                </TerminalRow>
                <TerminalRow num={2} py={15}>
                    <TerminalButton borderRadius="0">
                        <TerminalButtonTextfit min={20} max={40} mode="single">Кассир</TerminalButtonTextfit></TerminalButton>
                </TerminalRow>
            </TerminalCol>
            <TerminalCol num={1.5} textAlign="center">
                <ChevronRight size="3rem" />
            </TerminalCol>
        </Box>
    </Box>
);

export default TerminalListVacancy;
