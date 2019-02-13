import React from 'react';
import {
    Box, Typography, Alert, CubeVacancyText,
    CubeControlsBtn, CubeContainer, CubeControls,
    CubeVacancies, CubeVacancy, CubeVacancyName,
    CubeVacancySalary, CubeVacancyLogo
} from '../ui';


const data = [{text: 1, color1: '#00AD3C',  color2: '#fff'}, {text: 1, color1: '#E52629',  color2: '#fff'}, {text: 1, color1: '#1A006F',  color2: '#fff'}, {text: 1, color1: '#003B80',  color2: '#fff'}, {text: 1, color1: '#F84B20',  color2: '#fff'}, {text: 1, color1: '#32409A',  color2: '#fff'}, {text: 1, color1: '#0C2B74',  color2: '#fff'}, {text: 1, color1: '#FFEB15',  color2: '#fff'}, {text: 1, color1: '#82C309',  color2: '#fff'}, {text: 1, color1: '#FAB814',  color2: '#fff'}, {text: 1, color1: '#D00A14',  color2: '#fff'}, {text: 1, color1: '#ED1A3A',  color2: '#fff'}, {text: 1, color1: '#318ACB',  color2: '#fff'}, {text: 1, color1: '#EE3124',  color2: '#fff'}, {text: 1, color1: '#0252A2',  color2: '#000'}, {text: 1, color1: '#66B822',  color2: '#fff'}, {text: 1, color1: '#71A6CE',  color2: '#fff'}, {text: 1, color1: '#FFEF00',  color2: '#fff'}, {text: 1, color1: '#E52629',  color2: '#fff'}, {text: 1, color1: '#E52629',  color2: '#fff'}];

const TerminalMainNew = () => (
    <Box>
        <Typography variant="h1">Examples Terminal Cube Vacancy</Typography>
        <Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box, Button</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a><br/>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use <br/><small><small>Need to specify the number of columns & row for <b>CubeVacancy</b> and columns for <b>CubeControlsBtn</b> <br/><b>CubeVacancies</b> defaultProps flex="10", <b>CubeControls</b> defaultProps flex="1" from the height</small></small></Typography>
        <code>
<pre>{`import { `}<b>Box,CubeControlsBtn, CubeContainer, CubeControls, CubeVacancies, CubeVacancy, CubeVacancyName, CubeVacancySalary, CubeVacancyLogo</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
<CubeContainer height={'700px'} >
    <CubeVacancies>
        {data.map(({ text, color1, color2 }, i) => <CubeVacancy backgroundColor={i % 2 ? '#f5f5f5' : '#fff'} triangleColor={color1} columnCount={5} rowCount={4}>
            <Box display={'flex'} height={'50%'}>
                <CubeVacancyLogo image={require('../../assets/img/company/' + (i) + '.png')} alt=""/>
            </Box>
            <CubeVacancyText height={'50%'}>
                <CubeVacancyName>Название вакансии {i}</CubeVacancyName>
                <CubeVacancySalary>от 100 000 руб.</CubeVacancySalary>
            </CubeVacancyText>
        </CubeVacancy>)}
    </CubeVacancies>
    <CubeControls>
        <CubeControlsBtn columnCount={5} disabled>Назад</CubeControlsBtn>
        <CubeControlsBtn columnCount={5}>Вперед</CubeControlsBtn>
        <CubeControlsBtn>Поиск</CubeControlsBtn>
    </CubeControls>
</CubeContainer>
`}</pre>
        </code>
        <CubeContainer height={'700px'} >
            <CubeVacancies>
                {data.map(({ text, color1, color2 }, i) => <CubeVacancy backgroundColor={i % 2 ? '#f5f5f5' : '#fff'} triangleColor={color1} columnCount={5} rowCount={4}>
                    <Box display={'flex'} height={'50%'}>
                        <CubeVacancyLogo image={require('../../assets/img/company/' + (i) + '.png')} alt=""/>
                    </Box>
                    <CubeVacancyText height={'50%'}>
                        <CubeVacancyName>Название вакансии {i}</CubeVacancyName>
                        <CubeVacancySalary>от 100 000 руб.</CubeVacancySalary>
                    </CubeVacancyText>
                </CubeVacancy>)}
            </CubeVacancies>
            <CubeControls>
                <CubeControlsBtn columnCount={5} disabled>Назад</CubeControlsBtn>
                <CubeControlsBtn columnCount={5}>Вперед</CubeControlsBtn>
                <CubeControlsBtn>Поиск</CubeControlsBtn>
            </CubeControls>
        </CubeContainer>
    </Box>
);

export default TerminalMainNew;
