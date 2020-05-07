import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, Button, NavItem } from 'react-bootstrap';
import './Navigator.css';

function Navigator() {
    return (
        <Navbar bg="black" variant="black" expand="lg">
            <Container className="my_container" fluid="lg">
                <NavLink className="navbar-brand" to="/">
                    <img alt="" src="/logo192.png" width="30" height="30" className="d-inline-block align-top" /> Dcrew
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavItem>
                            <NavLink className="nav-link" exact={true} to="/">
                                홈
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/crew">
                                동아리 소개
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/band">
                                동아리 연합
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/community">
                                자유게시판
                            </NavLink>
                        </NavItem>
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
