// NOTE: Must import any Bootstrap components you intend to use in here/within
// custom component files.
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return(
        <Navbar fluid inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Notes</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav pullRight>
                <LinkContainer exact to='/'>
                    <NavItem eventKey={1}>Notes</NavItem>
                </LinkContainer>
                <LinkContainer to='/sign-in'>
                    <NavItem eventKey={2}>Sign In</NavItem>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;