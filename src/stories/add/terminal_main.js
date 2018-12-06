import React from 'react';
import logo from "../../assets/img/logo.svg";

import {
    Alert, Box, Typography,
    TerminalButton,
    TerminalButtonTextfit, TerminalRow
} from '../ui';

const TerminalMain = () => (
    <Box>
        <Typography variant="h1">Examples Terminal list vacancy</Typography>
        <Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box, Typography, Button</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a> for <b>TerminalButton</b><br/>
            Support <a href="https://github.com/malte-wessel/react-textfit">API component <b>Textfit</b> react-textfit</a> for <b>TerminalButtonTextfit</b>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { `}<b>Box, TerminalButton, TerminalButtonTextfit, TerminalRow</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
import `}<b>logo</b>{` from `}<Box color="red" display="inline-block">'../../assets/img/logo.svg';</Box><br/>{`
<Box>
    <TerminalRow `}<b>num={`{2}`} py={`{15}`} display="flex" justifyContent="space-around"</b>{`>
        <img `}<b>width="300px" src={`{logo}`}</b>{` alt=""/>
    </TerminalRow>
    <TerminalRow `}<b>num={`{8}`} py={`{15}`} textAlign="center"</b>{`>
        <Box `}<b>flex={`{1}`} display="flex" justifyContent="space-around" flexDirection="column" height="100%"</b>{`>
            <Typography `}<b>variant="h2"</b>{`>Company является одной из крупнейших мировых компаний в сфере производства модной одежды. Она входит в группу Company, одну из крупнейших мировых дистрибьюторских групп.</Typography>
            <Typography `}<b>my="2rem" variant="display-4"</b>{`>Найдите работу в мире МОДЫ?</Typography>
        </Box>
    </TerminalRow>
    <TerminalRow `}<b>num={`{2}`} pb={`{30}`}</b>{`>
        <TerminalButton `}<b>borderRadius="0"</b>{`>
            <TerminalButtonTextfit `}<b>min={`{20}`} max={`{40}`} mode="single"</b>{`>Вакансии</TerminalButtonTextfit>
        </TerminalButton>
    </TerminalRow>
</Box>
`}</pre>
        </code>
        <TerminalRow num={2} py={15} display="flex" justifyContent="space-around">
            <img width="300px" src={logo} alt=""/>
        </TerminalRow>
        <TerminalRow num={8} py={15} textAlign="center">
            <Box flex={1} display="flex" justifyContent="space-around" flexDirection="column" height="100%">
                <Typography variant="h2">Company является одной из крупнейших мировых компаний в сфере производства модной одежды. Она входит в группу Company, одну из крупнейших мировых дистрибьюторских групп.</Typography>
                <Typography my="2rem" variant="display-4">Найдите работу в мире МОДЫ?</Typography>
            </Box>
        </TerminalRow>
        <TerminalRow num={2} pb={30}>
            <TerminalButton borderRadius="0">
                <TerminalButtonTextfit min={20} max={40} mode="single">Вакансии</TerminalButtonTextfit>
            </TerminalButton>
        </TerminalRow>
    </Box>
);

export default TerminalMain;
