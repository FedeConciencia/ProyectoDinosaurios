
import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import Navigation from "./Navigation";
import Card from 'react-bootstrap/Card'
import '../assets/css/tarjeta.css'


const Tarjeta  = (props) => {

    const [dato, setDato] = useState(null)

    useEffect(() => {

        

    },[])



    return (  

        <Fragment>

            <Container>

            <br></br>

           
            <Card style={{ width: '21rem' }}>
            <Card.Img className="imagenCard" variant="top" src={require(`../assets/img/${props.imagen}`)} />
            <Card.Body>
                <br></br>
                <Card.Title>{ props.nombre }</Card.Title>
                <br></br>
                <Button variant="primary" href={`/detalleDino/${props.id}`}>VER MAS</Button>
            </Card.Body>
            </Card>

           

            </Container>


        </Fragment>

    );

      

}
 
export default Tarjeta;
