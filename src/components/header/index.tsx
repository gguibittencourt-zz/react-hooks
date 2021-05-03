import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Hooks</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item className="nav-link" as={Link} to="/">Home</Nav.Item>
                    <Nav.Item className="nav-link" as={Link} to="/tasks">Tasks</Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;