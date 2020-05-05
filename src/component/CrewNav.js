import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import './CrewNav.css';

class CrewNav extends Component {
    render() {
        return (
            <div className="crew_nav">
                <div className="head">
                    <img src="image/1.jpg" alt="" />
                    <h5>대전대학교</h5>
                </div>
                <div className="body">
                    <Nav className="flex-column">
                        <Nav.Link href="/home">체육분과</Nav.Link>
                        <Nav.Link href="/home">문화분과</Nav.Link>
                        <Nav.Link href="/home">종교분과</Nav.Link>
                        <Nav.Link href="/home">교양분과</Nav.Link>
                        <Nav.Link href="/home">예술분과</Nav.Link>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default CrewNav;
