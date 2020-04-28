import React,{Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import ImageSlider from '../component/ImageSlider.js';


class Home extends Component {
    render(){
        return(
            <Container fluid="lg">
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