import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import Navigation from "./Navigation";
import Image from 'react-bootstrap/Image'
import imagen from '../assets/img/Icono.jpg'
import "../assets/css/home.css"


const Home  = (props) => {

    const [dato, setDato] = useState(null)

    useEffect(() => {

        

    },[])


    return (  

        <Fragment>

            <Navigation></Navigation>

            <Container>

            <br></br>

            <Alert variant="success" className="body">

            <Alert.Heading className="alertTitle">JURASSIC WORLD</Alert.Heading>

            <br></br>
            <br></br>   

            <Row>

                <Col>
                
                <Image className="fotoIcono" src={imagen} rounded />
                
                </Col>

            </Row>

            <br></br> 

            <Row>

                <Col>

                <h3>Diviértete al Máximo en Jurassic Park</h3>    
                
                </Col>


            </Row>

            <br></br> 

            <Row>

                <Col>

                <h5>Entra a Jurassic Park y quédate asombrado/a frente a un mundo transformado por la ciencia después de 65 millones de años. Pero ten atención. La belleza de la isla esconde los peligros. Vive la aventura frente a frente con las criaturas más extraordinarias que han existido en el planeta tierra. Y este verano, prepárate para sentir la adrenalina de la cacería mientras aceleras a través de la jungla junto a los raptos en la nueva Jurassic World VelociCoaster.</h5>   
                
                </Col>


            </Row>

            <hr />

            <Row>

                <Col>

                <Button variant="danger" size="lg" href="/grillaDino">VER DINOSAURIOS</Button>

                </Col>


            </Row>

            </Alert>

            </Container>


        </Fragment>

    );

    

}
 
export default Home;