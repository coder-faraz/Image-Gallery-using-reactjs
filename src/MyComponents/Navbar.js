
import React from 'react';
import PropTypes from "prop-types";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";      //to add CSS Styling of bootstrap components
import { Link } from 'react-router-dom';



function NavigationBar(props) {

    return (

        <Navbar className='fixed-top' bg={ props.useMode==='light'? 'light' : "dark" } variant={ props.useMode==='light'? 'light' : "dark"} expand="lg">
            <Navbar.Brand style={{ marginLeft: "10px" }}> { props.title } </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                {/* <LinkContainer to="/">
              <Nav.Link> Home </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link> About </Nav.Link>
            </LinkContainer> */}
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                    <Link className="nav-link" to="/science">Science</Link>
                    <Link className="nav-link" to="/cars">Cars</Link>
                    <Link className="nav-link" to="/sports">Sports</Link>
                    <Link className="nav-link" to="/flowers">Flowers</Link>
                    <Link className="nav-link" to="/fruits">Fruits</Link>
                    <Link className="nav-link" to="/monuments">Monuments</Link>
                </Nav>
            </Navbar.Collapse>
            <Form>
                <Form.Check type="switch"  style={{ marginRight: "10px" }} label={ props.useMode==='light'? 'Enable Dark Mode' : "Disable Dark Mode"} onClick={ props.toggler }/>
            </Form>
    </Navbar>
  );
}


NavigationBar.propTypes = {
    title: PropTypes.string,
    useMode: PropTypes.string,
}


export default NavigationBar;


