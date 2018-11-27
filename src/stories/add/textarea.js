import React from 'react';
import { Alert, Box, Grid, Typography, Textarea } from "@smooth-ui/core-sc";

const TextareaStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Textarea</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support API component <a href="https://smooth-ui.smooth-code.com/docs-components-textarea#api"><b>Textarea</b></a> smooth-ui</Alert>
            <code>
<pre>{`import { Textarea } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Size</Typography>
        <Box mb={10}>
            <Box mb={10}>
                <Textarea size="sm" placeholder="Small" />
            </Box>
            <Box mb={10}>
                <Textarea size="md" placeholder="Medium" />
            </Box>
            <Textarea size="lg" placeholder="Large" />
        </Box>
        <code>
<pre>{`<Textarea `}<b>size="sm"</b>{` placeholder="Small" />
<Textarea `}<b>size="md"</b>{` placeholder="Medium" />
<Textarea `}<b>size="lg"</b>{` placeholder="Large" />
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Disabled</Typography>
        <Box mb={10}>
            <Textarea disabled placeholder="Disabled" />
        </Box>
        <code>
<pre>{`<Textarea `}<b>disabled</b>{` placeholder="Disabled" />
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Control & Validation</Typography>
    <Box mb={10}>
        <Box mb={10}>
            <Textarea control placeholder="Control" />
        </Box>
        <Box mb={10}>
            <Textarea control valid placeholder="Valid control" />
        </Box>
        <Textarea control valid={false} placeholder="Invalid control" />
    </Box>
        <code>
<pre>{`<Textarea `}<b>control</b>{` placeholder="Control" />
<Textarea `}<b>control valid</b>{` placeholder="Valid control" />
<Textarea `}<b>control valid={`{false}`}</b>{` placeholder="Invalid control" />
`}</pre>
        </code>
    </Box>
);

export default TextareaStory;
