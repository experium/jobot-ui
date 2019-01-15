import React from 'react';
import {
    Box,
    Typography,
    Alert,
    FormGroup,
    TerminalInput,
    TerminalLabel,
    RadioGroup,
    TerminalRadio,
    TerminalFormCheck,
    TerminalFormCheckLabel,
    TerminalButton,
    TypeIcon,
    TypeBox

} from '../ui';
import { AccessTime } from 'styled-icons/material/AccessTime';



const TerminalSearch = () => (
    <Box>
        <Typography variant="h1">Examples Terminal Search</Typography>
        <Alert variant="success">
            <Typography variant="h5">Assembled from components: <br/><b>Box, Button</b></Typography>
        </Alert>
        <Alert variant="info">
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-box#api">API component <b>Box</b> smooth-ui</a><br/>
            Support <a href="https://smooth-ui.smooth-code.com/docs-components-button#api">API component <b>Button</b> smooth-ui</a><br/>
        </Alert>
        <Typography variant="h3" mt={20}>How to Use</Typography>

        <Box display={'flex'} flexDirection={'column'}>
            <Box>
                <FormGroup>
                    <TerminalLabel htmlFor="form-group-input-name">Профессия</TerminalLabel>
                    <TerminalInput control id="form-group-input-name" />
                </FormGroup>
            </Box>
            <Box>
                <FormGroup>
                    <TerminalLabel htmlFor="form-group-input-name">Тип</TerminalLabel>
                    <Box display={'flex'}>
                        <TypeBox>
                            <TypeIcon><AccessTime /></TypeIcon>
                            <Box>Подработка</Box>
                        </TypeBox>
                        <TypeBox>
                            <TypeIcon><AccessTime /></TypeIcon>
                            <Box>Подработка</Box>
                        </TypeBox>

                    </Box>
                </FormGroup>
            </Box>

            <Box display={'flex'}>
                <Box display={'flex'} width={'50%'}>
                    <FormGroup>
                        <TerminalLabel htmlFor="form-group-input-salary">Зарплата от</TerminalLabel>
                        <TerminalInput control id="form-group-input-salary" />
                    </FormGroup>
                </Box>
                <Box display={'flex'} width={'50%'} justifyContent={'flex-end'}>
                    <RadioGroup>
                        <TerminalFormCheck>
                            <TerminalRadio size="lg" id="radio1" name="radio" value="option1" />
                            <TerminalFormCheckLabel htmlFor="radio1">За месяц</TerminalFormCheckLabel>
                        </TerminalFormCheck>
                        <TerminalFormCheck>
                            <TerminalRadio size="lg" id="radio2" name="radio" value="option2" checked/>
                            <TerminalFormCheckLabel color={'#fff'} htmlFor="radio2">За смену</TerminalFormCheckLabel>
                        </TerminalFormCheck>
                        <TerminalFormCheck>
                            <TerminalRadio size="lg" id="radio3" name="radio" value="option3" />
                            <TerminalFormCheckLabel htmlFor="radio3">За час</TerminalFormCheckLabel>
                        </TerminalFormCheck>
                    </RadioGroup>
                </Box>
            </Box>
            <FormGroup>
                <TerminalLabel htmlFor="form-group-input-local">Местоположение</TerminalLabel>
                <TerminalInput control id="form-group-input-local" />
            </FormGroup>
            <Box width={'50%'} m={'0 auto'}>
                <TerminalButton>Найти вакансии</TerminalButton>
            </Box>
        </Box>

    </Box>
);

export default TerminalSearch;
