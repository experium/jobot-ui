import React from 'react';
import { Alert, Box, Typography } from "@smooth-ui/core-sc";
import {TerminalVacancyButton, TerminalVacancyTitle} from "../../components";

const TerminalComponents = () => ( <Box p={10}>

        <Typography variant="h1">Terminal components</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { TerminalVacancyTitle, TerminalVacancyButton } from `}<Box color="red" display="inline-block">'../components/TerminalVacancy';</Box>{`
`}</pre>
        </code>
        <Typography variant="h3" mb={20} mt={30}>Terminal Title</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-typography#api">API component <b>Typography</b> smooth-ui</a></Alert>
        <TerminalVacancyTitle>Title</TerminalVacancyTitle><br/>
        <code>
<pre>{`<TerminalVacancyButton>Title</TerminalVacancyButton>
`}</pre>
        </code>
        <Typography variant="h3" mb={20} mt={30}>Terminal Button</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a></Alert>
        <TerminalVacancyButton link="true" as="a">Button</TerminalVacancyButton>
        <code>
<pre>{`<TerminalVacancyButton `}<b>link="true" as="a"</b>{`>Button</TerminalVacancyButton>
`}</pre>
        </code>
    </Box>
);

export default TerminalComponents;
