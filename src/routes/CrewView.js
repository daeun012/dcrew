import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './CrewView.css';
class CrewView extends Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/crew/체육분과');
        }
    }
    render() {
        const { location } = this.props;
        console.log(location.state);
        if (location.state) {
            return (
                <Container fluid="lg" className="pt-3">
                    <Row>
                        <Col>
                            <div className="crew_view">
                                <div className="crew_info">
                                    <img src={location.state.poster} alt={location.state.title} />
                                    <div className="crew_detail">
                                        <h3>{location.state.title}</h3>
                                        <h5>{location.state.kind}</h5>
                                        <p>동아리 소개 어쩌구 저쩌구~~~</p>
                                    </div>
                                </div>
                                <div className="crew_activity"> 동아리 활동 내용..</div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return null;
        }
    }
}

export default CrewView;
