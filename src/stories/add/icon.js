import React from 'react';

import {
    Alert, Box, Grid, Typography, Icon, Row, Col
} from '../ui';

const IconStory = () => ( <Box p={10}>
        <Grid fluid gutter={5}>
            <Typography variant="h1">Icon</Typography>
            <Typography variant="h3" mt={20}>How to Use</Typography>
            <Alert variant="info">Support <a href="https://icomoon.io/"><b>Icomoon</b></a><br/>
                Add new icon: generate json icomoon and replace <br/> <code>ui/data/icon.js</code>
            </Alert>
            <code>
<pre>{`import { Icon } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box><br/>{`
<Icon `}<b>icon="builder"</b>{` `}<b>size={`{100}`}</b>{` `}<b>color={`{'red'}`}</b>{` />
`}</pre>
            </code>
        </Grid>
        <Box mt={30}>
            <Icon icon="builder" size={100} color={'red'} />
        </Box>
        <Typography variant="h3" mb={20} mt={30}>All icons</Typography>
        <Grid fluid>
            <Typography variant="h5" mt={30}>Работа в ресторанах</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Повар</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="cook" size={80}/>
                        <code>icon="cook"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="cook-2" size={80}/>
                        <code>icon="cook-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Официант</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="waiter" size={80}/>
                        <code>icon="waiter"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="waiter-2" size={80}/>
                        <code>icon="waiter-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Бармен</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="barman" size={80}/>
                        <code>icon="barman"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Для админ. персонала</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Администратор</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="admin" size={80}/>
                        <code>icon="admin"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Менеджер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="manager" size={80}/>
                        <code>icon="manager"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="manager-2" size={80}/>
                        <code>icon="manager-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="manager-3" size={80}/>
                        <code>icon="manager-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Офис-менеджер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="office-manager" size={80}/>
                        <code>icon="office-manager"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="office-manager-2" size={80}/>
                        <code>icon="office-manager-2"</code>
                    </Box>
                </Col>
            </Row>
            <Row mt={50}>
                <Col>
                    <Typography variant="h6" mb={20}>Менеджер по персоналу</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="hr-manager" size={80}/>
                        <code>icon="hr-manager"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Менеджер по работе с клиентами</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="account-manager" size={80}/>
                        <code>icon="account-manager"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Оператор call-центра</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="call-operator" size={80}/>
                        <code>icon="call-operator"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="call-operator-2" size={80}/>
                        <code>icon="call-operator-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="call-operator-3" size={80}/>
                        <code>icon="call-operator-3"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="call-operator-4" size={80}/>
                        <code>icon="call-operator-4"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Работа в магазинах</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Продавец-консультант</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="seller" size={80}/>
                        <code>icon="seller"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="seller-2" size={80}/>
                        <code>icon="seller-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="seller-3" size={80}/>
                        <code>icon="seller-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Продавец-кассир</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="cashier" size={80}/>
                        <code>icon="cashier"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="cashier-2" size={80}/>
                        <code>icon="cashier-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Мерчендайзер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="merchandiser" size={80}/>
                        <code>icon="merchandiser"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="merchandiser-2" size={80}/>
                        <code>icon="merchandiser-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Работа в доставке</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Водитель</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="driver" size={80}/>
                        <code>icon="driver"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Грузчик</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="loader" size={80}/>
                        <code>icon="loader"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="loader-2" size={80}/>
                        <code>icon="loader-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="loader-3" size={80}/>
                        <code>icon="loader-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Курьер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="courier" size={80}/>
                        <code>icon="courier"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="courier-2" size={80}/>
                        <code>icon="courier-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Работа для строителей</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Разнорабочий</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="handyman" size={80}/>
                        <code>icon="handyman"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="handyman-2" size={80}/>
                        <code>icon="handyman-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="handyman-3" size={80}/>
                        <code>icon="handyman-3"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="handyman-4" size={80}/>
                        <code>icon="handyman-4"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Монтажник</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="installer" size={80}/>
                        <code>icon="installer"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="installer-2" size={80}/>
                        <code>icon="installer-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="installer-3" size={80}/>
                        <code>icon="installer-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Сварщик</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="welder" size={80}/>
                        <code>icon="welder"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Строитель</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="builder" size={80}/>
                        <code>icon="builder"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="builder-2" size={80}/>
                        <code>icon="builder-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="builder-3" size={80}/>
                        <code>icon="builder-3"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="builder-4" size={80}/>
                        <code>icon="builder-4"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Маляр</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="painter" size={80}/>
                        <code>icon="painter"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Работа в сфере услуг</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Уборщик</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="cleaner" size={80}/>
                        <code>icon="cleaner"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="cleaner-2" size={80}/>
                        <code>icon="cleaner-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="cleaner-3" size={80}/>
                        <code>icon="cleaner-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Парикмахер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="barber" size={80}/>
                        <code>icon="barber"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="barber-2" size={80}/>
                        <code>icon="barber-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Горничная</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="maid" size={80}/>
                        <code>icon="maid"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Садовник</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="gardener" size={80}/>
                        <code>icon="gardener"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Водители и сервисы</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Водитель</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="car" size={80}/>
                        <code>icon="car"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Автослесарь</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="auto-mechanic" size={80}/>
                        <code>icon="auto-mechanic"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="auto-mechanic-2" size={80}/>
                        <code>icon="auto-mechanic-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="auto-mechanic-3" size={80}/>
                        <code>icon="auto-mechanic-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Автомойщик</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="carwash" size={80}/>
                        <code>icon="carwash"</code>
                    </Box>
                </Col>
            </Row>




        </Grid>

    </Box>
);

export default IconStory;
