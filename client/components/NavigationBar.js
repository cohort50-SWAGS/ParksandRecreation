// create navbar component from react-bootstrap
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function NavigationBar(props) {
    return (
    <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
        <Container fluid>
            <Navbar.Brand>Outdoorsly</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className="me-auto">
                <Nav.Link href='main/searchTrips'>Search Trips</Nav.Link>
                <Nav.Link href='main/SaveTrips'>Saved Trips</Nav.Link>
            </Nav>
            </ Navbar.Collapse>
        </Container>
    </Navbar>
    )

}

export default NavigationBar