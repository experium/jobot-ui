import React from 'react';
import { Alert, Box, Col, Row, Typography } from "@smooth-ui/core-sc";
import { Badge, Container, ItemList, Tag } from "../../components";
import Button from "../../components/Button";
import imgItem1 from "../../assets/img/item.jpg";
import { AccessTime, Brush, Computer, LocationOn } from "styled-icons/material";
import { Heart } from "styled-icons/fa-regular";
import imgItem2 from "../../assets/img/item2.png";

const ListVacancy = () => ( <Box>
        <Typography variant="h1">Examples List Vacancy</Typography>
        <Alert variant="success">
            <Typography variant="h5" mt={20}>Assembled from components: <br/><b>Row, Col, Box, Typography, Container, Button, ItemList, Tag, Badge</b></Typography>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { Row, Col, Box, Typography } from `}<Box color="red" display="inline-block">'@smooth-ui/core-sc';</Box>{`
import { Container } from `}<Box color="red" display="inline-block">'../components/Layout';</Box>{`
import { ItemList } from `}<Box color="red" display="inline-block">'../components/List';</Box>{`
import imgItem1 from `}<Box color="red" display="inline-block">'../../assets/img/item.jpg';</Box>{`
import imgItem2 from `}<Box color="red" display="inline-block">'../../assets/img/ite2.jpg';</Box>{`
import { AccessTime, Brush, Computer, LocationOn } from `}<Box color="red" display="inline-block">'styled-icons/material';</Box>{`
import { Heart } from `}<Box color="red" display="inline-block">'styled-icons/fa-regular';</Box><br/>{`
<Container>
    <Typography `}<b>variant="h1" mb={`{30}`}</b>{`>Вакансии дня</Typography>
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
                    <Tag `}<b>link="true" as="a"</b>{`><Brush />Дизайн</Tag>
                    <Tag><LocationOn />Москва</Tag>
                    <Tag><AccessTime />12:00</Tag>
                </Col>
                <Col `}<b>xs='auto' flex="none"</b>{`>
                    <Button `}<b>mr={`{20}`} variant="secondary" round="true"</b>{`><Heart /></Button>
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
                    <Tag l`}<b>ink="true" as="a"</b>{`><Computer />Информационные технологии</Tag>
                    <Tag><LocationOn />Москва</Tag>
                    <Tag><AccessTime />12:00</Tag>
                </Box>
                <Box `}<b>xs='auto' flex="none"</b>{`>
                    <Button `}<b>mr={`{20}`} variant="secondary" round="true"</b>{`><Heart /></Button>
                    <Button>Подробнее</Button>
                </Box>
            </Row>
        </Col>
    </ItemList>
</Container>
`}</pre>
        </code>
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
    </Box>
);

export default ListVacancy;
