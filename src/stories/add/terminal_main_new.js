import React from 'react';
import {
    Box, Typography,
    CubeControlsBtn, CubeContainer,
    CubeVacancies, CubeVacancy, CubeVacancyName
} from '../ui';


const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const TerminalMainNew = () => (
    <Box>
        <Typography variant="h1">Examples Terminal Cube Vacancy</Typography>

        <CubeContainer height={'600px'} >
            <CubeVacancies>
                {data.map((i) => <CubeVacancy display={'flex'} flexDirection={'column'} backgroundColor={i % 2 ? '#f23735' : '#fafafa'} color={i % 2 ? '#fff' : '#000'} flex={'1 0 ' + (100/7) + '%'}>
                    <Box display={'flex'} height={'50%'}></Box>
                    <Box display={'flex'} height={'50%'} flexDirection={'column'} justifyContent={'space-between'} p={15}>
                        <CubeVacancyName>Название вакансии {i}</CubeVacancyName>
                        <Box display={'flex'}>от 100 000 руб.</Box>
                    </Box>
                </CubeVacancy>)}
            </CubeVacancies>
            <Box display={'flex'} flex={'1'}>
                <CubeControlsBtn backgroundColor={'#eff1f7'} color={"#333"} flex={'0 0 ' + (100/7) + '%'}>Назад</CubeControlsBtn>
                <CubeControlsBtn flex={'0 0 ' + (100/7) + '%'}>Вперед</CubeControlsBtn>
                <CubeControlsBtn flex={'1 0 auto'}>Поиск</CubeControlsBtn>
            </Box>
        </CubeContainer>

    </Box>
);

export default TerminalMainNew;
