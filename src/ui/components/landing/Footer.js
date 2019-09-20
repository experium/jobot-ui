import React from 'react'
import { Box } from "@smooth-ui/core-sc";
import { Container } from "../Layout";

export const Footer = (props) => {
    return (
        <Box backgroundColor='#fff'>
            <Container py={20}>
                <Box color='#5E57A7'>{props.children}</Box>
            </Container>
        </Box>
    )
};
