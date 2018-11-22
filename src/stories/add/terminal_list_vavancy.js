import React from 'react';
import { Alert, Box, Typography } from "@smooth-ui/core-sc";
import { TerminalVacancyButton, TerminalVacancyTitle } from "../../components/TerminalVacancy";

const TerminalListVacancy = () => (
    <Box>
        <Typography variant="h1">Examples Terminal list vacancy</Typography>
        <Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box, Typography, Button</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-typography#api">API component <b>Typography</b> smooth-ui</a> for <b>TerminalVacancyTitle</b><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a> for <b>TerminalVacancyButton</b>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { `}<b>Box</b>{` } from `}<Box color="red" display="inline-block">'@smooth-ui/core-sc';</Box>{`
import { `}<b>TerminalVacancyBtn, TerminalVacancyTitle</b>{` } from `}<Box color="red" display="inline-block">'../components/TerminalVacancy';</Box><br/>{`
<Box `}<b>textAlign="center"</b>{`>
    <TerminalVacancyTitle>Вакансии</TerminalVacancyTitle>
    <TerminalVacancyButton `}<b>as="a"</b>{`>Продавец консультант</TerminalVacancyButton>
    <TerminalVacancyButton `}<b>as="a"</b>{`>Оператор call-центра</TerminalVacancyButton>
    <TerminalVacancyButton `}<b>as="a"</b>{`>Водитель</TerminalVacancyButton>
</Box>
`}</pre>
        </code>
        <Box textAlign="center">
            <TerminalVacancyTitle>Вакансии</TerminalVacancyTitle>
            <TerminalVacancyButton as="a">Продавец консультант</TerminalVacancyButton>
            <TerminalVacancyButton as="a">Оператор call-центра</TerminalVacancyButton>
            <TerminalVacancyButton as="a">Водитель</TerminalVacancyButton>
        </Box>
    </Box>
);

export default TerminalListVacancy
