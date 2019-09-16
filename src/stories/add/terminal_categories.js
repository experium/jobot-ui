import React from 'react';
import {
    Box,
    Typography,
    Alert,
    FormGroup,
    TerminalLabel,
    TypeIcon,
    TerminalTypes,
    TerminalTypeBox,
    Icon

} from '../ui';
import { Clock } from 'styled-icons/feather';

const TerminalCategories = () => (
    <Box>
        <Typography variant="h1">Examples Terminal Categories</Typography>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use<br/><small><small>Need to specify the number of columns & row for <b>TerminalTypeBox</b></small></small></Typography>
<pre>{`import { `}<b>Box, FormGroup, TerminalLabel,TerminalTypes, TerminalTypeBox, TypeIcon, Icon</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
<FormGroup>
    <TerminalLabel>Категории</TerminalLabel>
    <TerminalTypes `}<b>height={'400px'}</b>{`>
        <TerminalTypeBox `}<b>columnCount={5} rowCount={4}</b>{`>
            <TypeIcon><Icon icon="cook" /></TypeIcon>
            <Box>Работа в ресторанах</Box>
        </TerminalTypeBox>
        ...
    </TerminalTypes>
</FormGroup>
`}</pre>
        <Box display={'flex'} flexDirection={'column'}>
            <FormGroup>
                <TerminalLabel>Категории</TerminalLabel>
                <TerminalTypes height={'400px'}>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Подработка</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="cook" /></TypeIcon>
                        <Box>Работа в ресторанах</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Работа для студентов</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="seller" /></TypeIcon>
                        <Box>Работа в магазинах</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="admin" /></TypeIcon>
                        <Box>Для админ. персонала</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="builder" /></TypeIcon>
                        <Box>Работа для строителей</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="courier-2" /></TypeIcon>
                        <Box>Работа в доставке</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Работа в сфере услуг</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Развлечения и музыка</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="car" /></TypeIcon>
                        <Box>Водители и сервисы</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="manager-2" /></TypeIcon>
                        <Box>Работа в продажах</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Реклама и маркетинг</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="office-manager" /></TypeIcon>
                        <Box>Работа для IT-специалистов</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Охрана и безопасность</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Работа с финансами</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="cleaner" /></TypeIcon>
                        <Box>Клининг и уборка</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Вакансии в медицине</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Icon icon="barber" /></TypeIcon>
                        <Box>SPA и сфера красоты</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Вакансии на производстве</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Наука и образование</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Авиа и морское дело</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Искусство и творчество</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Разное интересное</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Домашний персонал</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Работа на ферме</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Инженерное дело</Box>
                    </TerminalTypeBox>
                    <TerminalTypeBox columnCount={9} rowCount={3}>
                        <TypeIcon><Clock /></TypeIcon>
                        <Box>Работа на госслужбе</Box>
                    </TerminalTypeBox>
                </TerminalTypes>
            </FormGroup>
        </Box>

    </Box>
);

export default TerminalCategories;
