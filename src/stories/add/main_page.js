import React from 'react';
import { Box, Col, Grid, Row, Typography} from "@smooth-ui/core-sc";
import { HeaderBox } from "../../components/Layout";
import bgHeader from "../../assets/img/bg-header.jpg";
import {Badge, Container, FormGroup, FormGroupIcon, ItemList, LinkWhite, ListUl, Tag} from "../../components";
import {AccessTime, Brush, Computer, LocationOn, Work} from "styled-icons/material";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import {Search} from "styled-icons/octicons";
import imgItem1 from "../../assets/img/item.jpg";
import {Heart} from "styled-icons/fa-regular";
import imgItem2 from "../../assets/img/item2.png";
import {Facebook, LinkedinIn, Twitter, Vk} from "styled-icons/fa-brands";

const MainPage = () => (
    <Box>
        <HeaderBox image={bgHeader} mb={30}>
            <Container>
                <Typography variant="h1" color="#fff" fontSize={50}>Работа найдется для каждого</Typography>
                <Typography variant="h2" color="#ff4f57" fontSize={30}>Здесь находят работу и подбирают персонал</Typography>
                <Box backgroundColor="rgba(255, 255, 255, 0.1)" p={10} my={30}>
                    <Grid fluid gutter={0}>
                        <Row>
                            <Col xs={12} md={12} mb={{ md: '10px', xs: '10px' }} lg={4}>
                                <FormGroup><FormGroupIcon><Work /></FormGroupIcon><Input size="lg" icon="true" control placeholder="Название вакансии / Компания" /></FormGroup>
                            </Col>
                            <Col xs={12} md={12} mb={{ md: '10px', xs: '10px' }} lg={4}>
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
        <Container>
            <Typography variant="h1" mb={30}>Вакансии дня</Typography>
            <ItemList>
                <Col xs="auto" display={{ xs: 'none', md: "block" }}>
                    <img width={100} src={imgItem1} alt=""/>
                </Col>
                <Col pl={25}>
                    <Box mb={20}>
                        <Typography variant="h2">Дизайнер <Badge>Полный день</Badge></Typography>
                    </Box>
                    <p>Внесение правок в готовые макеты полиграфии. Подготовка поздравительных открыток. Грамотно распределять объём работ между собой и вторым дизайнером.</p>
                    <hr/>
                    <Row mt={10}>
                        <Col flex="auto">
                            <Tag link="true" as="a"><Brush />Дизайн</Tag>
                            <Tag><LocationOn />Москва</Tag>
                            <Tag><AccessTime />12:00</Tag>
                        </Col>
                        <Col xs='auto' flex="none">
                            <Button mr={20} variant="secondary" round="true"><Heart /></Button>
                            <Button>Подробнее</Button>
                        </Col>
                    </Row>
                </Col>
            </ItemList>
            <ItemList>
                <Col xs="auto" display={{ xs: 'none', md: "block" }}>
                    <img width={100} src={imgItem2} alt=""/>
                </Col>
                <Col pl={25}>
                    <Box mb={20}>
                        <Typography variant="h2">Программист <Badge variant="secondary">Полный день</Badge></Typography>
                    </Box>
                    <p>Проектирование и разработка CRM системы на базе bpm'online. - Доработка и поддержка введенных в эксплуатацию модулей системы. Профильное техническое образование. - Знание ООП и теории БД. - Навыки программирования C# и JS.</p>
                    <hr/>
                    <Row mt={10}>
                        <Box flex="auto">
                            <Tag link="true" as="a"><Computer />Информационные технологии</Tag>
                            <Tag><LocationOn />Москва</Tag>
                            <Tag><AccessTime />12:00</Tag>
                        </Box>
                        <Box xs='auto' flex="none">
                            <Button mr={20} variant="secondary" round="true"><Heart /></Button>
                            <Button>Подробнее</Button>
                        </Box>
                    </Row>
                </Col>
            </ItemList>
        </Container>
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

export default MainPage;
