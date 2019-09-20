import React from 'react'
import { Col, Box, Typography } from "@smooth-ui/core-sc";

export const Title = (props) => {
    return (
        <Col xs={12} md={12} lg={12} pt={{ xs: 15, md: 70 }} order={{ xs: 2, md: 3}}>
            <Box backgroundColor={{ xs: 'rgba(255,255,255,0.4)', md: 'transparent' }} textAlign={{ xs: 'center', md: 'left'}}>
                <Typography variant="h1" color="#5E57A7" display="inline-block" position="relative" zIndex={100} fontSize={{ xs: 30, md: 50}}>
                    {props.children}
                </Typography>
            </Box>
        </Col>
    )
};
