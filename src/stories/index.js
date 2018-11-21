import React from 'react';
import '../index.css';

import { storiesOf } from '@storybook/react';

/*Components*/
import { styled, Grid, Row, Col, Typography, Box, Alert } from '@smooth-ui/core-sc'
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import { FormGroup, FormGroupIcon } from '../components/Form';
import { Badge } from '../components/Badge';
import { Tag } from '../components/Tag';
import { Container, BoxImage } from '../components/Layout';
import { Header } from '../components/Header';
import { ItemList } from '../components/List';
import { Card, CardBtn } from '../components/Card';
import { ListUl, LinkWhite } from '../components/Typography';

/*Icon*/
import { LocationOn, Brush, Work, AccessTime, Computer, Comment, ArrowForward, DateRange } from 'styled-icons/material';
import { Search, LightBulb } from 'styled-icons/octicons';
import { Heart } from 'styled-icons/fa-regular/Heart';
import { Vk, Facebook, Twitter, LinkedinIn, Github } from 'styled-icons/fa-brands';
import { Globe } from 'styled-icons/fa-solid/Globe';

/*Image*/
import imgItem1 from '../assets/img/item.jpg';
import imgItem2 from '../assets/img/item2.png';
import imgItem3 from '../assets/img/img3.jpg';
import imgItem4 from '../assets/img/img4.jpg';
import imgItem5 from '../assets/img/img5.jpg';
import imgBg from '../assets/img/bg2.jpg';

const Red = styled.span`
    color: red;
`;

storiesOf('Library', module).add('smooth-ui', () => <Box my={30} textAlign="center">
    <Typography variant="h1">smooth-ui</Typography>
    <img width={300} src="https://raw.githubusercontent.com/smooth-code/smooth-ui/master/resources/smooth-ui-logo.png" alt=""/>
    <p>Smooth UI is a style system / UI library for React. It works with Styled Components 💅 or Emotion 👩‍🎤.</p>
    <Button as="a" href="https://smooth-ui.smooth-code.com" size="lg" mr={20}><Globe /> Site</Button>
    <Button as="a" href="https://github.com/smooth-code/smooth-ui" variant="dark" size="lg"><Github /> Github</Button>
</Box>)
.add('styled-icons', () => <Box my={30} textAlign="center">
    <Typography variant="h1">Styled Icons</Typography>
    <Box my={50}>
        <LightBulb size={100} />
    </Box>
    <p>Font Awesome, Feather, Material Design, and Octicons icon packs as Styled Components</p>
    <Button as="a" href="https://styled-icons.js.org/" size="lg" mr={20}><Globe /> Site</Button>
    <Button as="a" href="https://github.com/jacobwgillespie/styled-icons" variant="dark" size="lg"><Github /> Github</Button>
</Box>);

storiesOf('Examples', module)
.add('Header', () => <Header>
    <Container>
        <Typography variant="h1" color="#fff" fontSize={50}>Работа найдется для каждого</Typography>
        <Typography variant="h2" color="#ff4f57" fontSize={30}>Здесь находят работу и подбирают персонал</Typography>
        <Box backgroundColor="rgba(255, 255, 255, 0.1)" p={10} my={30}>
            <Grid gutter={0}>
                <Row>
                    <Col xs={4}>
                        <FormGroup><FormGroupIcon><Work /></FormGroupIcon><Input size="lg" icon="true" control placeholder="Название вакансии / Компания" /></FormGroup>
                    </Col>
                    <Col xs={4}>
                        <FormGroup>
                            <FormGroupIcon><LocationOn /></FormGroupIcon>
                            <Input size="lg" icon="true" control placeholder="Название вакансии / Компания" />
                        </FormGroup>
                    </Col>
                    <Col xs={4}>
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
                                <Button size="lg"><Search size="22" title="Search" /></Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </Box>
        <Box>
            <Typography color="#fff" as="b">Популярные запросы:</Typography>
            <Badge variant='light' link="true" as="a">Менеджер</Badge>
            <Badge variant='light' link="true" as="a">Дизайнер</Badge>
            <Badge variant='light' link="true" as="a">Программист</Badge>
        </Box>
    </Container>
</Header>)
.add('List Vacancy', () => <Container>
    <Typography variant="h1" mb={30}>Вакансии дня</Typography>
    <ItemList>
        <Col xs="auto">
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
                    <Button mr={20} variant="secondary" circle="true"><Heart /></Button>
                    <Button>Подробнее</Button>
                </Col>
            </Row>
        </Col>
    </ItemList>
    <ItemList>
        <Col xs="auto">
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
                    <Button mr={20} variant="secondary" circle="true"><Heart /></Button>
                    <Button>Подробнее</Button>
                </Box>
            </Row>
        </Col>
    </ItemList>
</Container>)

.add('Card', () => <Container>
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
                    <Button size="lg" circle="true"><ArrowForward /></Button>
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
                    <Button size="lg" circle="true"><ArrowForward /></Button>
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
                    <Button size="lg" circle="true"><ArrowForward /></Button>
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
</Container>)

.add('Box image bg', () => <BoxImage image={imgBg}>
    <Container py={60} textAlign="center">
            <Typography variant="h1" color='#fff'>Ищу работу</Typography>
            <br/>
            <Typography variant="h3" color='#9FA7BA' fontWeight='400'>Присоединяйтесь к тысячам работодателей и заработайте!</Typography>
            <br/>
            <Button>Начать</Button>
    </Container>
</BoxImage>)

.add('Box Color bg', () => <Box backgroundColor='#FF4F57'>
    <Container py={60} textAlign="center">
        <Typography variant="h1" color='#fff'>Ищу работу</Typography>
        <br/>
        <Typography variant="h3" color='#fff' fontWeight='100'>Присоединяйтесь к тысячам работодателей и заработайте!</Typography>
        <br/>
        <Button variant="light">Начать</Button>
    </Container>
</Box>)

.add('Footer', () => <Box backgroundColor='#202020'>
    <Container py={60}>
        <Row mx={-15}>
            <Col xs={12} md={3}>
                <Typography variant="h3" color='#FF4F57' mb={30}>Заголовок</Typography>
                <Box color='#fff'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.</Box>
            </Col>
            <Col xs={12} md={3}>
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
            <Col xs={12} md={3}>
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
            <Col  xs={12} md={3}>
                <Typography variant="h3" color='#fff' mb={30}>Подписаться</Typography>
                <Row>
                    <Col xs="auto" mr={10}>
                        <Button circle="true" icon="true"><Vk /></Button>
                    </Col>
                    <Col xs="auto" mr={10}>
                        <Button circle="true" icon="true"><Facebook /></Button>
                    </Col>
                    <Col xs="auto" mr={10}>
                        <Button circle="true" icon="true"><Twitter /></Button>
                    </Col>
                    <Col xs="auto" mr={10}>
                        <Button circle="true" icon="true"><LinkedinIn /></Button>
                    </Col>
                </Row>
                <Box mt={10}>
                    <Box color='#fff'>Join our mailing list to stay up to date and get notices about our new releases!</Box>
                </Box>
            </Col>
        </Row>
    </Container>
</Box>)

.add('Terminal list vacancy', () => <Box textAlign="center">
    <Typography variant="h1" fontSize="4rem" my={30}>Вакансии</Typography>
    <Button borderRadius="1rem" p={30} display="block" my={30} mx={50} backgroundColor='#FF4F57' as="a">
        <Typography variant="h1" color='#fff' size={50}>Продавец консультант</Typography>
    </Button>
    <Button borderRadius="1rem" p={30} display="block" my={30} mx={50} backgroundColor='#FF4F57' as="a">
        <Typography variant="h1" color='#fff' size={50}>Оператор call-центра</Typography>
    </Button>
    <Button borderRadius="1rem" p={30} display="block" my={30} mx={50} backgroundColor='#FF4F57' as="a">
        <Typography variant="h1" color='#fff' size={50}>Водитель</Typography>
    </Button>
</Box>)

.add('Terminal card vacancy', () => <Box textAlign="center">
    <Typography variant="h1" fontSize="4rem" my={30}>Вакансии</Typography>
    <Row alignItems="stretch">
        <Col xs={4}>
            <Button display="flex" alignItems="center" justifyContent="center" borderRadius="1rem" p={20} height="100%" my={30} mx={20} backgroundColor='#FF4F57' as="a">
                <Typography variant="h1" color='#fff' size={50}>Продавец консультант</Typography>
            </Button>
        </Col>
        <Col xs={4}>
            <Button display="flex" alignItems="center" justifyContent="center" borderRadius="1rem" p={20} height="100%" my={30} mx={20} backgroundColor='#FF4F57' as="a">
                <Typography variant="h1" color='#fff' size={50}>Оператор call-центра</Typography>
            </Button>
        </Col>
        <Col xs={4}>
            <Button display="flex" alignItems="center" justifyContent="center" borderRadius="1rem" p={20} height="100%" my={30} mx={20} backgroundColor='#FF4F57' as="a">
                <Typography variant="h1" color='#fff' size={50}>Водитель</Typography>
            </Button>
        </Col>
    </Row>
</Box>);

storiesOf('Components', module)
.add('Button', () => <Box p={10}>
    <Grid fluid gutter={5}>
        <Typography variant="h1">Buttons</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a></Alert>
<code>
<pre>{`import Button from `}<Red>'../components/Badge';</Red> <br/>{`
<Button>Default (primary)</Button>
`}</pre>
</code>
    </Grid>
        <Typography variant="h3" mb={20} mt={30}>Variants</Typography>
        <Button mr={10}>Default (primary)</Button>
        <Button mr={10} variant="secondary">Secondary</Button>
        <Button mr={10} variant="success">Success</Button>
        <Button mr={10} variant="danger">Danger</Button>
        <Button mr={10} variant="warning">Warning</Button>
        <Button mr={10} variant="info">Info</Button>
        <Button mr={10} variant="light">Light</Button>
        <Button mr={10} variant="dark">Dark</Button>
        <code>
<pre>{`<Button>Default (primary)</Button>
<Button `}<b>mr={10} variant="primary"</b>{`>Primary</Button>
<Button `}<b>mr={10} variant="secondary"</b>{`>Secondary</Button>
<Button `}<b>mr={10} variant="success"</b>{`>Success</Button>
<Button `}<b>mr={10} variant="danger"</b>{`>Danger</Button>
<Button `}<b>mr={10} variant="warning"</b>{`>Warning</Button>
<Button `}<b>mr={10} variant="info"</b>{`>Info</Button>
<Button `}<b>mr={10} variant="light"</b>{`>Light</Button>
<Button `}<b>mr={10} variant="dark"</b>{`>Dark</Button>
`}</pre>
</code>

        <Typography variant="h3" mb={20} mt={30}>Sizes</Typography>
        <Button mr={10} size="sm">Small</Button>
        <Button mr={10} size="md">Medium</Button>
        <Button mr={10} size="lg">Large</Button>
        <code>
<pre>{`<Button `}<b>size="sm"</b>{`>Small</Button>
<Button `}<b>size="md"</b>{`>Medium</Button>
<Button `}<b>size="lg"</b>{`>Large</Button>
`}</pre>
        </code>

        <Typography variant="h3" my={20}>Disabled</Typography>
        <Button variant="primary" disabled>
            Disabled
        </Button>
        <code>
<pre>{`<Button `}<b>variant="primary" disabled</b>{`>Disabled</Button>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Circle</Typography>
        <Button mr={10} circle="true" size='sm'><Heart /></Button>
        <Button mr={10} circle="true"><Heart /></Button>
        <Button mr={10} circle="true" size='lg'><Heart /></Button>
        <code>
<pre>{`import { Heart } from `}<Red>'styled-icons/fa-regular/Heart';</Red> <br/>{`
<Button `}<b>mr={10} circle size='sm'</b>{`>
    <Heart />
</Button>
<Button `}<b>mr={10} circle</b>{`>
    <Heart />
</Button>
<Button `}<b>mr={10} circle size='lg'</b>{`>
    <Heart />
</Button>
`}</pre>
        </code>
</Box>)
.add('Badge', () => <Box p={10}>
    <Grid fluid gutter={5}>
        <Typography variant="h1">Badge</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a></Alert>
<code>
<pre>{`import { Badge } from `}<Red>'../components/Badge';</Red> <br/>{`
<Badge>Badge (primary)</Badge>
`}</pre>
</code>
    </Grid>
        <Typography variant="h3" mb={20} mt={30}>Variants</Typography>
        <Badge>Default (primary)</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="dark">Dark</Badge>
        <Box backgroundColor="#aaa" p={10} display="inline-block">
            <Badge variant="light">Light</Badge>
        </Box>
        <code>
<pre>{`<Badge>Default (primary)</Badge>
<Badge `}<b>variant="primary"</b>{`>Primary</Badge>
<Badge `}<b>variant="secondary"</b>{`>Secondary</Badge>
<Badge `}<b>variant="success"</b>{`>Success</Badge>
<Badge `}<b>variant="danger"</b>{`>Danger</Badge>
<Badge `}<b>variant="warning"</b>{`>Warning</Badge>
<Badge `}<b>variant="info"</b>{`>Info</Badge>
<Badge `}<b>variant="light"</b>{`>Light</Badge>
<Badge `}<b>variant="dark"</b>{`>Dark</Badge>
`}</pre>
</code>

        <Typography variant="h3" mb={20} mt={30}>Sizes</Typography>
        <Badge size="sm">Small</Badge>
        <Badge size="md">Medium</Badge>
        <Badge size="lg">Large</Badge>
        <code>
<pre>{`<Badge `}<b>size="sm"</b>{`>Small</Badge>
<Badge `}<b>size="md"</b>{`>Medium</Badge>
<Badge `}<b>size="lg"</b>{`>Large</Badge>
`}</pre>
        </code>

        <Typography variant="h3" mb={20} mt={30}>Badge Link</Typography>
        <Box backgroundColor="#aaa" p={10}>
            <Badge variant='light' link="true" as="a">Badge Link</Badge>
        </Box>
        <code>
<pre>{`<Badge `}<b>variant='light' link="true" as="a"</b>{`>Badge Link</Badge>
`}</pre>
        </code>
</Box>)

.add('Tag', () => <Box p={10}>
    <Grid fluid gutter={5}>
        <Typography variant="h1">Tag</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a></Alert>
<code>
<pre>{`import { Tag } from `}<Red>'../components/Tag';</Red> <br/>{`
<Tag>Tag</Tag>
`}</pre>
</code>
    </Grid>
        <Typography variant="h3" mb={20} mt={30}>Variants</Typography>
        <Tag>Tag Default</Tag><br/>
        <Tag link="true" as="a"><Computer />Tag Icon</Tag>
        <code>
<pre>{`<Tag>Tag Default</Tag>
<Tag><Computer />Tag</Tag>
`}</pre>
</code>

        <Typography variant="h3" mb={20} mt={30}>Tag Link</Typography>
        <Tag link="true" as="a"><Computer />Tag Link</Tag>
        <code>
<pre>{`<Tag `}<b>link="true" as="a"</b>{`>Tag Link</Tag>
`}</pre>
        </code>
</Box>)

.add('Form Group Icon', () => <Box p={10}>
    <Grid fluid gutter={5}>
        <Typography variant="h1">Form Group Icon</Typography>
        <Typography variant="h3" mt={20}>How to Use</Typography>
        <Alert variant="info">(FormGroup, FormGroupIcon) support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/></Alert>
        <code>
<pre>{`import { FormGroup, FormGroupIcon } from `}<Red>'../components/Form';</Red>{`
import Input from `}<Red>'../components/Input';</Red>{`
import { LocationOn } from `}<Red>'styled-icons/material';</Red>{`
`}</pre>
        </code>
    </Grid>
    <Typography variant="h3" mb={20} mt={30}>Input Icon</Typography>
    <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-input#api">API component <b>Input</b> smooth-ui</a><br/></Alert>
    <FormGroup mb={10}>
        <FormGroupIcon><LocationOn /></FormGroupIcon>
        <Input icon="true" placeholder="placeholder" />
    </FormGroup>
    <code>
<pre>{`<FormGroup>
    <FormGroupIcon><LocationOn /></FormGroupIcon>
    <Input `}<b>icon="true"</b>{` placeholder="placeholder" />
</FormGroup>
`}</pre>
    </code>
    <Typography variant="h3" mb={20} mt={30}>Select Icon</Typography>
    <Alert variant="info">Support <a href="https://smooth-ui.smooth-code.com/docs-components-select#api">API component <b>Select</b> smooth-ui</a><br/></Alert>
        <FormGroup mb={10}>
            <FormGroupIcon><LocationOn /></FormGroupIcon>
            <Select icon="true">
                <option>Все категории</option>
                <option>Control</option>
                <option>Other</option>
            </Select>
        </FormGroup>
        <code>
<pre>{`import Select from `}<Red>'../components/Select';</Red><br/>{`
<FormGroup>
    <FormGroupIcon><LocationOn /></FormGroupIcon>
    <Select `}<b>icon="true"</b>{`>
        <option>Control</option>
        <option>Other</option>
    </Select>
</FormGroup>
`}</pre>
        </code>
</Box>);


