import React from 'react';
import './Header.css';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const {user,logOut} = useAuth();
    return (
        
            <Navbar className="py-3" collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
                <Container fluid={true}>
                <Navbar.Brand href="#home"><img src="./lifecare-logo.png" alt="" width="180" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-wrap">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/telemedicine">TeleMedicine</Nav.Link>
                    {user.email ?
                    <button onClick={logOut} className="btn btn-warning">logout</button>:
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                    <Navbar.Text>
                        Signed in as: <a href="/login">{user?.displayName}</a>
                    </Navbar.Text>
                    <br /><br />
                    <Link className="button mx-2" to="/appointment">MAKE AN APPOINTMENT</Link>
                </Navbar.Collapse>
                
                </Container>
            </Navbar>
        
    );
};

export default Header;