import React from 'react';
import { Alert, Box, Typography } from "@smooth-ui/core-sc";
import { TerminalTitle } from "../../components";

const TerminalComponentTitle = () => ( <Box p={10}>
        <Typography variant="h1">Terminal Title</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-typography#api">API component <b>Typography</b> smooth-ui</a></Alert>
        <code>
<pre>{`import { TerminalTitle } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<TerminalTitle>Title</TerminalTitle>
`}</pre>
        </code>
        <TerminalTitle>Title</TerminalTitle>
    </Box>
);

export default TerminalComponentTitle;
