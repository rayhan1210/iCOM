import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import "./Navbar.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
    return(
        <Navbar fixed='top' expand='lg' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/" className="nav"> iCOM </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="resposive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav"> {/* margin start to have it positioned in right hand side*/}
                    <Nav.Link className="px-3 bg-info">
                        <Link className="nav" to="/login">Login</Link>
                    </Nav.Link>
                    <Nav.Link className="px-3 bg-secondary">
                        <Link className="nav" to="/signup">Sign Up</Link>
                    </Nav.Link>
                    
                        {/* <Nav.Link className="px-3 bg-info"></Nav.Link> */}
                    </Nav>  
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    );
}

export default NavBar;
