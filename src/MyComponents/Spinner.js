
import React from 'react';
import { Container } from 'react-bootstrap';
import loader from "./loading.gif";



const Spinner = () => {

    return (

        <Container style={{ textAlign: "center" }}>
            <img src={ loader } alt="Loading Spinner" />
        </Container>

    );
}


export default Spinner;
