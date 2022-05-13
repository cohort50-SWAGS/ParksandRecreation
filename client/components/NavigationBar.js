// create navbar component from react-bootstrap
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

function NavigationBar(props) {
    const clearUser = () => {
        localStorage.removeItem('username');
        return;
    };

    return (
    <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
        <Container fluid>
            <Navbar.Brand>Outdoorsly</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="me-auto">
            <Link style={{color: 'white', paddingRight: '10px', textDecoration: 'none'}} to='searchTrips'>Search Trips</ Link>
            {/* <Nav.Link as={NavLink} to="/bills">Dividas</Nav.Link> */}
              <Link style={{color: 'white', paddingRight: '10px', textDecoration: 'none'}} to='savedTrips'>Saved Trips</ Link> 
            </Nav>
            <Link style={{color: 'white', padding: '2px 5px', textDecoration: 'none', border: '1px solid white', borderRadius: '7px'}}  to='/' onClick={clearUser}>Logout</ Link> 
            </ Navbar.Collapse>
        </Container>
    </Navbar>
    )

}

export default NavigationBar