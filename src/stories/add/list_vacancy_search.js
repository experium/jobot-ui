import React from 'react';
import { AccessTime, Brush, Computer, LocationOn } from 'styled-icons/material';
import { Heart } from 'styled-icons/fa-regular';
import { Search } from 'styled-icons/octicons';

import {
    Alert, Box, Col, Row, Typography,
    Badge, Container, ItemList, ListUl, Tag,
    Input, Button
} from '../ui';

import logo from '../../assets/img/logo.svg';
import imgItem1 from '../../assets/img/item.jpg';
import imgItem2 from '../../assets/img/item2.png';

const ListVacancySearch = () => ( <Box>
        <Typography variant="h1">Examples List Vacancy</Typography>
        <Alert variant="success">
            <Typography variant="h5" mt={20}>Assembled from components: <br/><b>Row, Col, Box, Typography, Container, Button, ItemList, Tag, Badge</b></Typography>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { Row, Col, Box, Typography, Container, ItemList, Input } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
import imgItem1 from `}<Box color="red" display="inline-block">'../../assets/img/item.jpg';</Box>{`
import imgItem2 from `}<Box color="red" display="inline-block">'../../assets/img/ite2.jpg';</Box>{`
import logo from `}<Box color="red" display="inline-block">'../../assets/img/logo.svg';</Box>{`
import { AccessTime, Brush, Computer, LocationOn } from `}<Box color="red" display="inline-block">'styled-icons/material';</Box>{`
import { Heart } from `}<Box color="red" display="inline-block">'styled-icons/fa-regular';</Box>{`
import { Search } from `}<Box color="red" display="inline-block">'styled-icons/octicons';</Box><br/>{`
<Container>
    <Row `}<b>m="0  0 20px" flexWrap="nowrap" alignItems="center" borderBottom="1px solid #eee"</b>{`>
        <Col `}<b>xs="auto" flex="none"</b>{`>
            <img `}<b>src={`{logo}`} width={`{80}`} </b>{`alt=""/>
        </Col>
        <Col `}<b>xs="auto" flex="auto"</b>{`>
            <Row `}<b>flexWrap="nowrap"  alignItems="center"</b>{`>
                <Col `}<b>xs="auto" flex="auto"</b>{`>
                    <Input `}<b>size="lg" control placeholder="Поиск"</b>{` />
                </Col>
                <Col `}<b>xs="auto" flex="none"</b>{`>
                    <Button `}<b>size="lg"</b>{`><Search /></Button>
                </Col>
            </Row>
        </Col>
    </Row>
    <Row>
        <Col `}<b>xs={`{12}`} sm={`{8}`} pr={`{15}`}</b>{`>
            <Typography `}<b>variant="h1" mb={`{30}`}</b>{`>Вакансии</Typography>
            <Row `}<b>gutter={`{16}`} mb={`{20}`}</b>{`>
                <Col `}<b>xs="auto" flex="auto"</b>{`>
                    <Input `}<b>size="lg" control</b>{` placeholder="Поиск" />
                </Col>
                <Col `}<b>xs="auto" flex="none"</b>{`>
                    <Button `}<b>size="lg"</b>{`><Search /></Button>
                </Col>
            </Row>
            <ItemList>
                <Col `}<b>xs="auto" display={`{{ xs: 'none', md: "block" }}`}</b>{`>
                    <img `}<b>width={`{100}`} src={`{imgItem1}`}</b>{` />
                </Col>
                <Col `}<b>pl={`{25}`}</b>{`>
                    <Box `}<b>mb={`{20}`}</b>{`>
                        <Typography `}<b>variant="h2</b>{`">Дизайнер <Badge>Полный день</Badge></Typography>
                    </Box>
                    <p>Внесение правок в готовые макеты полиграфии. Подготовка поздравительных открыток. Грамотно распределять объём работ между собой и вторым дизайнером.</p>
                    <hr/>
                    <Row `}<b>mt={`{10}`}</b>{`>
                        <Col `}<b>flex="auto"</b>{`>
                            <Tag `}<b>link as="a"</b>{`><Brush />Дизайн</Tag>
                            <Tag><LocationOn />Москва</Tag>
                            <Tag><AccessTime />12:00</Tag>
                        </Col>
                        <Col `}<b>xs='auto' flex="none"</b>{`>
                            <Button `}<b>mr={`{20}`} variant="secondary" round</b>{`><Heart /></Button>
                            <Button>Подробнее</Button>
                        </Col>
                    </Row>
                </Col>
            </ItemList>
            <ItemList>
                <Col `}<b>xs="auto" display={`{{ xs: 'none', md: "block" }}`}</b>{`>
                    <img `}<b>width={`{100}`} src={`{imgItem2}`}</b>{`/>
                </Col>
                <Col `}<b>pl={`{25}`}</b>{`>
                    <Box `}<b>mb={`{20}`}</b>{`>
                        <Typography `}<b>variant="h2"</b>{`>Программист <Badge `}<b>variant="secondary"</b>{`>Полный день</Badge></Typography>
                    </Box>
                    <p>Проектирование и разработка CRM системы на базе bpm'online. - Доработка и поддержка введенных в эксплуатацию модулей системы. Профильное техническое образование. - Знание ООП и теории БД. - Навыки программирования C# и JS.</p>
                    <hr/>
                    <Row `}<b>mt={`{10}`}</b>{`>
                        <Box `}<b>flex="auto"</b>{`>
                            <Tag l`}<b>ink as="a"</b>{`><Computer />Информационные технологии</Tag>
                            <Tag><LocationOn />Москва</Tag>
                            <Tag><AccessTime />12:00</Tag>
                        </Box>
                        <Box `}<b>xs='auto' flex="none"</b>{`>
                            <Button `}<b>mr={`{20}`} variant="secondary" round</b>{`><Heart /></Button>
                            <Button>Подробнее</Button>
                        </Box>
                    </Row>
                </Col>
            </ItemList>
        </Col>
        <Col `}<b>xs={`{12}`} sm={`{4}`} pl={`{15}`}</b>{`>
            <Box `}<b>mb={`{30}`} p={`{30}`} border="1px solid #eee;"</b>{`>
                <Typography `}<b>variant="h4" mb={`{20}`}</b>{`>Категории</Typography>
                <Box `}<b>textAlign="left"</b>{`>
                    <ListUl `}<b>styleNone borderItem</b>{`>
                        <li>
                            <a href="#">IT, телеком (720)</a>
                        </li>
                        <li>
                            <a href="#">Дизайн (320)</a>
                        </li>
                        <li>
                            <a href="#">Продажи (263)</a>
                        </li>
                        <li>
                            <a href="#">Бухгалтерия (97)</a>
                        </li>
                        <li>
                            <a href="#">Строительство (57)</a>
                        </li>
                        <li>
                            <a href="#">Еще (20)</a>
                        </li>
                    </ListUl>
                </Box>
            </Box>
            <Box `}<b>mb={`{30}`} p={`{30}`} border="1px solid #eee;"</b>{`>
                <Typography `}<b>variant="h4" mb={`{20}`}</b>{`>График работы</Typography>
                <Box `}<b>textAlign="left"</b>{`>
                    <ListUl `}<b>styleNone borderItem</b>{`>
                        <li>
                            <a href="#">Полный день (120)</a>
                        </li>
                        <li>
                            <a href="#">Сменный график (1363)</a>
                        </li>
                        <li>
                            <a href="#">Гибкий график (97)</a>
                        </li>
                        <li>
                            <a href="#">Удаленная работа (75)</a>
                        </li>
                        <li>
                            <a href="#">Выхтовый метод (20)</a>
                        </li>
                    </ListUl>
                </Box>
            </Box>
        </Col>
    </Row>
</Container>
`}</pre>
        </code>
        <Container>
            <Row m="0  0 20px" flexWrap="nowrap" alignItems="center" borderBottom="1px solid #eee">
                <Col xs="auto" flex="none">
                    <img src={logo} width={80} alt=""/>
                </Col>
                <Col xs="auto" flex="auto">
                    <Row flexWrap="nowrap"  alignItems="center">
                        <Col xs="auto" flex="auto">
                            <Input size="lg" control placeholder="Поиск" />
                        </Col>
                        <Col xs="auto" flex="none">
                            <Button size="lg"><Search /></Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={8} pr={15}>
                    <Typography variant="h1" mb={30}>Вакансии</Typography>
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
                                    <Tag link as="a"><Brush />Дизайн</Tag>
                                    <Tag><LocationOn />Москва</Tag>
                                    <Tag><AccessTime />12:00</Tag>
                                </Col>
                                <Col xs='auto' flex="none">
                                    <Button mr={20} variant="secondary" round><Heart /></Button>
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
                                    <Tag link as="a"><Computer />Информационные технологии</Tag>
                                    <Tag><LocationOn />Москва</Tag>
                                    <Tag><AccessTime />12:00</Tag>
                                </Box>
                                <Box xs='auto' flex="none">
                                    <Button mr={20} variant="secondary" round><Heart /></Button>
                                    <Button>Подробнее</Button>
                                </Box>
                            </Row>
                        </Col>
                    </ItemList>
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
                                    <Tag link as="a"><Brush />Дизайн</Tag>
                                    <Tag><LocationOn />Москва</Tag>
                                    <Tag><AccessTime />12:00</Tag>
                                </Col>
                                <Col xs='auto' flex="none">
                                    <Button mr={20} variant="secondary" round><Heart /></Button>
                                    <Button>Подробнее</Button>
                                </Col>
                            </Row>
                        </Col>
                    </ItemList>
                </Col>
                <Col xs={12} sm={4} pl={15}>
                    <Box pl={15} mb={30} p={30} border="1px solid #eee;">
                        <Typography variant="h4" mb={20}>Категории</Typography>
                        <Box textAlign="left">
                            <ListUl styleNone borderItem>
                                <li>
                                    <a href="#">IT, телеком (720)</a>
                                </li>
                                <li>
                                    <a href="#">Дизайн (320)</a>
                                </li>
                                <li>
                                    <a href="#">Продажи (263)</a>
                                </li>
                                <li>
                                    <a href="#">Бухгалтерия (97)</a>
                                </li>
                                <li>
                                    <a href="#">Строительство (57)</a>
                                </li>
                                <li>
                                    <a href="#">Еще (20)</a>
                                </li>
                            </ListUl>
                        </Box>
                    </Box>
                    <Box pl={15} mb={30} p={30} border="1px solid #eee;">
                        <Typography variant="h4" mb={20}>График работы</Typography>
                        <Box textAlign="left">
                            <ListUl styleNone borderItem>
                                <li>
                                    <a href="#">Полный день (120)</a>
                                </li>
                                <li>
                                    <a href="#">Сменный график (1363)</a>
                                </li>
                                <li>
                                    <a href="#">Гибкий график (97)</a>
                                </li>
                                <li>
                                    <a href="#">Удаленная работа (75)</a>
                                </li>
                                <li>
                                    <a href="#">Выхтовый метод (20)</a>
                                </li>
                            </ListUl>
                        </Box>
                    </Box>
                </Col>
            </Row>
        </Container>
    </Box>
);

export default ListVacancySearch;
