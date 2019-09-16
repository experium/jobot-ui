import React from 'react';
import { LocationOn, Work } from "styled-icons/material";
import Tilt from 'react-tilt';
import ReactWOW from 'react-wow';

import {
    Box, Col, Grid, Row, Typography,
    Badge, BoxImage, Container, FormGroup,
    FormGroupIcon, ItemList,
    Button, Input, Select, BoxList, BoxLogo, TitleVacancy,
    SumVacancy, TitleBox, ItemListBox, Icon, BoxImageTopBottom, BadgeRow, TypographyUppercase, BoxImageAnimate, BoxImageAnimateWrap
} from '../ui';

import bgHeader from "../../assets/img/bg-header-right.svg";
import bgWaveHeader from "../../assets/img/bg-wave-header.svg";
import bgAnimate1 from "../../assets/img/animate/1.svg";
import bgAnimate2 from "../../assets/img/animate/2.svg";
import bgAnimate3 from "../../assets/img/animate/3.svg";
import bgAnimate4 from "../../assets/img/animate/4.svg";
import bgAnimate5 from "../../assets/img/animate/5.svg";
import bgWaveFooter from "../../assets/img/bg-wave-footer.svg";
import logo from '../../assets/img/logo-gradient.svg';
import imgItem1 from "../../assets/img/company/4.png";
import imgItem2 from "../../assets/img/company/2.png";
import imgItem3 from "../../assets/img/company/6.png";


const MainPage = () => (
    <Box>
        <Box backgroundColor='#edeff7'>
            {/*HEADER START*/}
            <BoxImage image={bgHeader} mb={0} pb={{ xs: 0, md: 150 }} pt={{ xs: 20, md: 25 }}>
                <BoxImageAnimateWrap>
                    <Tilt className="Tilt" options={{ max : 10, easing: "cubic-bezier(0.785, 0.135, 0.15, 0.86)", reverse: true }}>
                        <BoxImageAnimate image={bgAnimate3} variant='var3' />
                    </Tilt>
                    <Tilt className="Tilt" options={{ max : 12, easing: "cubic-bezier(0.785, 0.135, 0.15, 0.86)", reverse: true }}>
                        <BoxImageAnimate image={bgAnimate2} variant='var2' />
                    </Tilt>
                    <Tilt className="Tilt" options={{ max : 15, easing: "cubic-bezier(0.785, 0.135, 0.15, 0.86)", reverse: true }}>
                        <BoxImageAnimate image={bgAnimate1} variant='var1' />
                    </Tilt>
                    <Tilt className="Tilt" options={{ max : 5, easing: "cubic-bezier(0.785, 0.135, 0.15, 0.86)", reverse: true }}>
                        <BoxImageAnimate image={bgAnimate4} variant='var4' />
                    </Tilt>
                    <Tilt className="Tilt" options={{ max : 5, easing: "cubic-bezier(0.785, 0.135, 0.15, 0.86)", reverse: true }}>
                        <BoxImageAnimate image={bgAnimate5} variant='var5' />
                    </Tilt>
                </BoxImageAnimateWrap>
                <Container header>
                    <Grid fluid>
                        <Row>
                            <Col xs={12} md={8} lg={8} order={{ xs: 1, md: 1}} textAlign={{ xs: 'center', md: 'left'}}>
                                <img src={logo} width={220} alt=""/>
                            </Col>
                            <Col xs={12} md={4} lg={4} order={{ xs: 3, md: 2}}>
                                <FormGroup header>
                                    <FormGroupIcon landing><LocationOn /></FormGroupIcon>
                                    <Select size="lg" control icon landing>
                                        <option>Москва</option>
                                        <option>Control</option>
                                        <option>Other</option>
                                    </Select>
                                </FormGroup>
                            </Col>
                            <Col xs={12} md={12} lg={12} pt={{ xs: 15, md: 70 }} order={{ xs: 2, md: 3}}>
                                <Box backgroundColor={{ xs: 'rgba(255,255,255,0.4)', md: 'transparent' }} textAlign={{ xs: 'center', md: 'left'}}>
                                    <Typography variant="h1" color="#5E57A7" display="inline-block" position="relative" zIndex={100} fontSize={{ xs: 30, md: 50}}>Здесь находят работу <br/> и подбирают персонал</Typography>
                                </Box>
                            </Col>
                        </Row>
                    </Grid>
                    <Box py={10}>
                        <Grid fluid>
                            <Row>
                                <Col xs={12} md={6} mb={{ md: '10px', xs: '10px' }} lg={5} display="inline-block">
                                    <FormGroup><FormGroupIcon landing><Work /></FormGroupIcon><Input size="lg" icon control landing placeholder="Название вакансии / Компания" /></FormGroup>
                                </Col>
                            </Row>
                            <BadgeRow>
                                <Badge variant="info" link as="a">Менеджер</Badge>
                                <Badge variant="info" link as="a">Дизайнер</Badge>
                                <Badge variant="info" link as="a">Программист</Badge>
                            </BadgeRow>
                            <Row>
                                <Col xs={12} md={6} lg={5} mt={15}>
                                    <Row justifyContent={{ xs: 'center', md: 'left'}}>
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
                                                A
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
                                                М
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
                                               <small>logo</small>
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
                                                <Col pl={{ xs: '8px', md: 15 }} xs="auto">
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
                                                <Col pl={{ xs: '8px', md: 15 }} xs="auto">
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
                                                <Col pl={{ xs: '8px', md: 15 }} xs="auto">
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
                                                <Col pl={{ xs: '8px', md: 15 }} xs="auto">
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
                                                <Col pl={{ xs: '8px', md: 15 }} xs="auto">
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
                                                <Col pl={{ xs: '8px', md: 15 }} xs="auto">
                                                    <SumVacancy>110 000 руб.</SumVacancy>
                                                </Col>
                                            </Row>
                                            <Box><a>OBI</a></Box>
                                        </Col>
                                    </ItemList>
                                </BoxList>
                                <Row justifyContent='center' mt={20}>
                                    <Col xs="auto" flex="none">
                                        <Button variant='info' size="lg">Посмотреть все</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Grid>
                </Container>
            </Box>
            {/*LIST COMPANY & VACANCY END*/}

            {/*GRID CATEGORY START*/}
            <BoxImageTopBottom imagetop={bgWaveHeader} imagebottom={bgWaveFooter} mb={0}>
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
                    <ReactWOW animation='fadeIn'>
                        <Typography color='#5E57A7' variant='h1'  fontSize={{ xs: 70, md: 150}} fontWeight='bold'>3000+</Typography>
                    </ReactWOW>
                    <Box>
                        <TypographyUppercase color='#5E57A7'>Вакансий</TypographyUppercase>
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
