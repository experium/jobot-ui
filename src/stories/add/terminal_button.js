import React from 'react';

import {
    Alert, Box, Typography,
    TerminalButton
} from '../ui';

const TerminalComponentButton = () => ( <Box p={10}>
        <Typography variant="h1">Terminal Button</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a></Alert>
        <code>
<pre>{`import { TerminalButton } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<TerminalButton `}<b>link as="a"</b>{`>Button</TerminalButton>
`}</pre>
        </code>
        <TerminalButton link="true" as="a">Button</TerminalButton>
    </Box>
);

export default TerminalComponentButton;
