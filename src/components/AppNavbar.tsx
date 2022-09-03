import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

const AppNavbar = ({children}:any) => {
    return (
        <Navbar bg="dark" variant="dark" >
            <Container>
                <Nav className="me-auto">
                    {children}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;