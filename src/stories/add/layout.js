import React from 'react';

import { Alert, Box, Typography, BoxImage, Container } from '../ui';

import imgBg from '../../assets/img/bg-header.jpg';

const LayoutComponents = () => ( <Box p={10}>
        <Typography variant="h1">Layout components</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { BoxImage, Container } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
`}</pre>
        </code>
        <Typography variant="h3" mb={20} mt={30}>Box Image</Typography>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a>
        </Alert>
        <BoxImage image={imgBg} py={150}><Container><Typography variant="display-1" color="#fff">BoxImage</Typography></Container></BoxImage>
        <code>
<pre>{`<BoxImage `}<b> backgroundColor={`{imgBg}`} py={`{150}`}</b>{`>
        <!--Container is used position context-->
        <Container>
            <Typography `}<b>variant="display-1" color="#fff"</b>{`>BoxImage</Typography>
        </Container>
</BoxImage>
`}</pre>
        </code>
        <Typography variant="h3" mb={20} mt={30}>Container box</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a></Alert>
        <Container backgroundColor="#ddd" py={50}>Container box max-width 1120px</Container>
        <code>
<pre>{`<Container `}<b> backgroundColor="#ddd" py={`{50}`}</b>{`>Container box max-width 1120px</Container>
`}</pre>
        </code>
    </Box>
);

export default LayoutComponents;
