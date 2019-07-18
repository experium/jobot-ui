import React from 'react';
import { LocationOn, Work } from "styled-icons/material";

import {
    Box, Col, Grid, Row, Typography,
    Badge, BoxImage, Container, FormGroup,
    FormGroupIcon, ItemList,
    Button, Input, Select, BoxList, BoxLogo, TitleVacancy,
    SumVacancy, TitleBox, ItemListBox, Icon, BoxImageTopBottom
} from '../ui';

import bgHeader from "../../assets/img/bg-header-right.svg";
import bgWaveHeader from "../../assets/img/bg-wave-header.svg";
import bgWaveFooter from "../../assets/img/bg-wave-footer.svg";
import logo from '../../assets/img/logo-gradient.svg';
import imgItem1 from "../../assets/img/company/4.png";
import imgItem2 from "../../assets/img/company/2.png";
import imgItem3 from "../../assets/img/company/6.png";

const MainPage = () => (
    <Box>
        <Box backgroundColor='#F8F9FD'>
            {/*HEADER START*/}
            <BoxImage image={bgHeader} mb={0} pb={{ xs: 0, md: 150 }} pt={{ xs: 20, md: 40 }}>
                <Container header>
                    <Grid fluid pb={{ xs: 15, md: 70 }}>
                        <Row>
                            <Col xs={12} md={8} lg={8}>
                                <img src={logo} width={220} alt=""/>
                            </Col>
                            <Col xs={12} md={4} lg={4}>
                                <FormGroup header>
                                    <FormGroupIcon landing><LocationOn /></FormGroupIcon>
                                    <Select size="lg" control icon landing>
                                        <option>Москва</option>
                                        <option>Control</option>
                                        <option>Other</option>
                                    </Select>
                                </FormGroup>
                            </Col>
                        </Row>
                    </Grid>
                    <Box backgroundColor={{ xs: 'rgba(255,255,255,0.4)', md: 'transparent' }} textAlign={{ xs: 'center', md: 'left'}}>
                        <Typography variant="h1" color="#5E57A7" fontSize={{ xs: 30, md: 50}}>Здесь находят работу <br/> и подбирают персонал</Typography>
                    </Box>
                    <Box backgroundColor="rgba(255, 255, 255, 0.1)" py={10}>
                        <Grid fluid>
                            <Row>
                                <Col xs={12} md={6} mb={{ md: '10px', xs: '10px' }} lg={5}>
                                    <FormGroup><FormGroupIcon landing><Work /></FormGroupIcon><Input size="lg" icon control landing placeholder="Название вакансии / Компания" /></FormGroup>
                                </Col>
                            </Row>
                            <Box>
                                <Badge variant="info" link as="a">Менеджер</Badge>&nbsp;•&nbsp;
                                <Badge variant="info" link as="a">Дизайнер</Badge>&nbsp;•&nbsp;
                                <Badge variant="info" link as="a">Программист</Badge>
                            </Box>
                            <Row>
                                <Col xs={12} md={6} lg={5} mt={15}>
                                    <Row>
                                        <Col xs="auto" flex="none">
                                            <Button variant='info' size="lg">ИСКАТЬ</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Grid>
                    </Box>
                </Container>
            </BoxImage>
            {/*HEADER END*/}

            {/*LIST COMPANY & VACANCY START*/}
            <Box>
                <Container >
                    <Grid fluid>
                        <Row>
                            <Col xs={12} md={4} lg={4}>
                                <Box textAlign={{ xs: 'center', md: 'left'}}>
                                    <TitleBox mt={{ xs: 30, md: 0 }} fontSize={{ xs: '1.5rem', md: '2.2rem' }}>Компании</TitleBox>
                                </Box>
                                <BoxList>
                                    <ItemList>
                                        <Col xs="auto">
                                            <BoxLogo>
                                                <img src={imgItem1} alt=""/>
                                            </BoxLogo>
                                        </Col>
                                        <Col pl={15} alignSelf='center'>
                                            <TitleVacancy>АНКОР</TitleVacancy>
                                            <Box><a>210 вакансий</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col xs="auto">
                                            <BoxLogo>
                                                <img src={imgItem2} alt=""/>
                                            </BoxLogo>
                                        </Col>
                                        <Col pl={15} alignSelf='center'>
                                            <TitleVacancy>Мегафон</TitleVacancy>
                                            <Box><a>106 вакансий</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col xs="auto">
                                            <BoxLogo>
                                                <img src={imgItem3} alt=""/>
                                            </BoxLogo>
                                        </Col>
                                        <Col pl={15} alignSelf='center'>
                                            <TitleVacancy>ВТБ</TitleVacancy>
                                            <Box><a>97 вакансий</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col xs="auto">
                                            <BoxLogo>
                                                <img src={imgItem1} alt=""/>
                                            </BoxLogo>
                                        </Col>
                                        <Col pl={15} alignSelf='center'>
                                            <TitleVacancy>АНКОР</TitleVacancy>
                                            <Box><a>210 вакансий</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col xs="auto">
                                            <BoxLogo>
                                                <img src={imgItem2} alt=""/>
                                            </BoxLogo>
                                        </Col>
                                        <Col pl={15} alignSelf='center'>
                                            <TitleVacancy>Мегафон</TitleVacancy>
                                            <Box><a>106 вакансий</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col xs="auto">
                                            <BoxLogo>
                                                <img src={imgItem3} alt=""/>
                                            </BoxLogo>
                                        </Col>
                                        <Col pl={15} alignSelf='center'>
                                            <TitleVacancy>ВТБ</TitleVacancy>
                                            <Box><a>97 вакансий</a></Box>
                                        </Col>
                                    </ItemList>
                                </BoxList>
                            </Col>
                            <Col xs={12} md={8} lg={8}>
                                <Box textAlign={{ xs: 'center', md: 'left'}}>
                                    <TitleBox mt={{ xs: 30, md: 0 }} fontSize={{ xs: '1.5rem', md: '2.2rem' }}>Вакансии дня</TitleBox>
                                </Box>
                                <BoxList>
                                    <ItemList>
                                        <Col alignSelf='center'>
                                            <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                                <Col>
                                                    <TitleVacancy>Технолог гидрометаллургического производства</TitleVacancy>
                                                </Col>
                                                <Col pl={{ xs: '8px', md: 15 }}>
                                                    <SumVacancy>от 80 000 до 120 000 руб.</SumVacancy>
                                                </Col>
                                            </Row>
                                            <Box><a>АНКОР</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col alignSelf='center'>
                                            <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                                <Col>
                                                    <TitleVacancy>Дизайнер</TitleVacancy>
                                                </Col>
                                                <Col pl={{ xs: '8px', md: 15 }}>
                                                    <SumVacancy>по договоренности</SumVacancy>
                                                </Col>
                                            </Row>
                                            <Box><a>Связной</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col alignSelf='center'>
                                            <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                                <Col>
                                                    <TitleVacancy>Водитель-курьер с автомобилем</TitleVacancy>
                                                </Col>
                                                <Col pl={{ xs: '8px', md: 15 }}>
                                                    <SumVacancy>110 000 руб.</SumVacancy>
                                                </Col>
                                            </Row>
                                            <Box><a>OBI</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col alignSelf='center'>
                                            <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                                <Col>
                                                    <TitleVacancy>Технолог гидрометаллургического производства</TitleVacancy>
                                                </Col>
                                                <Col pl={{ xs: '8px', md: 15 }}>
                                                    <SumVacancy>от 80 000 до 120 000 руб.</SumVacancy>
                                                </Col>
                                            </Row>
                                            <Box><a>АНКОР</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col alignSelf='center'>
                                            <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                                <Col>
                                                    <TitleVacancy>Дизайнер</TitleVacancy>
                                                </Col>
                                                <Col pl={{ xs: '8px', md: 15 }}>
                                                    <SumVacancy>по договоренности</SumVacancy>
                                                </Col>
                                            </Row>
                                            <Box><a>Связной</a></Box>
                                        </Col>
                                    </ItemList>
                                    <ItemList>
                                        <Col alignSelf='center'>
                                            <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                                <Col>
                                                    <TitleVacancy>Водитель-курьер с автомобилем</TitleVacancy>
                                                </Col>
                                                <Col pl={{ xs: '8px', md: 15 }}>
                                                    <SumVacancy>110 000 руб.</SumVacancy>
                                                </Col>
                                            </Row>
                                            <Box><a>OBI</a></Box>
                                        </Col>
                                    </ItemList>
                                </BoxList>
                            </Col>
                        </Row>
                    </Grid>
                </Container>
            </Box>
            {/*LIST COMPANY & VACANCY END*/}

            {/*GRID CATEGORY START*/}
            <BoxImageTopBottom imageTop={bgWaveHeader} imageBottom={bgWaveFooter} mb={0}>
                <Box py={50} background='linear-gradient(to bottom, rgba(120,105,255,1) 0%, rgba(143,87,255,1) 100%)'>
                    <Container textAlign='center'>
                        <TitleBox color='#fff' mt={0} mb={40}>Компании</TitleBox>
                        <Grid fluid>
                            <Row mt={16}>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                            </Row>
                            <Row mt={16}>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                                <Col xs={12} md={2} lg={2} mb={{ xs: 16, md: 0 }}>
                                    <ItemListBox>
                                        <Icon icon="builder" size={40} color={'#fff'} />
                                        <Box>
                                            <Typography variant='h4'>Строитель</Typography>
                                        </Box>
                                    </ItemListBox>
                                </Col>
                            </Row>
                        </Grid>
                    </Container>
                </Box>
            </BoxImageTopBottom>
            {/*GRID CATEGORY END*/}

            {/*LARGE LABEL START*/}
            <Box>
                <Container pb={100} textAlign='center'>
                    <Typography color='#5E57A7' variant='h1'  fontSize={{ xs: 70, md: 150}} fontWeight='bold'>3000+</Typography>
                    <Box>
                        <Typography color='#5E57A7' variant='h2' textTransform='uppercase'>Вакансий</Typography>
                    </Box>
                </Container>
            </Box>
            {/*LARGE LABEL END*/}

            {/*FOOTER START*/}
            <Box backgroundColor='#fff'>
                <Container py={20}>
                    <Box color='#5E57A7'> ©  2019 Jobot. Работа найдется для каждого</Box>
                </Container>
            </Box>
            {/*FOOTER END*/}
        </Box>
    </Box>
);

export default MainPage;
