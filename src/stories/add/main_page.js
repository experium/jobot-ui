import React, { Component } from 'react';
import { LocationOn } from "styled-icons/material";

import {
    Box, Col, Grid, Row, Typography,
    Badge, BoxImage, Container, FormGroup,
    FormGroupIcon, ItemList,
    Button, Select, BoxList, BoxLogo, TitleVacancy,
    SumVacancy, TitleBox, ItemListBox, Icon, BoxImageTopBottom,
    BadgeRow, AnimateImg, LogoGradient,
    Title, InputSearch, ButtonSearch, Footer, CountVacancy
} from '../ui';

import bgHeader from "../../assets/img/bg-header-right.svg";
import bgWaveHeader from "../../assets/img/bg-wave-header.svg";
import bgWaveFooter from "../../assets/img/bg-wave-footer.svg";
import imgItem1 from "../../assets/img/company/4.png";
import imgItem2 from "../../assets/img/company/2.png";
import imgItem3 from "../../assets/img/company/6.png";

class MainPage extends Component {
    render() {
        return (
            <Box>
                <Box backgroundColor='#edeff7'>
                    {/*HEADER START*/}
                    <BoxImage image={bgHeader} mb={0} pb={{ xs: 0, md: 150 }} pt={{ xs: 20, md: 25 }}>
                        <AnimateImg />
                        <Container header="true">
                            <Grid fluid>
                                <Row>
                                    <LogoGradient />
                                    <Col xs={12} md={4} lg={4} order={{ xs: 3, md: 2}}>
                                        <FormGroup header="true" display="inline-block" position="relative" zIndex={100}>
                                            <FormGroupIcon landing="true"><LocationOn /></FormGroupIcon>
                                            <Select size="lg" control icon="true" landing="true">
                                                <option>Все города</option>
                                            </Select>
                                        </FormGroup>
                                    </Col>
                                    <Title>Здесь находят работу <br/> и подбирают персонал</Title>
                                </Row>
                            </Grid>
                            <Box py={10}>
                                <Grid fluid>
                                    <InputSearch placeholder="Название вакансии / Компания" />
                                    <BadgeRow display="inline-block" position="relative" zIndex={100}>
                                        <Badge variant="info" link="true" as="a">Менеджер</Badge>
                                        <Badge variant="info" link="true" as="a">Дизайнер</Badge>
                                        <Badge variant="info" link="true" as="a">Программист</Badge>
                                    </BadgeRow>
                                    <ButtonSearch>ИСКАТЬ</ButtonSearch>
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
                    <CountVacancy name="Вакансий">3000+</CountVacancy>
                    {/*LARGE LABEL END*/}

                    {/*FOOTER START*/}
                    <Footer> ©  2019 Jobot. Работа найдется для каждого</Footer>
                    {/*FOOTER END*/}
                </Box>
            </Box>
        )
    }
}

export default MainPage;
