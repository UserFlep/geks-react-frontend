import React, {FC, ReactNode} from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

interface INavbarProps {
    children: ReactNode
}
const AppNavbar: FC<INavbarProps> = ({children}) => {
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