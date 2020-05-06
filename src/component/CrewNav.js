import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CrewNav.css';

class CrewNav extends Component {
    state={
        
    }
    render() {
        return (
            <div className="crew_nav">
                <div className="head">
                    <img src="logo/대전대_logo.jpg" alt="대전대학교" title="대전대학교" />
                    <h5 style={{fontWeight:"bold"}}>대전대학교</h5>
                </div>
                <div className="body">
                    <Nav className="flex-column">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/crew/1">▶ 체육분과</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/crew/2">▶ 문화분과</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/crew/3">▶ 종교분과</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/crew/4">▶ 교양분과</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/crew/5">▶ 예술분과</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </div>
        );
    }
}

export default CrewNav;
