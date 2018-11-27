import React from 'react';
import { Alert, Box, Grid, Typography } from "@smooth-ui/core-sc";
import Input from "../../components/Input";

const InputStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Input</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support API component <a href="https://smooth-ui.smooth-code.com/docs-components-input#api"><b>Input</b></a> smooth-ui</Alert>
            <code>
<pre>{`import { Input } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Size</Typography>
        <Box mb={10}>
            <Box mb={10}>
                <Input size="sm" placeholder="Small" />
            </Box>
            <Box mb={10}>
                <Input size="md" placeholder="Medium" />
            </Box>
            <Input size="lg" placeholder="Large" />
        </Box>
        <code>
<pre>{`<Input `}<b>size="sm"</b>{` placeholder="Small" />
<Input `}<b>size="md"</b>{` placeholder="Medium" />
<Input `}<b>size="lg"</b>{` placeholder="Large" />
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Types</Typography>
        <Box mb={10}>
            <Input type="number" placeholder="100" />
        </Box>
        <code>
<pre>{`<Input `}<b>type="number"</b>{` placeholder="100" />`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Disabled</Typography>
        <Box mb={10}>
            <Input disabled placeholder="Disabled" />
        </Box>
        <code>
<pre>{`<Input `}<b>disabled</b>{` placeholder="Disabled" />`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Control & Validation</Typography>
    <Box mb={10}>
        <Box mb={10}>
            <Input control placeholder="Control" />
        </Box>
        <Box mb={10}>
            <Input control valid placeholder="Valid control" />
        </Box>
        <Input control valid={false} placeholder="Invalid control" />
    </Box>
        <code>
<pre>{`<Input `}<b>control</b>{` placeholder="Control" />
  <Input `}<b>control valid</b>{` placeholder="Valid control" />
  <Input `}<b>control valid={`{false}`}</b>{` placeholder="Invalid control" />
`}</pre>
        </code>
    </Box>
);

export default InputStory;
