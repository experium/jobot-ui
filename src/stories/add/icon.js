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
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="courier-3" size={80}/>
                        <code>icon="courier-3"</code>
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
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="welder-2" size={80}/>
                        <code>icon="welder-2"</code>
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
                    <Typography variant="h6" mb={20}>Домашний персонал</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="home" size={80}/>
                        <code>icon="home"</code>
                    </Box>
                </Col>
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
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="cleaner-4" size={80}/>
                        <code>icon="cleaner-4"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Горничная</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="maid" size={80}/>
                        <code>icon="maid"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="maid-2" size={80}/>
                        <code>icon="maid-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="maid-3" size={80}/>
                        <code>icon="maid-3"</code>
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
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="car-2" size={80}/>
                        <code>icon="car-2"</code>
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
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="carwash-2" size={80}/>
                        <code>icon="carwash-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Развлечения и музыка</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Музыкант</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="musician" size={80}/>
                        <code>icon="musician"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Фотограф</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="photographer" size={80}/>
                        <code>icon="photographer"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Аниматор</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="animator" size={80}/>
                        <code>icon="animator"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Актер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="actor" size={80}/>
                        <code>icon="actor"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Гардеробщик</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="wardrobe" size={80}/>
                        <code>icon="wardrobe"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Работа в продажах</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Менеджер по продажам</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="sales-manager" size={80}/>
                        <code>icon="sales-manager"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="sales-manager-2" size={80}/>
                        <code>icon="sales-manager-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Реклама и маркетинг</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Реклама</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="advertising" size={80}/>
                        <code>icon="advertising"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Торговый представитель</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="sales-representative" size={80}/>
                        <code>icon="sales-representative"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="sales-representative-2" size={80}/>
                        <code>icon="sales-representative-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Маркетолог</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="marketer" size={80}/>
                        <code>icon="marketer"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="marketer-2" size={80}/>
                        <code>icon="marketer-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>SMM-специалист</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="smm" size={80}/>
                        <code>icon="smm"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="smm-2" size={80}/>
                        <code>icon="smm-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="smm-3" size={80}/>
                        <code>icon="smm-3"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="smm-4" size={80}/>
                        <code>icon="smm-4"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Промоутер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="promoter" size={80}/>
                        <code>icon="promoter"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="promoter-2" size={80}/>
                        <code>icon="promoter-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Работа для специалистов</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Программист</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="programmer" size={80}/>
                        <code>icon="programmer"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="programmer-2" size={80}/>
                        <code>icon="programmer-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Системный администратор</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="system-administrator" size={80}/>
                        <code>icon="system-administrator"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="system-administrator-2" size={80}/>
                        <code>icon="system-administrator-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Оператор ПК</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="pc-operator" size={80}/>
                        <code>icon="pc-operator"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="pc-operator-2" size={80}/>
                        <code>icon="pc-operator-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>IT-специалист</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="it-specialist" size={80}/>
                        <code>icon="it-specialist"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="it-specialist-2" size={80}/>
                        <code>icon="it-specialist-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Охрана и безопасность</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Охранник</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="security-guard" size={80}/>
                        <code>icon="security-guard"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="security-guard-2" size={80}/>
                        <code>icon="security-guard-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Контролер службы безопасности</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="security-controller" size={80}/>
                        <code>icon="security-controller"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="security-controller-2" size={80}/>
                        <code>icon="security-controller-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Сторож</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="watchman" size={80}/>
                        <code>icon="watchman"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="watchman-2" size={80}/>
                        <code>icon="watchman-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Участковый</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="precinct" size={80}/>
                        <code>icon="precinct"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Работа с финансами</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Бухгалтер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="accountant" size={80}/>
                        <code>icon="accountant"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="accountant-2" size={80}/>
                        <code>icon="accountant-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="accountant-3" size={80}/>
                        <code>icon="accountant-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Представитель банка</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="bank-representative" size={80}/>
                        <code>icon="bank-representative"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="bank-representative-2" size={80}/>
                        <code>icon="bank-representative-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="bank-representative-3" size={80}/>
                        <code>icon="bank-representative-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Кредитный специалист</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="credit-specialist" size={80}/>
                        <code>icon="credit-specialist"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="credit-specialist-2" size={80}/>
                        <code>icon="credit-specialist-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Страховой агент</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="insurance-agent" size={80}/>
                        <code>icon="insurance-agent"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="insurance-agent-2" size={80}/>
                        <code>icon="insurance-agent-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Вакансии в медицине</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Врач</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="doctor" size={80}/>
                        <code>icon="doctor"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="doctor-2" size={80}/>
                        <code>icon="doctor-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="doctor-3" size={80}/>
                        <code>icon="doctor-3"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="doctor-4" size={80}/>
                        <code>icon="doctor-4"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Медсестра</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="nurse" size={80}/>
                        <code>icon="nurse"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="nurse-2" size={80}/>
                        <code>icon="nurse-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="nurse-3" size={80}/>
                        <code>icon="nurse-3"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="nurse-4" size={80}/>
                        <code>icon="nurse-4"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Фармацевт</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="pharmacist" size={80}/>
                        <code>icon="pharmacist"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Вакансии на производстве</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Бригадир</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="brigadier" size={80}/>
                        <code>icon="brigadier"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="brigadier-2" size={80}/>
                        <code>icon="brigadier-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Механик</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="mechanic" size={80}/>
                        <code>icon="mechanic"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Завод</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="factory" size={80}/>
                        <code>icon="factory"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="factory-2" size={80}/>
                        <code>icon="factory-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="factory-3" size={80}/>
                        <code>icon="factory-3"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Наука и образование</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Ученик</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="learner" size={80}/>
                        <code>icon="learner"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="learner-2" size={80}/>
                        <code>icon="learner-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="learner-3" size={80}/>
                        <code>icon="learner-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Преподаватель</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="teacher" size={80}/>
                        <code>icon="teacher"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="teacher-2" size={80}/>
                        <code>icon="teacher-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Научный специалист</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="scientific-specialist" size={80}/>
                        <code>icon="scientific-specialist"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="scientific-specialist-2" size={80}/>
                        <code>icon="scientific-specialist-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Авиа и морское дело</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Стюард</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="steward" size={80}/>
                        <code>icon="steward"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="steward-2" size={80}/>
                        <code>icon="steward-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="steward-3" size={80}/>
                        <code>icon="steward-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Стюардесса</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="stewardess" size={80}/>
                        <code>icon="stewardess"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="stewardess-2" size={80}/>
                        <code>icon="stewardess-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Матрос</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="sailor" size={80}/>
                        <code>icon="sailor"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="sailor-2" size={80}/>
                        <code>icon="sailor-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>SPA и сфера красоты</Typography>
            <Row>
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
                    <Typography variant="h6" mb={20}>Мастер по маникюру</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="manicurist" size={80}/>
                        <code>icon="manicurist"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Массажист</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="masseur" size={80}/>
                        <code>icon="masseur"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Косметолог</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="beautician" size={80}/>
                        <code>icon="beautician"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Искусство и творчество</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Дизайнер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="designer" size={80}/>
                        <code>icon="designer"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="designer-2" size={80}/>
                        <code>icon="designer-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="designer-3" size={80}/>
                        <code>icon="designer-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Модельер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="stylist" size={80}/>
                        <code>icon="stylist"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="stylist-2" size={80}/>
                        <code>icon="stylist-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Художник</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="painter" size={80}/>
                        <code>icon="painter"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="painter-2" size={80}/>
                        <code>icon="painter-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="painter-3" size={80}/>
                        <code>icon="painter-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Видеооператор</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="videographer" size={80}/>
                        <code>icon="videographer"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Работа на ферме</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Садовник</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="gardener" size={80}/>
                        <code>icon="gardener"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="gardener-2" size={80}/>
                        <code>icon="gardener-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="gardener-3" size={80}/>
                        <code>icon="gardener-3"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="gardener-4" size={80}/>
                        <code>icon="gardener-4"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Агроном</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="agronomist" size={80}/>
                        <code>icon="agronomist"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="agronomist-2" size={80}/>
                        <code>icon="agronomist-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Помощник по хозяйству</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="housekeeper" size={80}/>
                        <code>icon="housekeeper"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="housekeeper-2" size={80}/>
                        <code>icon="housekeeper-2"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Инженерное дело</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Инженер</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="engineer" size={80}/>
                        <code>icon="engineer"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="engineer-2" size={80}/>
                        <code>icon="engineer-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="engineer-3" size={80}/>
                        <code>icon="engineer-3"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="engineer-4" size={80}/>
                        <code>icon="engineer-4"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="engineer-5" size={80}/>
                        <code>icon="engineer-5"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Слесарь</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="locksmith" size={80}/>
                        <code>icon="locksmith"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="locksmith-2" size={80}/>
                        <code>icon="locksmith-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="locksmith-3" size={80}/>
                        <code>icon="locksmith-3"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="locksmith-4" size={80}/>
                        <code>icon="locksmith-4"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="locksmith-5" size={80}/>
                        <code>icon="locksmith-5"</code>
                    </Box>
                </Col>
            </Row>

            <Typography variant="h5" mt={30}>Работа на госслужбе</Typography>
            <Row>
                <Col>
                    <Typography variant="h6" mb={20}>Юрист</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="lawyer" size={80}/>
                        <code>icon="lawyer"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="lawyer-2" size={80}/>
                        <code>icon="lawyer-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="lawyer-3" size={80}/>
                        <code>icon="lawyer-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Полицейский</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="policeman" size={80}/>
                        <code>icon="policeman"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="policeman-2" size={80}/>
                        <code>icon="policeman-2"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="policeman-3" size={80}/>
                        <code>icon="policeman-3"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Инспектор</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="inspector" size={80}/>
                        <code>icon="inspector"</code>
                    </Box>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="inspector-2" size={80}/>
                        <code>icon="inspector-2"</code>
                    </Box>
                </Col>
                <Col>
                    <Typography variant="h6" mb={20}>Пожарный</Typography>
                    <Box backgroundColor={'#ddd'} textAlign={'center'} pt={15}>
                        <Icon icon="fireman" size={80}/>
                        <code>icon="fireman"</code>
                    </Box>
                </Col>
            </Row>




        </Grid>

    </Box>
);

export default IconStory;
