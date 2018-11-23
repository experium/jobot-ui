import React from 'react';
import { Alert, Box, Typography } from "@smooth-ui/core-sc";
import { Container } from "../../components";
import Button from "../../components/Button";

const BoxColorBg = () => (
    <Box>
        <Typography variant="h1">Examples Box color background</Typography>
        <Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box, Typography, Button</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-typography#api">API component <b>Typography</b> smooth-ui</a> for <b>TerminalTitle</b><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a> for <b>TerminalButton</b>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { `}<b>Box, Container</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<Box `}<b>backgroundColor='#FF4F57'</b>{`>
    <Container `}<b>py={`{60}`} textAlign="center"</b>{`>
        <Typography `}<b>variant="h1" color="#fff"</b>{`>Ищу работу</Typography>
        <br/>
        <Typography `}<b>variant="h3" color='#9FA7BA' fontWeight="400"</b>{`>Присоединяйтесь к тысячам работодателей и заработайте!</Typography>
        <br/>
        <Button>Начать</Button>
    </Container>
</Box>
`}</pre>
        </code>
        <Box backgroundColor='#FF4F57'>
            <Container py={60} textAlign="center">
                <Typography variant="h1" color='#fff'>Ищу работу</Typography>
                <br/>
                <Typography variant="h3" color='#fff' fontWeight='100'>Присоединяйтесь к тысячам работодателей и заработайте!</Typography>
                <br/>
                <Button variant="light">Начать</Button>
            </Container>
        </Box>
    </Box>
);

export default BoxColorBg;
