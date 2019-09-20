import React from 'react'
import { Col, Row } from "@smooth-ui/core-sc"
import { Button } from "../../Button"

export const ButtonSearch = (props) => {
    return (
        <Row>
            <Col xs={12} md={6} lg={5} mt={15}>
                <Row justifyContent={{ xs: 'center', md: 'left'}}>
                    <Col xs="auto" flex="none">
                        <Button variant='info' size="lg" display="inline-block" position="relative" zIndex={100} onClick={props.onClick}>
                            {props.children}
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
};
