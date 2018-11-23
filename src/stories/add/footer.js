import React from 'react';
import { Alert, Box, Col, Row, Typography } from "@smooth-ui/core-sc";
import { Container, LinkWhite, ListUl} from "../../components";
import Button from "../../components/Button";
import { Facebook, LinkedinIn, Twitter, Vk } from "styled-icons/fa-brands";

const Footer = () => ( <Box>
        <Typography variant="h1">Examples Footer</Typography>
        <Alert variant="success">
            <Typography variant="h5" mt={20}>Assembled from components: <br/><b>Grid, Row, Col, Box, Typography, Container, Button, LinkWhite, ListUl</b></Typography>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { Row, Col, Box, Typography } from `}<Box color="red" display="inline-block">'@smooth-ui/core-sc';</Box>{`
import { Container } from `}<Box color="red" display="inline-block">'../components/Layout';</Box>{`
import { ListUl, LinkWhite } from `}<Box color="red" display="inline-block">'../components/Typography';</Box>{`
import { Facebook, LinkedinIn, Twitter, Vk } from `}<Box color="red" display="inline-block">'styled-icons/fa-brands';</Box><br/>{`
<Box `}<b>backgroundColor="#202020" mt={`{60}`}</b>{`>
    <Container `}<b>py={`{60}`}</b>{`>
        <Row `}<b>mx={`{-15}`}</b>{`>
                    <Col `}<b>xs={`{12}`} md={`{6}`} lg={`{3}`} order={`{{ md: "3", lg: "1" }}`} mb={`{{ md: "10px", xs: "15px" }}`}</b>{`>
                        <Typography `}<b>variant="h3" color='#FF4F57' mb={`{30}`}</b>{`>Заголовок</Typography>
                        <Box `}<b>color='#fff'</b>{`>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.</Box>
                    </Col>
                    <Col `}<b>xs={`{12}`} md={`{6}`} lg={`{3}`} order={`{{ md: "1", lg: "2" }}`} mb={`{{ md: "10px", xs: "15px" }}`}</b>{`>
                        <Typography `}<b>variant="h3" color='#fff' mb={`{30}`}</b>{`>Раздел</Typography>
                        <ListUl `}<b>styleNone</b>{`>
                            <li>
                                <LinkWhite href="#">Link 1</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 2</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 3</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 4</LinkWhite>
                            </li>
                        </ListUl>
                    </Col>
                    <Col `}<b>xs={`{12}`} md={`{6}`} lg={`{3}`} order={`{{ md: "2", lg: "3" }}`} mb={`{{ md: "10px", xs: "15px" }}`}</b>{`>
                        <Typography `}<b>variant="h3" color='#fff' mb={`{30}`}</b>{`>Раздел</Typography>
                        <ListUl `}<b>styleNone</b>{`>
                            <li>
                                <LinkWhite href="#">Link 1</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 2</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 3</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 4</LinkWhite>
                            </li>
                        </ListUl>
                    </Col>
                    <Col `}<b>xs={`{12}`} md={`{6}`} lg={`{3}`} order={`{{ md: "4", lg: "4" }}`} mb={`{{ md: "10px", xs: "15px" }}`}</b>{`>
                        <Typography `}<b>variant="h3" color='#fff' mb={`{30}`}</b>{`>Подписаться</Typography>
                        <Row>
                            <Col `}<b>xs="auto" mr={`{10}`}</b>{`>
                                <Button `}<b>round="true" icon="true"</b>{`><Vk /></Button>
                            </Col>
                            <Col `}<b>xs="auto" mr={`{10}`}</b>{`>
                                <Button `}<b>round="true" icon="true"</b>{`><Facebook /></Button>
                            </Col>
                            <Col `}<b>xs="auto" mr={`{10}`}</b>{`>
                                <Button `}<b>round="true" icon="true"</b>{`><Twitter /></Button>
                            </Col>
                            <Col `}<b>xs="auto" mr={`{10}`}</b>{`>
                                <Button `}<b>round="true" icon="true"</b>{`><LinkedinIn /></Button>
                            </Col>
                        </Row>
                        <Box `}<b>mt={`{10}`}</b>{`>
                            <Box `}<b>color='#fff'</b>{`>Join our mailing list to stay up to date and get notices about our new releases!</Box>
                        </Box>
                    </Col>
                </Row>
    </Container>
</Box>
`}</pre>
        </code>
        <Box backgroundColor='#202020' mt={60}>
            <Container py={60}>
                <Row mx={-15}>
                    <Col xs={12} md={6} lg={3} order={{ md: "3", lg: "1" }} mb={{ md: "10px", xs: "15px" }}>
                        <Typography variant="h3" color='#FF4F57' mb={30}>Заголовок</Typography>
                        <Box color='#fff'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.</Box>
                    </Col>
                    <Col xs={12} md={6} lg={3} order={{ md: "1", lg: "2" }} mb={{ md: "10px", xs: "15px" }}>
                        <Typography variant="h3" color='#fff' mb={30}>Раздел</Typography>
                        <ListUl styleNone>
                            <li>
                                <LinkWhite href="#">Link 1</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 2</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 3</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 4</LinkWhite>
                            </li>
                        </ListUl>
                    </Col>
                    <Col xs={12} md={6} lg={3} order={{ md: "2", lg: "3" }} mb={{ md: "10px", xs: "15px" }}>
                        <Typography variant="h3" color='#fff' mb={30}>Раздел</Typography>
                        <ListUl styleNone>
                            <li>
                                <LinkWhite href="#">Link 1</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 2</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 3</LinkWhite>
                            </li>
                            <li>
                                <LinkWhite href="#">Link 4</LinkWhite>
                            </li>
                        </ListUl>
                    </Col>
                    <Col xs={12} md={6} lg={3} order={{ md: "4", lg: "4" }} mb={{ md: "10px", xs: "15px" }}>
                        <Typography variant="h3" color='#fff' mb={30}>Подписаться</Typography>
                        <Row>
                            <Col xs="auto" mr={10}>
                                <Button round="true" icon="true"><Vk /></Button>
                            </Col>
                            <Col xs="auto" mr={10}>
                                <Button round="true" icon="true"><Facebook /></Button>
                            </Col>
                            <Col xs="auto" mr={10}>
                                <Button round="true" icon="true"><Twitter /></Button>
                            </Col>
                            <Col xs="auto" mr={10}>
                                <Button round="true" icon="true"><LinkedinIn /></Button>
                            </Col>
                        </Row>
                        <Box mt={10}>
                            <Box color='#fff'>Join our mailing list to stay up to date and get notices about our new releases!</Box>
                        </Box>
                    </Col>
                </Row>
            </Container>
        </Box>
    </Box>
);

export default Footer;
