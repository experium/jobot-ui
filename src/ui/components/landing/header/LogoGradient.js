import React from 'react'
import { Col } from "@smooth-ui/core-sc";


import logo from '../../../../assets/img/logo-gradient.svg';

export function LogoGradient() {
    return (
        <Col xs={12} md={8} lg={8} order={{ xs: 1, md: 1}} textAlign={{ xs: 'center', md: 'left'}} display="inline-block" position="relative" zIndex={100}>
            <img src={logo} width={220} alt=""/>
        </Col>
    )
}
