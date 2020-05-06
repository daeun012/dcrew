import React,{Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CrewList from '../component/CrewList.js';
import CrewNav from '../component/CrewNav.js';
import './Crew.css';

class Crew extends Component {
    state={
        crew_nav:["▶ 체육분과","▶ 문화분과","▶ 종교분과","▶ 교양분과","▶ 예술분과",]
    }
    render(){
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
}

export default Crew;
