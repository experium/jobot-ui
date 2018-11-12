import React from 'react';
import { Flex, Box } from '@rebass/grid'
import Select from 'react-select';
import styled from 'styled-components';
import '../index.css';

import { storiesOf } from '@storybook/react';

/*Components*/
import { Container, BoxImage, BoxColor } from '../components/Layout';
import { Header, HeaderToolbar } from '../components/Header';
import { Item } from '../components/List';
import { Card, CardBtn } from '../components/Card';
import { Button } from '../components/Button';
import { FormGroup, FormGroupIcon, Input, Textarea, Label, selectStyles } from '../components/Form';
import { Badge, BadgeLink } from '../components/Badge';
import { Tag, TagLink } from '../components/Tag';
import { H1, H2, H3, H4, H5, H6, P, ListUl, LinkWhite, AlignCenter, AlignRight } from '../components/Typography';


/*Icon*/
import { Work } from 'styled-icons/material/Work';
import { Search } from 'styled-icons/octicons/Search';
import { Heart } from 'styled-icons/fa-regular/Heart';
import { LocationOn } from 'styled-icons/material/LocationOn';
import { AccessTime } from 'styled-icons/material/AccessTime';
import { Brush } from 'styled-icons/material/Brush';
import { Computer } from 'styled-icons/material/Computer';
import { DateRange } from 'styled-icons/material/DateRange';
import { ArrowForward } from 'styled-icons/material/ArrowForward';
import { Comment } from 'styled-icons/material/Comment';
import { Vk, Facebook, Twitter, LinkedinIn } from 'styled-icons/fa-brands';

/*Image*/
import imgBg from '../assets/img/bg2.jpg';
import imgItem1 from '../assets/img/item.jpg';
import imgItem2 from '../assets/img/item2.png';
import imgItem3 from '../assets/img/img3.jpg';
import imgItem4 from '../assets/img/img4.jpg';
import imgItem5 from '../assets/img/img5.jpg';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
];
const Red = styled.span`
    color: red;
`;

storiesOf('Markup', module).add('Header', () => <Header>
    <Container>
        <H1 color={'#fff'}>Работа найдется для каждого</H1>
        <br/>
        <H2 color={'#ff4f57'}>Здесь находят работу и подбирают персонал</H2>
        <HeaderToolbar p={10} my={30}>
            <Box width={1/3} pr={15}>
                <FormGroup><FormGroupIcon><Work /></FormGroupIcon><Input placeholder="Название вакансии / Компания" icon /></FormGroup>
            </Box>
            <Box width={1/3} px={15}>
                <FormGroup><FormGroupIcon><LocationOn /></FormGroupIcon><Input placeholder="Город / Регион" icon /></FormGroup>
            </Box>
            <Box width={1/3} pl={15}>
                <Flex>
                    <Box width={1} pr={30}>
                        <FormGroup>
                            <FormGroupIcon><Work /></FormGroupIcon>
                            <Select
                            label="Все категории"
                            styles={selectStyles}
                            options={options}
                        />
                        </FormGroup>
                    </Box>
                    <Box width={70}>
                        <Button large primary radius={'4px'}><Search size="22" title="Search" /></Button>
                    </Box>
                </Flex>
            </Box>
        </HeaderToolbar>
        <Flex>
            <Box>
                <b>Популярные запросы:</b>
                <BadgeLink theme={'light'}>Менеджер</BadgeLink>
                <BadgeLink theme={'light'}>Дизайнер</BadgeLink>
                <BadgeLink theme={'light'}>Программист</BadgeLink>
            </Box>
        </Flex>
    </Container>
</Header>);

storiesOf('Markup', module).add('List', () => <Container>
        <Box mb={30}>
            <H1>Вакансии дня</H1>
        </Box>
        <Item>
            <Box>
                <img width={100} src={imgItem1} alt=""/>
            </Box>
            <Box pl={25}>
                <Box mb={20}>
                    <H2>Дизайнер <Badge theme={'primary'}>Полный день</Badge></H2>
                </Box>
                <p>Внесение правок в готовые макеты полиграфии. Подготовка поздравительных открыток. Грамотно распределять объём работ между собой и вторым дизайнером.</p>
                <hr/>
                <Flex mt={10}>
                    <Box alignSelf='center;'>
                        <TagLink><Brush />Дизайн</TagLink>
                        <Tag><LocationOn />Москва</Tag>
                        <Tag><AccessTime />12:00</Tag>
                    </Box>
                    <Box flex='1 1 200px' width={'200px'}>
                        <AlignRight>
                            <Box as='span' mr={20}>
                                <Button circle><Heart /></Button>
                            </Box>
                            <Button primary>Подробнее</Button>
                        </AlignRight>
                    </Box>
                </Flex>
            </Box>
        </Item>
        <Item>
            <Box>
                <img width={100} src={imgItem2} alt=""/>
            </Box>
            <Box pl={25}>
                <Box mb={20}>
                    <H2>Программист <Badge theme={'secondary'}>Гибкий график</Badge></H2>
                </Box>
                <p>Проектирование и разработка CRM системы на базе bpm'online. - Доработка и поддержка введенных в эксплуатацию модулей системы. Профильное техническое образование. - Знание ООП и теории БД. - Навыки программирования C# и JS.</p>
                <hr/>
                <Flex mt={10}>
                    <Box alignSelf='center;'>
                        <TagLink><Computer />Информационные технологии</TagLink>
                        <Tag><LocationOn />Москва</Tag>
                        <Tag><AccessTime />12:00</Tag>
                    </Box>
                    <Box flex='1 1 200px' width={'200px'}>
                        <AlignRight>
                            <Box as='span' mr={20}>
                                <Button circle><Heart /></Button>
                            </Box>
                            <Button primary>Подробнее</Button>
                        </AlignRight>
                    </Box>
                </Flex>
            </Box>
        </Item>
    </Container>);

storiesOf('Markup', module).add('Card', () => <Container>
    <Box mb={30}>
        <H1>Избранные вакансии</H1>
    </Box>
    <Flex mx={-15}>
        <Box width={1/3} px={15}>
            <Card p={10}>
                <img width='100%' src={imgItem3} alt=""/>
                <Box m={10}>
                    <H4 uppercase>Название вакансии</H4>
                    <Box mt={10}>
                        <TagLink><LocationOn />Москва</TagLink>
                    </Box>
                </Box>
                <CardBtn>
                    <Button primary circle><ArrowForward size="20" title="Arrow" /></Button>
                </CardBtn>
                <Box m={10}>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><AccessTime />12:00</Tag>
                </Box>
            </Card>
        </Box>
        <Box width={1/3} px={15}>
            <Card p={10}>
                <img width='100%' src={imgItem4} alt=""/>
                <Box m={10}>
                    <H4 uppercase>Название вакансии 2</H4>
                    <Box mt={10}>
                        <TagLink><LocationOn />Москва</TagLink>
                    </Box>
                </Box>
                <CardBtn>
                    <Button primary circle><ArrowForward size="20" title="Arrow" /></Button>
                </CardBtn>
                <Box m={10}>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><AccessTime />12:00</Tag>
                </Box>
            </Card>
        </Box>
        <Box width={1/3} px={15}>
            <Card p={10}>
                <img width='100%' src={imgItem5} alt=""/>
                <Box m={10}>
                    <H4 uppercase>Название вакансии 3</H4>
                    <Box mt={10}>
                        <TagLink><LocationOn />Москва</TagLink>
                    </Box>
                </Box>
                <CardBtn>
                    <Button primary circle><ArrowForward size="20" title="Arrow" /></Button>
                </CardBtn>
                <Box m={10}>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><AccessTime />12:00</Tag>
                </Box>
            </Card>
        </Box>
    </Flex>
    <Box my={30}>
        <H1>Новости</H1>
    </Box>
    <Flex mx={-15}>
        <Box width={1/3} px={15}>
            <Card>
                <img width='100%' src={imgItem3} alt=""/>
                <Box m={15}>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><Comment />3</Tag>
                </Box>
                <Box m={15}>
                    <H4>Заголовок</H4>
                </Box>
                <Box m={15}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.
                </Box>
                <Box m={15}>
                    <Button primary>Подробнее</Button>
                </Box>
            </Card>
        </Box>
        <Box width={1/3} px={15}>
            <Card>
                <img width='100%' src={imgItem4} alt=""/>
                <Box m={15}>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><Comment />3</Tag>
                </Box>
                <Box m={15}>
                    <H4>Заголовок</H4>
                </Box>
                <Box m={15}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.
                </Box>
                <Box m={15}>
                    <Button primary>Подробнее</Button>
                </Box>
            </Card>
        </Box>
        <Box width={1/3} px={15}>
            <Card>
                <img width='100%' src={imgItem5} alt=""/>
                <Box m={15}>
                    <Tag><DateRange />12.11.2018</Tag>
                    <Tag><Comment />3</Tag>
                </Box>
                <Box m={15}>
                    <H4>Заголовок</H4>
                </Box>
                <Box m={15}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore praesentium asperiores ad vitae.
                </Box>
                <Box m={15}>
                    <Button primary>Подробнее</Button>
                </Box>
            </Card>
        </Box>
    </Flex>
</Container>);

storiesOf('Markup', module).add('Box buy', () => <Container py={60}>
    <AlignCenter>
        <H1>Вы используете бесплатную версию <br/>Купите полную версию, чтобы получить все возможности</H1>
        <br/>
        <Button primary>Купить</Button>
    </AlignCenter>
</Container>);

storiesOf('Markup', module).add('Box image bg', () => <BoxImage image={imgBg}>
    <Container py={60}>
        <AlignCenter>
            <H1 color={'#fff'}>Ищу работу</H1>
            <br/>
            <H3 color={'#9FA7BA'} fontWeight={'400'}>Присоединяйтесь к тысячам работодателей и заработайте!</H3>
            <br/>
            <Button primary>Начать</Button>
        </AlignCenter>
    </Container>
</BoxImage>);

storiesOf('Markup', module).add('Box Color bg', () => <BoxColor color='#FF4F57'>
    <Container py={60}>
        <AlignCenter>
            <H1 color={'#fff'}>Ищу работу</H1>
            <br/>
            <H3 color={'#fff'} fontWeight={'100'}>Присоединяйтесь к тысячам работодателей и заработайте!</H3>
            <br/>
            <Button>Начать</Button>
        </AlignCenter>
    </Container>
</BoxColor>);

storiesOf('Markup', module).add('Footer', () => <BoxColor color='#202020'>
    <Container py={60}>
        <Flex mx={-15}>
            <Box width={1/4} px={15}>
                <Box mb={20}>
                    <H3 color='#FF4F57'>Заголовок</H3>
                </Box>
                <P color='#fff'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.</P>
            </Box>
            <Box width={1/4} px={15}>
                <Box mb={20}>
                    <H3 color='#fff'>Раздел</H3>
                </Box>
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
            </Box>
            <Box width={1/4} px={15}>
                <Box mb={20}>
                    <H3 color='#fff'>Раздел</H3>
                </Box>
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
            </Box>
            <Box width={1/4} px={15}>
                <Box mb={20}>
                    <H3 color='#fff'>Подписаться</H3>
                </Box>
                <Flex>
                    <Box mr={10}>
                        <Button primary circle icon><Vk /></Button>
                    </Box>
                    <Box mr={10}>
                        <Button primary circle icon><Facebook /></Button>
                    </Box>
                    <Box mr={10}>
                        <Button primary circle icon><Twitter /></Button>
                    </Box>
                    <Box mr={10}>
                        <Button primary circle icon><LinkedinIn /></Button>
                    </Box>
                </Flex>
                <Box mt={10}>
                    <P color={'#fff'}>Join our mailing list to stay up to date and get notices about our new releases!</P>
                </Box>
            </Box>
        </Flex>
    </Container>
</BoxColor>);

storiesOf('Components', module)
    .add('Buttons', () => <div>
            <Box m={20}>
                <H1>Buttons</H1>
                <Box my={20}>
                    <H3>How to Use</H3>
                </Box>
<code>
<pre>{`import { Button } from `}<Red>'components/Button';</Red> <br/>
{`import { Search } from `}<Red>'styled-icons/octicons/Search';</Red> <br/>
{`import { Heart } from `}<Red>'styled-icons/fa-regular/Heart';</Red> <br/>{`
<Button>Default</Button>
<Button `}<b>circle</b>{`><Heart title="Heart" /></Button>
<Button `}<b>large</b>{`>Hello Button</Button>
<Button `}<b>large radius='4px'</b>{`><Search title="Search" /></Button>
<Button `}<b>primary</b>{`>Default</Button>
`}</pre>
</code>
            </Box>
        <Flex>
            <Box width={1/2} px={2}>
                <Box my={20}><H2>Default</H2></Box>
                <Button>Hello Button</Button> - Text<br/><br/>
                <Button circle><Heart title="Heart" /></Button> - Circle - Icon<br/><br/>
                <Button large>Hello Button</Button> - Large - Text<br/><br/>
                <Button large radius={'4px'}><Search title="Search" /></Button> - Large - Icon custom radius 4px<br/>
            </Box>
            <Box width={1/2} px={2}>
                <Box my={20}><H2>Primary</H2></Box>
                <Button primary>Hello Button</Button> - Text<br/><br/>
                <Button primary circle><Search title="Search" /></Button> - Circle - Icon<br/><br/>
                <Button large primary>Hello Button Large</Button> - Large - Text<br/><br/>
                <Button large primary circle><Search title="Search" /></Button> - Large - Icon<br/>
            </Box>
        </Flex>
        </div>);

storiesOf('Components', module)
.add('Input', () => <div>
        <Box m={20}>
            <H1>Input</H1>
            <Box my={20}>
                <H3>How to Use</H3>
            </Box>
            <code>
    <pre>
{`import { Input, FormGroup, FormGroupIcon, Label } from `}<Red>'components/Form';</Red><br/>
{`import { Search } from `}<Red>'styled-icons/octicons/Search';</Red> <br/>{`
<Label>Label input</Label>
<Input placeholder="placeholder">

<Label>Input + Icon</Label>
<FormGroup>
    <FormGroupIcon>
        <Search />
    </FormGroupIcon>
    <Input placeholder="placeholder" `}<b>icon</b>{` />
</FormGroup>
`}</pre>
            </code>
        </Box>
        <Box mt={20}>
            <Label>Input</Label>
            <Input placeholder="placeholder" />
        </Box>
        <Box mt={20}>
            <Label>Input + Icon</Label>
            <FormGroup><FormGroupIcon><Search /></FormGroupIcon><Input placeholder="placeholder" icon /></FormGroup>
        </Box>
    </div>)
    .add('Textarea', () => <div>
        <Box m={20}>
            <H1>Textarea</H1>
            <Box my={20}>
                <H3>How to Use</H3>
            </Box>
            <code>
    <pre>
{`import { Textarea, Label } from `}<Red>'components/Form';</Red><br/>{`
<Label>Textarea</Label>
<Textarea rows={10}/>
`}</pre>
            </code>
        </Box>
        <Box mt={20}>
            <Label>Textarea</Label>
            <Textarea rows={10}/>
        </Box>
    </div>)
    .add('Select', () => <div>
        <Box m={20}>
            <H1>Textarea</H1>
            <Box my={20}>
                <H3>How to Use</H3>
            </Box>
            <code>
    <pre>
{`import Select from `}<Red>'react-select';</Red><br/>
{`import { Work } from `}<Red>'styled-icons/material/Work';</Red><br/>
{`import { FormGroup, FormGroupIcon, selectStyles } from `}<Red>'components/Form';</Red><br/>{`
<Label>Select</Label>
<Select label="Single select" styles={selectStyles} options={options} />
<FormGroup>
    <FormGroupIcon><Work /></FormGroupIcon>
    <Select label="Все категории" styles={selectStyles} options={options} />
</FormGroup>
`}</pre>
            </code>
        </Box>
        <Box mt={20}>
        <Label>Select</Label>
        <Select
            label="Single select"
            styles={selectStyles}
            options={options}
        />
        </Box>
        <Box mt={20}>
            <Label>Select Icon</Label>
        </Box>
        <FormGroup>
            <FormGroupIcon><Work /></FormGroupIcon>
            <Select label="Все категории" styles={selectStyles} options={options} />
        </FormGroup>
    </div>);

storiesOf('Components', module)
    .add('Badge', () => <div>
            <Box m={20}>
                <H1>Badges</H1>
                <Box my={20}>
                    <H3>How to Use</H3>
                </Box>
                <code>
    <pre>{`import { Badge, BadgeLink } from `}<Red>'components/Badge';</Red> <br/>{`
<Badge `}<b>theme='primary'</b>{`>Badge primary</Badge>
<Badge `}<b>theme='secondary'</b>{`>Badge secondary</Badge>
<Badge `}<b>theme='pink'</b>{`>Badge pink</Badge>
<Badge `}<b>theme='light'</b>{`>Badge light</Badge>
<BadgeLink `}<b>as='a' theme='light'</b>{`>Badge light link</BadgeLink>
`}</pre>
                </code>
            </Box>
        <Flex>
            <Box width={1/2} px={2}>
                <Box>
                    <Badge theme='primary'>Badge primary</Badge>
                    <Badge theme='secondary'>Badge secondary</Badge>
                    <Badge theme='pink'>Badge pink</Badge>
                </Box>
                <Box mt={20} py={20} style={{ backgroundColor: '#525759'}}>
                    <Badge theme='light'>Badge light</Badge>
                </Box>
            </Box>
            <Box width={1/2} px={2}>
                <Box>
                    <BadgeLink as="a" theme={'primary'}>Badge link primary</BadgeLink>
                    <BadgeLink theme={'secondary'}>Badge link secondary</BadgeLink>
                    <BadgeLink theme={'pink'}>Badge link pink</BadgeLink>
                </Box>
                <Box mt={20} py={20} style={{ backgroundColor: '#525759'}}>
                    <BadgeLink theme={'light'}>Badge link light</BadgeLink>
                </Box>
            </Box>
        </Flex>
        </div>);

storiesOf('Components', module)
    .add('Tag', () => <div>
        <Box m={20}>
            <H1>Badges</H1>
            <Box my={20}>
                <H3>How to Use</H3>
            </Box>
            <code>
<pre>{`import { Tag, TagLink } from `}<Red>'components/Tag';</Red> <br/>
{`import { Search } from `}<Red>'styled-icons/octicons/Search';</Red> <br/>
{`import { LocationOn } from `}<Red>'styled-icons/material/LocationOn';</Red> <br/>{`
<Tag>Tag</Tag>
<Tag><Search />Tag</Tag>
<TagLink><LocationOn />Tag Link</TagLink>
`}</pre>
            </code>
        </Box>
        <div>
            <Tag><Heart />Tag</Tag>
            <Tag><Search />Tag</Tag>
            <TagLink><LocationOn />Tag Link</TagLink>
        </div>
    </div>);

storiesOf('Components', module).add('Layout Container wrap', () => <Box>
    <Box m={20}>
        <H1>Wrapper container width 1140px</H1>
        <Box my={20}>
            <H3>How to Use</H3>
        </Box>
    </Box>
    <code>
        <pre>{`import { Container } from `}<Red>'components/Layout';</Red> <br/>{`
<Container>Container max-width: 1140px and center</Container>
          `}</pre>
    </code>
    <Container mt={40} p={20} style={{ backgroundColor: '#ddd'}}>Container max-width: 1140px and center</Container>
</Box>);

storiesOf('Components', module).add('Box image', () => <Box>
    <Box m={20}>
        <H1>Box image bg</H1>
        <Box my={20}>
            <H3>How to Use</H3>
        </Box>
    </Box>
<code>
<pre>{`import { BoxImage } from `}<Red>'components/Layout';</Red> <br/>
{`import imgBg from `}<Red>'assets/img/bg2.jpg';</Red> <br/>{`
<BoxImage image={imgBg}></BoxImage>
  `}</pre>
</code>
    <BoxImage image={imgBg} py={200}></BoxImage>
</Box>);

storiesOf('Components', module).add('Box bg color', () => <Box>
    <Box m={20}>
        <H1>Box image bg</H1>
        <Box my={20}>
            <H3>How to Use</H3>
        </Box>
    </Box>
<code>
<pre>{`import { BoxColor } from `}<Red>'components/Layout';</Red> <br/>{`
<BoxColor color='red'></BoxColor>
  `}</pre>
</code>
    <BoxColor color='red' py={200}></BoxColor>
</Box>);

storiesOf('Components', module)
    .add('Typography', () => <div>
            <Box m={20}>
                <H1>Typography</H1>
                <Box my={20}>
                    <H1>Heading</H1>
                </Box>
                <Box my={20}>
                    <H3>How to Use</H3>
                </Box>
                <code>
<pre>{`import { H1, H2, H3, H4, H5, H6 } from `}<Red>'components/Typography';</Red> <br/>{`
<H1>h1. Heading</H1>
<H2>h2. Heading</H2>
<H3>h3. Heading</H3>
<H4>h4. Heading</H4>
<H5>h5. Heading</H5>
<H6>h6. Heading</H6>
<H1 `}<b>uppercase color='#ff4f57' fontWeight='100'</b>{`>h1. Heading</H1>
`}</pre>
                </code>
            </Box>
        <Flex mx={20}>
            <Box width={1/2} px={10}>
                <H1>h1. Heading</H1>
                <H2>h2. Heading</H2>
                <H3>h3. Heading</H3>
                <H4>h4. Heading</H4>
                <H5>h5. Heading</H5>
                <H6>h6. Heading</H6>
            </Box>
            <Box width={1/2} px={10}>
                <H1 uppercase color='#ff4f57' fontWeight='100'>h1. Heading uppercase color fontWeight</H1>
                <H2 uppercase>h2. Heading uppercase color</H2>
                <H3 uppercase>h3. Heading uppercase</H3>
                <H4 uppercase>h4. Heading uppercase</H4>
                <H5 uppercase>h5. Heading uppercase</H5>
                <H6 uppercase>h6. Heading uppercase</H6>
            </Box>
        </Flex>
        <Box m={20}>
            <Box my={20}>
                <H1>Paragraph</H1>
            </Box>
            <Box my={20}>
                <H3>How to Use</H3>
            </Box>
            <code>
<pre>{`import {  P, AlignCenter, AlignRight } from `}<Red>'components/Typography';</Red> <br/>{`

<P>Lorem ipsum...</P>
<AlignRight>
    <P>Lorem ipsum...</P>
</AlignRight>
<AlignRight>
    <P>Lorem ipsum...</P>
</AlignRight>
<P `}<b>uppercase color='#ff4f57' fontWeight='700'</b>{`>Lorem ipsum...</P>
`}</pre>
            </code>
        </Box>
        <Flex>
            <Box width={1/4} px={10}>
                <Box mb={20}>
                    <H4>Default</H4>
                </Box>
                <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.</P>
            </Box>
            <Box width={1/4} px={10}>
                <AlignCenter>
                    <Box mb={20}>
                        <H4>Align Center</H4>
                    </Box>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.</P>
                </AlignCenter>
            </Box>
            <Box width={1/4} px={10}>
                <AlignRight>
                    <Box mb={20}>
                        <H4>Align Right</H4>
                    </Box>
                    <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.</P>
                </AlignRight>
            </Box>
            <Box width={1/4} px={10}>
                <Box mb={20}>
                    <H4>Uppercase, color, fontWeight</H4>
                </Box>
                <P uppercase color='#ff4f57' fontWeight='700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis tincidunt est, et euismod purus suscipit quis.</P>
            </Box>
        </Flex>
        <Box m={20}>
            <Box my={20}>
                <H1>List</H1>
            </Box>
            <Box my={20}>
                <H3>How to Use</H3>
            </Box>
            <code>
<pre>{`import {  ListUl } from `}<Red>'components/Typography';</Red> <br/>{`

<ListUl>
    <li>item</li>
</ListUl>
<ListUl `}<b>styleNone</b>{`>
    <li>item</li>
</ListUl>
<ol>
    <li>item</li>
</ol>

`}</pre>
            </code>
        </Box>
        <Flex>
            <Box width={1/3} px={10}>
                <Box mb={20}>
                    <H4>List ul</H4>
                </Box>
                <ListUl>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ListUl>
            </Box>
            <Box width={1/3} px={10}>
                <Box mb={20}>
                    <H4>List ul list-style: none</H4>
                </Box>
                <ListUl styleNone>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ListUl>
            </Box>
            <Box width={1/3} px={10}>
                <Box mb={20}>
                    <H4>List ol</H4>
                </Box>
                <ol>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ol>
            </Box>
        </Flex>
</div>);
