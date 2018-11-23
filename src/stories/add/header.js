import React from 'react';
import {Alert, Box, Col, Grid, Row, Typography} from "@smooth-ui/core-sc";
import { HeaderBox } from "../../components/Layout";
import bgHeader from "../../assets/img/bg-header.jpg";
import {Badge, Container, FormGroup, FormGroupIcon} from "../../components";
import {LocationOn, Work} from "styled-icons/material";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import {Search} from "styled-icons/octicons";

const Header = () => (
    <Box>
        <Typography variant="h1">Examples Header</Typography>
        <Alert variant="success">
            <Typography variant="h5" mt={20}>Assembled from components: <br/><b>Grid, Row, Col, Box, Typography, Header, Container, FormGroup, FormGroupIcon, Badge, Button, Input, Select</b></Typography>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { Grid, Row, Col, Box, Typography } from `}<Box color="red" display="inline-block">'@smooth-ui/core-sc';</Box>{`
import { Header, Container } from `}<Box color="red" display="inline-block">'../components/Layout';</Box>{`
import { FormGroup, FormGroupIcon } from `}<Box color="red" display="inline-block">'../components/Form';</Box>{`
import { Badge } from `}<Box color="red" display="inline-block">'../components/Badge';</Box>{`
import Button from `}<Box color="red" display="inline-block">'../components/Button';</Box>{`
import Input from `}<Box color="red" display="inline-block">'../components/Input';</Box>{`
import Select from `}<Box color="red" display="inline-block">'../components/Select';</Box>{`
import bg from `}<Box color="red" display="inline-block">'../assets/img/bg-header.jpg';</Box><br/>{`
<HeaderBox `}<b>{`image={bg}`} mb={`{30}`}</b>{`>
    <Container>
        <Typography `}<b>variant="h1" color="#fff" fontSize={`{50}`}</b>{`>Работа найдется для каждого</Typography>
        <Typography `}<b>variant="h2" color="#ff4f57" fontSize={`{30}`}</b>{`>Здесь находят работу и подбирают персонал</Typography>
        <Box `}<b>backgroundColor="rgba(255, 255, 255, 0.1)" p={`{10}`} my={`{30}`}</b>{`>
            <Grid `}<b>fluid gutter={`{0}`}</b>{`>
                <Row>
                    <Col `}<b>xs={`{12}`} md={`{12}`} mb={`{{ md: '10px', xs: '10px' }}`} lg={`{4}`}</b>{`>
                        <FormGroup><FormGroupIcon><Work /></FormGroupIcon><Input size="lg" icon="true" control placeholder="Название вакансии / Компания" /></FormGroup>
                    </Col>
                    <Col `}<b>xs={`{12}`} md={`{12}`} mb={`{{ md: '10px', xs: '10px' }}`} lg={`{4}`}</b>{`>
                        <FormGroup>
                            <FormGroupIcon><LocationOn /></FormGroupIcon>
                            <Input `}<b>size="lg" icon="true" control placeholder="Название вакансии / Компания"</b>{` />
                        </FormGroup>
                    </Col>
                    <Col `}<b>xs={`{12}`} md={`{12}`} lg={`{4}`}</b>{`>
                        <Row>
                            <Col `}<b>xs="auto" flex="auto"</b>{`>
                                <FormGroup>
                                    <FormGroupIcon><Work /></FormGroupIcon>
                                    <Select `}<b>size="lg" control icon="true"</b>{`>
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
            <Badge `}<b>variant="light" link="true" as="a"</b>{`>Менеджер</Badge>
            <Badge `}<b>variant="light" link="true" as="a"</b>{`>Дизайнер</Badge>
            <Badge `}<b>variant="light" link="true" as="a"</b>{`>Программист</Badge>
        </Box>
    </Container>
</HeaderBox>
`}</pre>
        </code>
        <HeaderBox image={bgHeader} mb={30}>
            <Container>
                <Typography variant="h1" color="#fff" fontSize={50}>Работа найдется для каждого</Typography>
                <Typography variant="h2" color="#ff4f57" fontSize={30}>Здесь находят работу и подбирают персонал</Typography>
                <Box backgroundColor="rgba(255, 255, 255, 0.1)" p={10} my={30}>
                    <Grid fluid gutter={0}>
                        <Row>
                            <Col xs={12} md={12} mb={{ md: '10px', xs: "10px" }} lg={4}>
                                <FormGroup><FormGroupIcon><Work /></FormGroupIcon><Input size="lg" icon="true" control placeholder="Название вакансии / Компания" /></FormGroup>
                            </Col>
                            <Col xs={12}  md={12} mb={{ md: '10px', xs: "10px" }} lg={4}>
                                <FormGroup>
                                    <FormGroupIcon><LocationOn /></FormGroupIcon>
                                    <Input size="lg" icon="true" control placeholder="Название вакансии / Компания" />
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={12} lg={4}>
                                <Row>
                                    <Col xs="auto" flex="auto">
                                        <FormGroup>
                                            <FormGroupIcon><Work /></FormGroupIcon>
                                            <Select size="lg" control icon="true">
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
        </HeaderBox>
    </Box>
);

export default Header;
