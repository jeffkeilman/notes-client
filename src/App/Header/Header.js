// NOTE: Must import any Bootstrap components you intend to use in here/within
// custom component files.
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = (props) => {
    return (
        <Navbar fluid inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Notes</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <NavItem eventKey={1} href="/">Notes</NavItem>
                <NavItem eventKey={2} href="/">Sign In</NavItem>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;