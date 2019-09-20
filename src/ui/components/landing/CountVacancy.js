import React from 'react'
import {Box, Typography} from "@smooth-ui/core-sc";
import { Container } from "../Layout";
import {TypographyUppercase} from "../Typography";

export const CountVacancy = (props) => {
    return (
        <Box>
            <Container pb={100} textAlign='center'>
                <Typography color='#5E57A7' variant='h1'  fontSize={{ xs: 70, md: 150}} fontWeight='bold'>{props.children}</Typography>
                <Box>
                    <TypographyUppercase color='#5E57A7'>{props.name}</TypographyUppercase>
                </Box>
            </Container>
        </Box>
    )
};
