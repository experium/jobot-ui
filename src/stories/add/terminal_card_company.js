import React from 'react';

import {
    Alert, Box, Col, Row, Typography,
    Button
} from '../ui';

import company1 from "../../assets/img/company/1.png";
import company2 from "../../assets/img/company/2.png";
import company3 from "../../assets/img/company/3.jpeg";

const TerminalCardCompany = () => (
    <Box>
        <Typography variant="h1">Examples Terminal card vacancy</Typography>
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
<pre>{`import { `}<b>Box, Col, Row, Typography</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<Box `}<b>textAlign="center"</b>{`>
    <Typography `}<b>variant="h1" fontSize="4rem" my={`{30}`}</b>{`>Вакансии</Typography>
    <Row `}<b>alignItems="stretch"</b>{`>
        <Col `}<b>xs={`{4}`}</b>{`>
            <Button `}<b>display="flex" alignItems="center" justifyContent="center" borderRadius="1rem" p={`{20}1}`} height="100%" my={`{30}`}` mx={`{20}`} backgroundColor='#FF4F57' as="a"</b>{`>
                <Typography `}<b>variant="h1" color='#fff' size={`{50}`}</b>{`>Продавец консультант</Typography>
            </Button>
        </Col>
        <Col `}<b>xs={`{4}`}</b>{`>
            <Button `}<b>display="flex" alignItems="center" justifyContent="center" borderRadius="1rem" p={`{20}1}`} height="100%" my={`{30}`}` mx={`{20}`} backgroundColor='#FF4F57' as="a"</b>{`>
                <Typography `}<b>variant="h1" color='#fff' size={`{50}`}</b>{`>Оператор call-центра</Typography>
            </Button>
        </Col>
        <Col `}<b>xs={`{4}`}</b>{`>
            <Button `}<b>display="flex" alignItems="center" justifyContent="center" borderRadius="1rem" p={`{20}1}`} height="100%" my={`{30}`}` mx={`{20}`} backgroundColor='#FF4F57' as="a"</b>{`>
                <Typography `}<b>variant="h1" color='#fff' size={`{50}`}</b>{`>Водитель</Typography>
            </Button>
        </Col>
    </Row>
</Box>
`}</pre>
        </code>
        <Box textAlign="center">
            <Typography variant="h1" fontSize="4rem" my={30}>Компании</Typography>
            <Row alignItems="stretch">
                <Col xs={4}>
                    <Button display="flex" alignItems="center" justifyContent="center" borderRadius="1rem" p={20} height="100%" my={30} mx={20} as="a">
                        <Box display="flex" alignItems="center" backgroundColor='#fff' width={250} height={250} borderRadius='1rem'>
                            <img src={company1} width="100%" alt="" style={{ borderRadius: '1rem'}}/>
                        </Box>
                    </Button>
                </Col>
                <Col xs={4}>
                    <Button display="flex" alignItems="center" justifyContent="center" borderRadius="1rem" p={20} height="100%" my={30} mx={20} as="a">
                        <Box display="flex" alignItems="center" backgroundColor='#fff' width={250} height={250} borderRadius='1rem'>
                            <img src={company2} width="100%" alt="" style={{ borderRadius: '1rem'}}/>
                        </Box>
                    </Button>
                </Col>
                <Col xs={4}>
                    <Button display="flex" alignItems="center" justifyContent="center" borderRadius="1rem" p={20} height="100%" my={30} mx={20} as="a">
                        <Box display="flex" alignItems="center" backgroundColor='#fff' width={250} height={250} borderRadius='1rem'>
                            <img src={company3} alt="" width="100%" style={{ borderRadius: '1rem'}} />
                        </Box>
                    </Button>
                </Col>
            </Row>
        </Box>
    </Box>
);

export default TerminalCardCompany;
