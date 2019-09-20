import React from 'react'
import { Work } from "styled-icons/material";
import { Col, Row, FormGroup, Input,  } from "@smooth-ui/core-sc"
import { FormGroupIcon } from "../../Form"

export const InputSearch = (props) => {
    return (
        <Row>
            <Col xs={12} md={6} mb={{ md: '10px', xs: '10px' }} lg={5}>
                <FormGroup>
                    <FormGroupIcon landing='true'>
                        <Work />
                    </FormGroupIcon>
                    <Input display="inline-block" position="relative" zIndex={100} size="lg" icon='true' control landing='true' placeholder={props.placeholder} onChange={props.onChange} />
                </FormGroup>
            </Col>
        </Row>
    )
};
