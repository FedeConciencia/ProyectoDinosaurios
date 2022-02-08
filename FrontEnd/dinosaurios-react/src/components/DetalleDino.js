
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
import '../assets/css/detalle.css'
import moment from 'moment';


const DetalleDino = (props) => {

    const [dato,setDato] = useState(null);

    useEffect(() => {

        getDino()

    },[])

    const getDino = async () => {

        try{

            const idDino = props.match.params.id;

            console.log("ID_DINO => ", idDino)

            const response = await axios(`http://localhost:8080/Dinosaurios/DinosaurioServlet`, {

                method:"GET",
                params:{

                    action:"buscarOne",
                    idDino:idDino,


                }


            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            setDato(resJson)


        }catch(error){


            console.log("Error => ", error)

        }

    }


    if(dato === null){

        return null

    }else{

        return(

            <Fragment>

                <Navigation></Navigation>

                <Container>

                <br></br>

                <Alert variant="success" className="body">

                <Alert.Heading className="alertTitle">DETALLE DINOSAURIO</Alert.Heading>

                <br></br>
                <br></br>  

                <Row>

                    <Col>
                    
                    <h3>{(dato.nombre).toUpperCase()}</h3>

                    </Col>

                    <Col>

                    

                    </Col>
                    
                </Row> 

                <br></br>

                <Row>

                    <Col>

                    <Image className="fotoDetalle" src={require(`../assets/img/${dato.imagen}`)} rounded />
                    
                    </Col>

                    <Col>

                    <Row>

                        <Col>

                           
                            <h5>FUERZA:</h5>
                            <br></br>
                            <h5>FECHA ALTA:</h5>
                            <br></br>
                            <h5>FECHA BAJA:</h5>
                            <br></br>
                            <h5>ESTADO:</h5>
                            <br></br>
                            <h5>INFO:</h5>
                            <br></br>
                            
                            </Col>

                            <Col>

                            <h5>{dato.fuerza}</h5>
                            <br></br>
                            <h5>{moment(dato.fechaAlta).subtract(1,'M').format('YYYY-MM-DD')}</h5>
                            <br></br>
                            <h5>{moment(dato.fechaBaja).subtract(1,'M').format('YYYY-MM-DD')}</h5>
                            <br></br>
                            <h5>{dato.estado}</h5>
                            <br></br>
                            <h5>{dato.info}</h5>
                            <br></br>
                            
                            </Col>

                        </Row>

                    </Col>

                </Row>

                <br></br>

                <Row>

                    <Col>

                    <Button variant="danger" size="lg" href="/grillaDino">VOLVER</Button>
                    
                    </Col>

                </Row>
                
                </Alert>

                </Container>


            </Fragment>


        )


    }



}


export default DetalleDino;

