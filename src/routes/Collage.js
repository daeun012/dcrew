import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CrewList from '../component/CrewList.js';
import CrewNav from '../component/CrewNav.js';
import './Collage.css';

function Collage() {
    return (
        <Container bsPrefix="collage_container">
            <Row bsPrefix="collage_row">
                <Col bsPrefix="collage_col_nav">
                    <CrewNav></CrewNav>
                </Col>
                <Col bsPrefix="collage_col_list">
                    <CrewList></CrewList>
                </Col>
            </Row>
        </Container>
    );
}

export default Collage;
