import React from 'react';
import { LocationOn, Work } from 'styled-icons/material';
import { Search } from "styled-icons/octicons";

import {
    Alert, Box, Col, Grid, Row, Typography,
    Badge, Container, FormGroup, FormGroupIcon,
    Input, Select, Button, BoxImage
} from '../ui';


import bgHeader from '../../assets/img/bg-header.jpg';

const Header = () => (
    <Box>
        <Typography variant="h1">Examples Header</Typography>
        <Alert variant="success">
            <Typography variant="h5" mt={20}>Assembled from components: <br/><b>Grid, Row, Col, Box, Typography, Header, Container, FormGroup, FormGroupIcon, Badge, Button, Input, Select</b></Typography>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { Grid, Row, Col, Box, Typography, BoxImage, Container, FormGroup, FormGroupIcon, Badge, Button, Input, Select } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
import { LocationOn, Work } from `}<Box color="red" display="inline-block">'styled-icons/material';</Box>{`
import bg from `}<Box color="red" display="inline-block">'../assets/img/bg-header.jpg';</Box><br/>{`
<BoxImage `}<b>{`image={bg}`} mb={`{30}`} py={`{150}`}</b>{`>
    <Container>
        <Typography `}<b>variant="h1" color="#fff" fontSize={`{50}`}</b>{`>Работа найдется для каждого</Typography>
        <Typography `}<b>variant="h2" color="#ff4f57" fontSize={`{30}`}</b>{`>Здесь находят работу и подбирают персонал</Typography>
        <Box `}<b>backgroundColor="rgba(255, 255, 255, 0.1)" p={`{10}`} my={`{30}`}</b>{`>
            <Grid `}<b>fluid gutter={`{0}`}</b>{`>
                <Row>
                    <Col `}<b>xs={`{12}`} md={`{12}`} mb={`{{ md: '10px', xs: '10px' }}`} lg={`{4}`}</b>{`>
                        <FormGroup><FormGroupIcon><Work /></FormGroupIcon><Input size="lg" icon control placeholder="Название вакансии / Компания" /></FormGroup>
                    </Col>
                    <Col `}<b>xs={`{12}`} md={`{12}`} mb={`{{ md: '10px', xs: '10px' }}`} lg={`{4}`}</b>{`>
                        <FormGroup>
                            <FormGroupIcon><LocationOn /></FormGroupIcon>
                            <Input `}<b>size="lg" icon control placeholder="Название вакансии / Компания"</b>{` />
                        </FormGroup>
                    </Col>
                    <Col `}<b>xs={`{12}`} md={`{12}`} lg={`{4}`}</b>{`>
                        <Row>
                            <Col `}<b>xs="auto" flex="auto"</b>{`>
                                <FormGroup>
                                    <FormGroupIcon><Work /></FormGroupIcon>
                                    <Select `}<b>size="lg" control icon</b>{`>
                                        <option>Все категории</option>
                                        <option>Control</option>
                                        <option>Other</option>
                                    </Select>
                                </FormGroup>
                            </Col>
                            <Col `}<b>xs="auto" flex="none"</b>{`>
                                <Button `}<b>size="lg"</b>{`><Search /></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Box>
        <Box>
            <Typography `}<b>color="#fff" as="b"</b>{`>Популярные запросы: </Typography>
            <Badge `}<b>variant="light" link as="a"</b>{`>Менеджер</Badge>
            <Badge `}<b>variant="light" link as="a"</b>{`>Дизайнер</Badge>
            <Badge `}<b>variant="light" link as="a"</b>{`>Программист</Badge>
        </Box>
    </Container>
</BoxImage>
`}</pre>
        </code>
        <BoxImage image={bgHeader} mb={30} py={150}>
            <Container>
                <Typography variant="h1" color="#fff" fontSize={50}>Работа найдется для каждого</Typography>
                <Typography variant="h2" color="#ff4f57" fontSize={30}>Здесь находят работу и подбирают персонал</Typography>
                <Box backgroundColor="rgba(255, 255, 255, 0.1)" p={10} my={30}>
                    <Grid fluid gutter={0}>
                        <Row>
                            <Col xs={12} md={12} mb={{ md: '10px', xs: "10px" }} lg={4}>
                                <FormGroup><FormGroupIcon><Work /></FormGroupIcon><Input size="lg" icon control placeholder="Название вакансии / Компания" /></FormGroup>
                            </Col>
                            <Col xs={12}  md={12} mb={{ md: '10px', xs: "10px" }} lg={4}>
                                <FormGroup>
                                    <FormGroupIcon><LocationOn /></FormGroupIcon>
                                    <Input size="lg" icon control placeholder="Название вакансии / Компания" />
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={12} lg={4}>
                                <Row>
                                    <Col xs="auto" flex="auto">
                                        <FormGroup>
                                            <FormGroupIcon><Work /></FormGroupIcon>
                                            <Select size="lg" control icon>
                                                <option>Все категории</option>
                                                <option>Control</option>
                                                <option>Other</option>
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                    <Col xs="auto" flex="none">
                                        <Button size="lg"><Search title="Search" /></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Box>
                <Box>
                    <Typography color="#fff" as="b">Популярные запросы: </Typography>
                    <Badge variant="light" link="true" as="a">Менеджер</Badge>
                    <Badge variant="light" link="true" as="a">Дизайнер</Badge>
                    <Badge variant="light" link="true" as="a">Программист</Badge>
                </Box>
            </Container>
        </BoxImage>
    </Box>
);

export default Header;
