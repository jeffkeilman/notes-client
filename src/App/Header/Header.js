// NOTE: Must import any Bootstrap components you intend to use in here/within
// custom component files.
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Navbar fluid inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/notes'>Notes</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav pullRight>
                    <LinkContainer exact to='/notes'>
                        <NavItem eventKey={1}>Notes</NavItem>
                    </LinkContainer>
                    <LinkContainer to='/sign-in'>
                        <NavItem eventKey={2}>Sign In</NavItem>
                    </LinkContainer>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;