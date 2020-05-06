import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import './Navigator.css';

function Navigator() {
    return (
        <Navbar bg="black" variant="black" expand="lg">
            <Container className="my_container" fluid="lg">
                <Navbar.Brand as={Link} to="/">
                    <img alt="" src="/logo192.png" width="30" height="30" className="d-inline-block align-top" /> Dcrew
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">
                                홈
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/crew">
                                동아리
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/board">
                                동아리 연합
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/community">
                                자유게시판
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <div className="button_nav">
                        <Button size="sm" variant="outline-primary" style={{ marginRight: '5px' }}>
                            로그인
                        </Button>{' '}
                        <Button size="sm" variant="primary">
                            회원가입
                        </Button>{' '}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigator;
