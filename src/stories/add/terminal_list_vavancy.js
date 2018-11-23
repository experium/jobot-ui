import React from 'react';
import { Alert, Box, Typography } from "@smooth-ui/core-sc";
import { TerminalButton, TerminalTitle } from "../../components";

const TerminalListVacancy = () => (
    <Box>
        <Typography variant="h1">Examples Terminal list vacancy</Typography>
        <Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box, Typography, Button</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-typography#api">API component <b>Typography</b> smooth-ui</a> for <b>TerminalTitle</b><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a> for <b>TerminalButton</b>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { `}<b>Box, TerminalButton, TerminalTitle</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
<Box `}<b>textAlign="center"</b>{`>
    <TerminalTitle>Вакансии</TerminalTitle>
    <TerminalButton `}<b>as="a"</b>{`>Продавец консультант</TerminalButton>
    <TerminalButton `}<b>as="a"</b>{`>Оператор call-центра</TerminalButton>
    <TerminalButton `}<b>as="a"</b>{`>Водитель</TerminalButton>
</Box>
`}</pre>
        </code>
        <Box textAlign="center">
            <TerminalTitle>Вакансии</TerminalTitle>
            <TerminalButton as="a">Продавец консультант</TerminalButton>
            <TerminalButton as="a">Оператор call-центра</TerminalButton>
            <TerminalButton as="a">Водитель</TerminalButton>
        </Box>
    </Box>
);

export default TerminalListVacancy;
