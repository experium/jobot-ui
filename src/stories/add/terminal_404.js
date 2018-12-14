import React from 'react';

import {
    Alert, Box, Typography,
    TerminalButton,
    TerminalCol, TerminalRow
} from '../ui';

const Terminal404 = () => (
    <Box>
        <Typography variant="h1">Examples Terminal 404</Typography>
        <Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box, Typography, Button</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a> for <b>TerminalButton</b><br/>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { `}<b>Box, TerminalButton, TerminalCol, TerminalRow, Typography</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<TerminalRow `}<b>num={12} py={15} display="flex" justifyContent="space-around" alignItems="center"</b>{`>
    <Box `}<b>textAlign="center"</b>{`>
        <Box `}<b>pb={50}</b>{`>
            <Typography `}<b>variant="display-1"</b>{`>404</Typography>
            <Typography `}<b>variant="h4"</b>{`>страница не найдена</Typography>
        </Box>
        <TerminalRow `}<b>num={2} justifyContent="center"</b>{`>
            <TerminalCol `}<b>num={6}</b>{`>
                <TerminalButton `}<b>borderRadius="0"</b>{`>На главную</TerminalButton>
            </TerminalCol>
        </TerminalRow>
    </Box>
</TerminalRow>
`}</pre>
        </code>
        <TerminalRow num={12} py={15} display="flex" justifyContent="space-around" alignItems="center">
            <Box textAlign="center">
                <Box pb={50}>
                    <Typography variant="display-1">404</Typography>
                    <Typography variant="h4">страница не найдена</Typography>
                </Box>
                <TerminalRow num={2} justifyContent="center">
                    <TerminalCol num={6}>
                        <TerminalButton borderRadius="0">На главную</TerminalButton>
                    </TerminalCol>
                </TerminalRow>
            </Box>
        </TerminalRow>
    </Box>
);

export default Terminal404;
