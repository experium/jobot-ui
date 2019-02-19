import React from 'react';

import {
    Alert, Box, Typography,
    TerminalTitle, TerminalSubTitle,
    TerminalOrText
} from '../ui';

const TerminalComponentTitle = () => ( <Box p={10}>
        <Typography variant="h1">Terminal Title</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-typography#api">API component <b>Typography</b> smooth-ui</a></Alert>
        <code>
<pre>{`import { TerminalTitle, TerminalSubTitle, TerminalOrText } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<TerminalTitle>Title</TerminalTitle>
<TerminalSubTitle>Sub Title</TerminalSubTitle>
<TerminaOrText><span>Or Title</span></TerminaOrText>
`}</pre>
        </code>
        <TerminalTitle>Title</TerminalTitle>
        <TerminalSubTitle mode='single' max={32}>Sub Title</TerminalSubTitle>
        <TerminalOrText><span>Or Title</span></TerminalOrText>
    </Box>
);

export default TerminalComponentTitle;
