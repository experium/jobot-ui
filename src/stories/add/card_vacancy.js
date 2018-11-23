import React from 'react';
import { Alert, Box, Col, Row, Typography } from "@smooth-ui/core-sc";
import { Card, CardBtn, Container, Tag} from "../../components";
import Button from "../../components/Button";
import { AccessTime, ArrowForward, Comment, DateRange, LocationOn } from "styled-icons/material";
import imgItem3 from "../../assets/img/img3.jpg";
import imgItem4 from "../../assets/img/img4.jpg";
import imgItem5 from "../../assets/img/img5.jpg";

const CardVacancy = () => ( <Box>
        <Typography variant="h1">Examples Card Vacancy</Typography>
        <Alert variant="success">
            <Typography variant="h5" mt={20}>Assembled from components: <br/><b>Row, Col, Box, Typography, Container, Button, Card, CardBtn, Tag</b></Typography>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <code>
<pre>{`import { Row, Col, Box, Typography, Container, Card, CardBtn } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
import imgItem3 from `}<Box color="red" display="inline-block">'../../assets/img/img3.jpg';</Box>{`
import imgItem4 from `}<Box color="red" display="inline-block">'../../assets/img/img4.jpg';</Box>{`
import imgItem5 from `}<Box color="red" display="inline-block">'../../assets/img/img5.jpg';</Box>{`
import { AccessTime, ArrowForward, Comment, DateRange, LocationOn } from `}<Box color="red" display="inline-block">'styled-icons/material';</Box><br/>{`
<Container>
    <Typography `}<b>variant="h1" mb={`{30}`}</b>{`>Избранные вакансии</Typography>
    <Row `}<b>mx={`{-15}`}</b>{`>
        <Col `}<b>xs={`{12}`} md={`{4}`} px={`{15}`}</b>{`>
            <Card `}<b>p={`{10}`}</b>{`>
                <img `}<b>width='100%' src={`{imgItem3}`}</b>{` />
                <Box `}<b>m={10}</b>{`>
                    <Typography `}<b>variant="h3"</b>{`>Название вакансии</Typography>
                    <Box `}<b>mt={`{10}`}</b>{`>
                        <Tag `}<b>link="true" as="a"</b>{`><LocationOn />Москва</Tag>
                    </Box>
                </Box>
                <CardBtn>
                    <Button `}<b>size="lg" round="true"</b>{`><ArrowForward /></Button>
                </CardBtn>
                <Box `}<b>m={`{10}`}</b>{`>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><AccessTime />12:00</Tag>
                </Box>
            </Card>
        </Col>
        <Col `}<b>xs={`{12}`} md={`{4}`} px={`{15}`}</b>{`>
            <Card `}<b>p={`{10}`}</b>{`>
                <img `}<b>width='100%' src={`{imgItem4}`}</b>{` />
                <Box `}<b>m={10}</b>{`>
                    <Typography `}<b>variant="h3"</b>{`>Название вакансии 2</Typography>
                    <Box `}<b>mt={`{10}`}</b>{`>
                        <Tag `}<b>link="true" as="a"</b>{`><LocationOn />Москва</Tag>
                    </Box>
                </Box>
                <CardBtn>
                    <Button `}<b>size="lg" round="true"</b>{`><ArrowForward /></Button>
                </CardBtn>
                <Box `}<b>m={`{10}`}</b>{`>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><AccessTime />12:00</Tag>
                </Box>
            </Card>
        </Col>
        <Col `}<b>xs={`{12}`} md={`{4}`} px={`{15}`}</b>{`>
            <Card `}<b>p={`{10}`}</b>{`>
                <img `}<b>width='100%' src={`{imgItem5}`}</b>{` />
                <Box `}<b>m={10}</b>{`>
                    <Typography `}<b>variant="h3"</b>{`>Название вакансии 3</Typography>
                    <Box `}<b>mt={`{10}`}</b>{`>
                        <Tag `}<b>link="true" as="a"</b>{`><LocationOn />Москва</Tag>
                    </Box>
                </Box>
                <CardBtn>
                    <Button `}<b>size="lg" round="true"</b>{`><ArrowForward /></Button>
                </CardBtn>
                <Box `}<b>m={`{10}`}</b>{`>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><AccessTime />12:00</Tag>
                </Box>
            </Card>
        </Col>
    </Row>
    <Typography `}<b>variant="h1" my={`{30}`}</b>{`>Новости</Typography>
    <Row `}<b>mx={`{-15}`}</b>{`>
        <Col `}<b>xs={`{12}`} md={`{4}`} px={`{15}`}</b>{`>
            <Card>
                <img `}<b>width='100%' src={`{imgItem3}`}</b>{` />
                <Box `}<b>m={`{15}`}</b>{`>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><Comment />3</Tag>
                </Box>
                <Box `}<b>m={`{15}`}</b>{`>
                    <Typography `}<b>variant="h3"</b>{`>Заголовок</Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                    <Button>Подробнее</Button>
                </Box>
            </Card>
        </Col>
        <Col `}<b>xs={`{12}`} md={`{4}`} px={`{15}`}</b>{`>
            <Card>
                <img `}<b>width='100%' src={`{imgItem4}`}</b>{` />
                <Box `}<b>m={`{15}`}</b>{`>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><Comment />3</Tag>
                </Box>
                <Box `}<b>m={`{15}`}</b>{`>
                    <Typography `}<b>variant="h3"</b>{`>Заголовок</Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                    <Button>Подробнее</Button>
                </Box>
            </Card>
        </Col>
        <Col `}<b>xs={`{12}`} md={`{4}`} px={`{15}`}</b>{`>
            <Card>
                <img `}<b>width='100%' src={`{imgItem5}`}</b>{` />
                <Box `}<b>m={`{15}`}</b>{`>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><Comment />3</Tag>
                </Box>
                <Box `}<b>m={`{15}`}</b>{`>
                    <Typography `}<b>variant="h3"</b>{`>Заголовок</Typography>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                    <Button>Подробнее</Button>
                </Box>
            </Card>
        </Col>
    </Row>
</Container>
`}</pre>
        </code>
        <Container>
            <Typography variant="h1" mb={30}>Избранные вакансии</Typography>
            <Row mx={-15}>
                <Col xs={12} md={4} px={15}>
                    <Card p={10}>
                        <img width='100%' src={imgItem3} alt=""/>
                        <Box m={10}>
                            <Typography variant="h3">Название вакансии</Typography>
                            <Box mt={10}>
                                <Tag link="true" as="a"><LocationOn />Москва</Tag>
                            </Box>
                        </Box>
                        <CardBtn>
                            <Button size="lg" round="true"><ArrowForward /></Button>
                        </CardBtn>
                        <Box m={10}>
                            <Tag><DateRange />12.11.2018</Tag>
                            <Tag><AccessTime />12:00</Tag>
                        </Box>
                    </Card>
                </Col>
                <Col xs={12} md={4} px={15}>
                    <Card p={10}>
                        <img width='100%' src={imgItem4} alt=""/>
                        <Box m={10}>
                            <Typography variant="h3">Название вакансии 2</Typography>
                            <Box mt={10}>
                                <Tag link="true" as="a"><LocationOn />Москва</Tag>
                            </Box>
                        </Box>
                        <CardBtn>
                            <Button size="lg" round="true"><ArrowForward /></Button>
                        </CardBtn>
                        <Box m={10}>
                            <Tag><DateRange />12.11.2018</Tag>
                            <Tag><AccessTime />12:00</Tag>
                        </Box>
                    </Card>
                </Col>
                <Col xs={12} md={4} px={15}>
                    <Card p={10}>
                        <img width='100%' src={imgItem5} alt=""/>
                        <Box m={10}>
                            <Typography variant="h3">Название вакансии 3</Typography>
                            <Box mt={10}>
                                <Tag link="true" as="a"><LocationOn />Москва</Tag>
                            </Box>
                        </Box>
                        <CardBtn>
                            <Button size="lg" round="true"><ArrowForward /></Button>
                        </CardBtn>
                        <Box m={10}>
                            <Tag><DateRange />12.11.2018</Tag>
                            <Tag><AccessTime />12:00</Tag>
                        </Box>
                    </Card>
                </Col>
            </Row>
            <Typography variant="h1" my={30}>Новости</Typography>
            <Row mx={-15}>
                <Col xs={12} md={4} px={15}>
                    <Card>
                        <img width='100%' src={imgItem3} alt=""/>
                        <Box m={15}>
                            <Tag><DateRange />12.11.2018</Tag>
                            <Tag><Comment />3</Tag>
                        </Box>
                        <Box m={15}>
                            <Typography variant="h3">Заголовок</Typography>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                            <Button>Подробнее</Button>
                        </Box>
                    </Card>
                </Col>
                <Col xs={12} md={4} px={15}>
                    <Card>
                        <img width='100%' src={imgItem4} alt=""/>
                        <Box m={15}>
                            <Tag><DateRange />12.11.2018</Tag>
                            <Tag><Comment />3</Tag>
                        </Box>
                        <Box m={15}>
                            <Typography variant="h3">Заголовок</Typography>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                            <Button>Подробнее</Button>
                        </Box>
                    </Card>
                </Col>
                <Col xs={12} md={4} px={15}>
                    <Card>
                        <img width='100%' src={imgItem5} alt=""/>
                        <Box m={15}>
                            <Tag><DateRange />12.11.2018</Tag>
                            <Tag><Comment />3</Tag>
                        </Box>
                        <Box m={15}>
                            <Typography variant="h3">Заголовок</Typography>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.</p>
                            <Button>Подробнее</Button>
                        </Box>
                    </Card>
                </Col>
            </Row>
        </Container>
    </Box>
);

export default CardVacancy;
