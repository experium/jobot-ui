import React from 'react';
import { Search } from 'styled-icons/octicons';
import { ChevronLeft, ChevronRight } from 'styled-icons/feather';

import {
    Box,
    Col,
    Row,
    Container,
    ItemList,
    ListUl,
    Input,
    Button,
    BoxImageSearch,
    TitleBox,
    BoxList,
    BoxLogo,
    TitleVacancy,
    SumVacancy,
    Select,
    Pagination
} from '../ui';

import logo from '../../assets/img/logo-white.svg';
import bgFooter from '../../assets/img/bg-search.svg';
import imgItem1 from "../../assets/img/company/4.png";
import imgItem2 from "../../assets/img/company/2.png";
import imgItem3 from "../../assets/img/company/6.png";
import {Grid} from "@smooth-ui/core-sc";

const ListVacancySearch = () => ( <Box>
        <Box backgroundColor='#edeff7'>
            {/*HEADER START*/}
            <BoxImageSearch image={bgFooter}>
                <Box background='linear-gradient(45deg, rgba(150,81,254,1) 0%, rgba(150,81,254,1) 59%, rgba(107,114,255,1) 100%)' py={15}>
                    <Container>
                        <Row flexWrap={{ xs: 'wrap', md: 'nowrap'}} alignItems="center">
                            <Col xs='block' md='auto' flex="none" pr={20} textAlign='center' mb={{ xs: 20, md: 0}}>
                                <img src={logo} width={220} alt=""/>
                            </Col>
                            <Col xs='block' md='auto' flex={{ xs: 'none', md: 'auto' }}>
                                <Row flexWrap="nowrap"  alignItems="center">
                                    <Col xs="auto" flex="auto">
                                        <Input size="lg" borderRadius='.5rem' control placeholder="Поиск" />
                                    </Col>
                                    <Col xs="auto" flex="none">
                                        <Button size="lg" variant="light"><Search /></Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Box>
            </BoxImageSearch>
            {/*HEADER END*/}

            {/*LIST VACANCY & FILTER START*/}
            <Container>
                <Grid fluid>
                    <Row>
                        <Col xs={12} md={12} lg={12} order={{ xs: 2, md: 1}}>
                            <Box textAlign={{ xs: 'center', md: 'left'}}>
                                <Row>
                                    <Col md={7}>
                                        <TitleBox mt={{ xs: 30, md: 0 }} fontSize={{ xs: '1.5rem', md: '2.2rem' }}>Найдено 7 вакансий</TitleBox>
                                    </Col>
                                    <Col xs='block' md={5} flex={{ xs: 'none', md: 'auto' }} mb={{ xs: 20, md: 0}} textAlign={{ xs: 'center', md: 'right'}}>
                                        <Select filter mr={15}>
                                            <option>По дате</option>
                                            <option>Control</option>
                                            <option>Other</option>
                                        </Select>
                                        <Select filter>
                                            <option>За месяц</option>
                                            <option>Control</option>
                                            <option>Other</option>
                                        </Select>
                                    </Col>
                                </Row>
                            </Box>
                        </Col>
                        <Col xs={12} md={4} lg={3} mb={{ xs: 20, md: 0}} order={{ xs: 1, md: 2}}>
                            <BoxList pb={15}>
                                <Box mb={15} pt={15}>
                                    <TitleVacancy mb={10}>Регион</TitleVacancy>
                                    <Box>
                                        <Select control filter>
                                            <option>Москва</option>
                                            <option>Control</option>
                                            <option>Other</option>
                                        </Select>
                                    </Box>
                                </Box>
                                <Box mb={15} pt={15}>
                                    <TitleVacancy mb={10}>Зарплата</TitleVacancy>
                                    <Row>
                                        <Col xs={6}>
                                            <Input size='md' borderColor='#5E57A7' borderRadius='.3rem' control placeholder="от" />
                                        </Col>
                                        <Col xs={6}>
                                            <Input size='md' borderColor='#5E57A7' borderRadius='.3rem' control placeholder="до" />
                                        </Col>
                                    </Row>
                                </Box>
                                <Box mb={15} pt={15}>
                                    <TitleVacancy mb={10}>Профобласть</TitleVacancy>
                                    <Box textAlign="left">
                                        <ListUl styleNone filter>
                                            <li>
                                                <a href="#">IT, телеком <span>720</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Дизайн <span>246</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Продажи <span>197</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Бухгалтерия <span>97</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Строительство <span>46</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Еще <span>23</span></a>
                                            </li>
                                        </ListUl>
                                    </Box>
                                </Box>
                                <Box pb={15}>
                                    <TitleVacancy mb={10}>График работы</TitleVacancy>
                                    <Box textAlign="left">
                                        <ListUl styleNone filter>
                                            <li>
                                                <a href="#">Полный день <span>120</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Сменный график <span>1246</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Гибкий график <span>24</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Удаленная работа <span>46</span></a>
                                            </li>
                                            <li>
                                                <a href="#">Выхтовый метод <span>5</span></a>
                                            </li>
                                        </ListUl>
                                    </Box>
                                </Box>
                                <Box pb={20}>
                                    <Button variant='info' size="lg">Применить</Button>
                                </Box>
                            </BoxList>
                        </Col>
                        <Col xs={12} md={8} lg={9}  order={{ xs: 3, md: 3}}>
                            <BoxList>
                                <ItemList>
                                    <Col xs="auto">
                                        <BoxLogo>
                                            <img src={imgItem1} alt=""/>
                                        </BoxLogo>
                                    </Col>
                                    <Col alignSelf='center'>
                                        <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                            <Col>
                                                <TitleVacancy>Технолог гидрометаллургического производства</TitleVacancy>
                                            </Col>
                                            <Col xs="auto">
                                                <SumVacancy>от 80 000 до 120 000 руб.</SumVacancy>
                                            </Col>
                                        </Row>
                                        <Box><a>АНКОР</a></Box>
                                    </Col>
                                </ItemList>
                                <ItemList>
                                    <Col xs="auto">
                                        <BoxLogo>
                                            <img src={imgItem2} alt=""/>
                                        </BoxLogo>
                                    </Col>
                                    <Col alignSelf='center'>
                                        <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                            <Col>
                                                <TitleVacancy>Дизайнер</TitleVacancy>
                                            </Col>
                                            <Col xs="auto">
                                                <SumVacancy>по договоренности</SumVacancy>
                                            </Col>
                                        </Row>
                                        <Box><a>Связной</a></Box>
                                    </Col>
                                </ItemList>
                                <ItemList>
                                    <Col xs="auto">
                                        <BoxLogo>
                                            <img src={imgItem3} alt=""/>
                                        </BoxLogo>
                                    </Col>
                                    <Col alignSelf='center'>
                                        <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                            <Col>
                                                <TitleVacancy>Водитель-курьер с автомобилем</TitleVacancy>
                                            </Col>
                                            <Col xs="auto">
                                                <SumVacancy>110 000 руб.</SumVacancy>
                                            </Col>
                                        </Row>
                                        <Box><a>OBI</a></Box>
                                    </Col>
                                </ItemList>
                                <ItemList>
                                    <Col xs="auto">
                                        <BoxLogo>
                                            <img src={imgItem1} alt=""/>
                                        </BoxLogo>
                                    </Col>
                                    <Col alignSelf='center'>
                                        <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                            <Col>
                                                <TitleVacancy>Технолог гидрометаллургического производства</TitleVacancy>
                                            </Col>
                                            <Col xs="auto">
                                                <SumVacancy>от 80 000 до 120 000 руб.</SumVacancy>
                                            </Col>
                                        </Row>
                                        <Box><a>АНКОР</a></Box>
                                    </Col>
                                </ItemList>
                                <ItemList>
                                    <Col xs="auto">
                                        <BoxLogo>
                                            <img src={imgItem2} alt=""/>
                                        </BoxLogo>
                                    </Col>
                                    <Col alignSelf='center'>
                                        <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                            <Col>
                                                <TitleVacancy>Дизайнер</TitleVacancy>
                                            </Col>
                                            <Col xs="auto">
                                                <SumVacancy>по договоренности</SumVacancy>
                                            </Col>
                                        </Row>
                                        <Box><a>Связной</a></Box>
                                    </Col>
                                </ItemList>
                                <ItemList>
                                    <Col xs="auto">
                                        <BoxLogo>
                                            <img src={imgItem3} alt=""/>
                                        </BoxLogo>
                                    </Col>
                                    <Col alignSelf='center'>
                                        <Row flexDirection={{ xs: 'column', md: 'row' }}>
                                            <Col>
                                                <TitleVacancy>Водитель-курьер с автомобилем</TitleVacancy>
                                            </Col>
                                            <Col xs="auto">
                                                <SumVacancy>110 000 руб.</SumVacancy>
                                            </Col>
                                        </Row>
                                        <Box><a>OBI</a></Box>
                                    </Col>
                                </ItemList>
                            </BoxList>
                            <Pagination>
                                <ul>
                                    <li><ChevronLeft size={34} color='#5E57A7' /></li>
                                    <li className='active'>
                                        <a href="#">1</a>
                                    </li>
                                    <li>
                                        <a href="#">2</a>
                                    </li>
                                    <li><ChevronRight size={34} color='#5E57A7' /></li>
                                </ul>
                            </Pagination>
                        </Col>
                    </Row>
                </Grid>
            </Container>
            {/*LIST VACANCY & FILTER END*/}

            {/*FOOTER START*/}
            <Box backgroundColor='#fff' mt={80}>
                <Container py={20}>
                    <Box color='#5E57A7'> ©  2019 Jobot. Работа найдется для каждого</Box>
                </Container>
            </Box>
            {/*FOOTER END*/}
        </Box>
    </Box>
);

export default ListVacancySearch;
