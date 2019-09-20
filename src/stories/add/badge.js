import React from 'react';
import { Alert, Box, Grid, Typography, Badge } from '../ui';

const BadgeStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Badge</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a></Alert>
            <code>
<pre>{`import { Badge } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box> <br/>{`
<Badge>Badge (primary)</Badge>
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Variants</Typography>
        <Badge>Default (primary)</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="dark">Dark</Badge>
        <Box backgroundColor="#aaa" p={10} display="inline-block">
            <Badge variant="light">Light</Badge>
        </Box>
        <code>
<pre>{`<Badge>Default (primary)</Badge>
<Badge `}<b>variant="primary"</b>{`>Primary</Badge>
<Badge `}<b>variant="secondary"</b>{`>Secondary</Badge>
<Badge `}<b>variant="success"</b>{`>Success</Badge>
<Badge `}<b>variant="danger"</b>{`>Danger</Badge>
<Badge `}<b>variant="warning"</b>{`>Warning</Badge>
<Badge `}<b>variant="info"</b>{`>Info</Badge>
<Badge `}<b>variant="light"</b>{`>Light</Badge>
<Badge `}<b>variant="dark"</b>{`>Dark</Badge>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Sizes</Typography>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
        <code>
<pre>{`<Badge `}<b>size="sm"</b>{`>Small</Badge>
<Badge `}<b>size="md"</b>{`>Medium</Badge>
<Badge `}<b>size="lg"</b>{`>Large</Badge>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Badge Link</Typography>
        <Box backgroundColor="#aaa" p={10}>
            <Badge variant='light' link="true" as="a">Badge Link</Badge>
        </Box>
        <code>
<pre>{`<Badge `}<b>variant='light' link as="a"</b>{`>Badge Link</Badge>
`}</pre>
        </code>
    </Box>
);

export default BadgeStory;
