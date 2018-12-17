import React from 'react';

import {
    Alert, Box, Typography,
    TerminalRow, TerminalCol
} from '../ui';

const TerminalGrid = () => (
    <Box>
        <Typography variant="h1">Terminal grid - max num=12 (100vh & 100vw)</Typography>
        <Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>TerminalRow, TerminalCol</b> smooth-ui</a><br/>
            TerminalRow height 100vh: 12 / <b>{`{num}`}</b><br/>
            TerminalCol height 100vw: 12 / <b>{`{num}`}</b>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { `}<b>TerminalRow, TerminalCol</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<Box>
    <TerminalRow `}<b>num={`{2}`} p={`{50}`} display="flex" justifyContent="space-around"</b>{`>
        TerminalRow 2/12 height 100vh
    </TerminalRow>
    <TerminalRow `}<b>num={`{8}`}</b>{`>
        <TerminalCol `}<b>num={`{2}`} p={`{50}`}</b>{`>
            TerminalCol 2/12 width 100vw
        </TerminalCol>
        <TerminalCol `}<b>num={`{5}`} p={`{50}`}</b>{`>
            TerminalCol 5/12 width 100vw
        </TerminalCol>
        <TerminalCol `}<b>num={`{2.5}`} p={`{50}`}</b>{`>
            TerminalCol 2.5/12 width 100vw
        </TerminalCol>
        <TerminalCol `}<b>num={`{2.5}`} p={`{50}`}</b>{`>
            TerminalCol 2.5/12 width 100vw
        </TerminalCol>
    </TerminalRow>
</Box>
`}</pre>
        </code>
        <TerminalRow num={2} p={50} display="flex" justifyContent="space-around"  border="1px solid #ccc">
            TerminalRow 2/12 height 100vh
        </TerminalRow>
        <TerminalRow num={8} textAlign="center">
            <TerminalCol num={2} p={50} backgroundColor="#eee" border="1px solid #ccc">
                TerminalCol 2/12 width 100vw
            </TerminalCol>
            <TerminalCol num={5} p={50} backgroundColor="#eee" border="1px solid #ccc">
                TerminalCol 5/12 width 100vw
            </TerminalCol>
            <TerminalCol num={2.5} p={50} backgroundColor="#eee" border="1px solid #ccc">
                TerminalCol 2.5/12 width 100vw
            </TerminalCol>
            <TerminalCol num={2.5} p={50} backgroundColor="#eee" border="1px solid #ccc">
                TerminalCol 2.5/12 width 100vw
            </TerminalCol>
        </TerminalRow>


        <Typography variant="h1" mt={50}>Custom height & width grid</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { `}<b>TerminalRow, TerminalCol</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<Box>
    <TerminalRow `}<b>gridRowHeight="300px" num={`{2}`} p={`{50}`} display="flex" justifyContent="space-around"</b>{`>
        TerminalRow 2/12 height 100vh
    </TerminalRow>
    <TerminalRow `}<b>gridRowHeight="300px" num={`{8}`}</b>{`>
        <TerminalCol `}<b>gridColWidth="800px" num={`{2}`} p={`{50}`}</b>{`>
            TerminalCol 2/12 width 100vw
        </TerminalCol>
        <TerminalCol `}<b>gridColWidth="800px" num={`{5}`} p={`{50}`}</b>{`>
            TerminalCol 5/12 width 100vw
        </TerminalCol>
        <TerminalCol `}<b>gridColWidth="800px" num={`{2.5}`} p={`{50}`}</b>{`>
            TerminalCol 2.5/12 width 100vw
        </TerminalCol>
        <TerminalCol `}<b>gridColWidth="800px" num={`{2.5}`} p={`{50}`}</b>{`>
            TerminalCol 2.5/12 width 100vw
        </TerminalCol>
    </TerminalRow>
</Box>
`}</pre>
        </code>

        <TerminalRow gridRowHeight="300px" num={2} p={50} display="flex" justifyContent="space-around"  border="1px solid #ccc">
            TerminalRow 2/12 height 300px
        </TerminalRow>
        <TerminalRow gridRowHeight="300px" num={8} textAlign="center">
            <TerminalCol gridColWidth="800px" num={2} p={50} backgroundColor="#eee" border="1px solid #ccc">
                TerminalCol 2/12 width 800px
            </TerminalCol>
            <TerminalCol gridColWidth="800px" num={5} p={50} backgroundColor="#eee" border="1px solid #ccc">
                TerminalCol 5/12 width 800px
            </TerminalCol>
            <TerminalCol gridColWidth="800px" num={2.5} p={50} backgroundColor="#eee" border="1px solid #ccc">
                TerminalCol 2.5/12 width 800px
            </TerminalCol>
            <TerminalCol gridColWidth="800px" num={2.5} p={50} backgroundColor="#eee" border="1px solid #ccc">
                TerminalCol 2.5/12 width 800px
            </TerminalCol>
        </TerminalRow>
    </Box>
);

export default TerminalGrid;
