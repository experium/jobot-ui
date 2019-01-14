import React from 'react';
import {
    Box, Typography, Alert, CubeVacancyText,
    CubeControlsBtn, CubeContainer, CubeControls,
    CubeVacancies, CubeVacancy, CubeVacancyName,
    CubeVacancySalary
} from '../ui';


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

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
<pre>{`import { `}<b>Box,CubeControlsBtn, CubeContainer, CubeControls, CubeVacancies, CubeVacancy, CubeVacancyName, CubeVacancySalary</b>{` } from `}<Box color="red" display="inline-block">'@experium/jobot-ui';</Box>{`
<CubeContainer height={'600px'} >
    <CubeVacancies>
        {data.map((i) => <CubeVacancy `}<b>columnCount={5} rowCount={4}</b>{` backgroundColor={i % 2 ? '#f23735' : '#fafafa'} color={i % 2 ? '#fff' : '#000'}>
            <Box display={'flex'} height={'50%'}></Box>
            <CubeVacancyText height={'50%'}>
                <CubeVacancyName>Название вакансии {i}</CubeVacancyName>
                <CubeVacancySalary>от 100 000 руб.</CubeVacancySalary>
            </CubeVacancyText>
        </CubeVacancy>)}
    </CubeVacancies>
    <CubeControls>
        <CubeControlsBtn `}<b>columnCount={5}</b>{`>Назад</CubeControlsBtn>
        <CubeControlsBtn `}<b>columnCount={5}</b>{`>Вперед</CubeControlsBtn>
        <CubeControlsBtn>Поиск</CubeControlsBtn>
    </CubeControls>
</CubeContainer>
`}</pre>
        </code>
        <CubeContainer height={'600px'} >
            <CubeVacancies>
                {data.map((i) => <CubeVacancy backgroundColor={i % 2 ? '#f23735' : '#fafafa'} color={i % 2 ? '#fff' : '#000'} columnCount={5} rowCount={4}>
                    <Box display={'flex'} height={'50%'}></Box>
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
