import React,{Component} from 'react';
import {Link} from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';


function Navigator(location){
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to="/home" active={location.pathname === '/home'}>
            <img
                alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
            Dcrew
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-center" >
                <Nav.Link as={Link} to="/home" active={location.pathname === '/home'}>Home</Nav.Link>
                <Nav.Link as={Link} to="/collage" active={location.pathname === '/collage'}>Collage</Nav.Link>
                <Nav.Link as={Link} to="/board" active={location.pathname === '/board'}>Board</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigator;