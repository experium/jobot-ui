import React from 'react';
import { ChevronLeft } from "styled-icons/fa-solid/ChevronLeft";

import {
    Alert, Box, Typography,
    TerminalButton, TerminalTitle
} from '../ui';

import company1 from '../../assets/img/company/1.png';

const TerminalListVacancyCompany = () => (
    <Box>
        <Typography variant="h1">Examples Terminal list vacancy company</Typography>
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
<pre>{`import { `}<b>Box, TerminalButton, TerminalTitle</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
import `}<b>company1</b>{` from `}<Box color="red" display="inline-block">'assets/img/company/1.png';</Box> <br/>{`
<Box `}<b>textAlign="center"</b>{`>
    <Box `}<b>display="flex" alignItems="center" mx="3rem"</b>{`>
        <Button `}<b>variant="secondary" display="inline-block" alignItems="center" width={100} height={100} borderRadius='1rem'</b>{`>
            <ChevronLeft `}<b>size="4rem"</b>{` />
        </Button>
        <Box `}<b>display="inline-block" alignItems="center" backgroundColor='#fff' width={100} height={100} borderRadius='1rem'</b>{`>
            <img `}<b>src={`{company1}`} width="100%" style={`{ borderRadius: '1rem'}`}</b>{` />
        </Box>
        <Box `}<b>flex="1 0 auto"</b>{`>
            <TerminalTitle>Вакансии</TerminalTitle>
        </Box>
    </Box>
    <TerminalButton `}<b>as="a"</b>{`>Продавец консультант</TerminalButton>
    <TerminalButton `}<b>as="a"</b>{`>Оператор call-центра</TerminalButton>
    <TerminalButton `}<b>as="a"</b>{`>Водитель</TerminalButton>
</Box>
`}</pre>
        </code>
        <Box textAlign="center">
            <Box display="flex" alignItems="center" mx="3rem">
                <Button variant="secondary" display="inline-block" alignItems="center" width={100} height={100} borderRadius='1rem'>
                    <ChevronLeft size="4rem" />
                </Button>
                <Box flex="1 0 auto">
                    <TerminalTitle>Вакансии</TerminalTitle>
                </Box>
                <Box display="inline-block" alignItems="center" backgroundColor='#fff' width={100} height={100} borderRadius='1rem'>
                    <img src={company1} width="100%" alt="" style={{ borderRadius: '1rem'}}/>
                </Box>
            </Box>
            <TerminalButton as="a">
                Продавец консультант
            </TerminalButton>
            <TerminalButton as="a">
                Оператор call-центра
            </TerminalButton>
            <TerminalButton as="a">
                Водитель
            </TerminalButton>
        </Box>
    </Box>
);

export default TerminalListVacancyCompany;
