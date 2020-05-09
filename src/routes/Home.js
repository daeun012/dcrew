import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ImageSlider from '../component/ImageSlider.js';

class Home extends Component {
    render() {
        const { match, location, history } = this.props;
        return (
            <Container fluid="lg" className="pt-3">
                <Row>
                    <Col>
                        <ImageSlider></ImageSlider>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Home;
