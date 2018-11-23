import React from 'react';
import {Alert, Box, Grid, Typography} from "@smooth-ui/core-sc";
import Button from "../../components/Button";
import {Heart} from "styled-icons/fa-regular";

const ButtonStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Buttons</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a></Alert>
            <code>
<pre>{`import Button from `}<Box color="red" display="inline-block">'../components/Badge';</Box> <br/>{`
<Button>Default (primary)</Button>
`}</pre>
            </code>
        </Grid>
        <Typography variant="h3" mb={20} mt={30}>Variants</Typography>
        <Button mr={10}>Default (primary)</Button>
        <Button mr={10} variant="secondary">Secondary</Button>
        <Button mr={10} variant="success">Success</Button>
        <Button mr={10} variant="danger">Danger</Button>
        <Button mr={10} variant="warning">Warning</Button>
        <Button mr={10} variant="info">Info</Button>
        <Button mr={10} variant="light">Light</Button>
        <Button mr={10} variant="dark">Dark</Button>
        <code>
<pre>{`<Button>Default (primary)</Button>
<Button `}<b> variant="primary"</b>{`>Primary</Button>
<Button `}<b> variant="secondary"</b>{`>Secondary</Button>
<Button `}<b> variant="success"</b>{`>Success</Button>
<Button `}<b> variant="danger"</b>{`>Danger</Button>
<Button `}<b> variant="warning"</b>{`>Warning</Button>
<Button `}<b> variant="info"</b>{`>Info</Button>
<Button `}<b> variant="light"</b>{`>Light</Button>
<Button `}<b> variant="dark"</b>{`>Dark</Button>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Sizes</Typography>
        <Button mr={10} size="sm">Small</Button>
        <Button mr={10} size="md">Medium</Button>
        <Button mr={10} size="lg">Large</Button>
        <code>
<pre>{`<Button `}<b>size="sm"</b>{`>Small</Button>
<Button `}<b>size="md"</b>{`>Medium</Button>
<Button `}<b>size="lg"</b>{`>Large</Button>
`}</pre>
        </code>

        <Typography variant="h3" my={20}>Disabled</Typography>
        <Button variant="primary" disabled>
            Disabled
        </Button>
        <code>
<pre>{`<Button `}<b>variant="primary" disabled</b>{`>Disabled</Button>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Circle</Typography>
        <Button mr={10} round="true" size='sm'><Heart /></Button>
        <Button mr={10} round="true"><Heart /></Button>
        <Button mr={10} round="true" size='lg'><Heart /></Button>
        <code>
<pre>{`import { Heart } from `}<Box color="red" display="inline-block">'styled-icons/fa-regular/Heart';</Box> <br/>{`
<Button `}<b> circle size='sm'</b>{`>
    <Heart />
</Button>
<Button `}<b> circle</b>{`>
    <Heart />
</Button>
<Button `}<b> circle size='lg'</b>{`>
    <Heart />
</Button>
`}</pre>
        </code>
    </Box>
);

export default ButtonStory;
