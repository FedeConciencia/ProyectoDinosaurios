import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import Navigation from "./Navigation";


const BatallaDino = (props) => {

    const [dato, setDato] = useState(null);

    const [dino,setDino] = useState({

        dino1:'',
        dino2:'',

    })

    useEffect(() => {

        getDinos()

    },[])

    //Metodo que se ejecuta en los input onChange, permite detectar el ingreso de datos:
    const handleInputChange = (event) => {

        setDino({

            ...dino,
            [event.target.name] : event.target.value

        })

    }

    //Metodo para obtener los datos a traves de la BD =>
    const getDinos = async () => {

        try{


            const response = await fetch("http://localhost:8080/Dinosaurios/DinosaurioServlet?action=buscarAll", {

                method:"GET",

            })

            const resJson = await response.json()

            console.log("DATOS API => ", resJson)

            setDato(resJson)


        }catch(error){

            console.log("Error => ", error)


        }


    }

    const batallaDino = () => {

        console.log("DINO 1 => ", dino.dino1)

        console.log("DINO 2 => ", dino.dino2)

        let dino1 = null

        let dino2 = null

        for(let i = 0; i < dato.length; i++){

            //Obtengo el objeto dino1 =>
            if(dino.dino1 === dato[i].nombre){

                dino1 = dato[i]


            }

            //Obtengo el objeto dino2 =>
            if(dino.dino2 === dato[i].nombre){

                dino2 = dato[i]


            }

        }

        //Definicion de la Batalla =>
        if(dino1.fuerza > dino2.fuerza){

            document.getElementById("ganador").innerHTML = "GANADOR " + (dino1.nombre).toUpperCase()

        }else if(dino2.fuerza > dino1.fuerza){

            document.getElementById("ganador").innerHTML = "GANADOR " + (dino2.nombre).toUpperCase()

        }else{

            document.getElementById("ganador").innerHTML = "EMPATE"

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

                <Alert.Heading className="alertTitle">BATALLA DINOSAURIOS</Alert.Heading>

                <br></br>
                <br></br>

                <Table className="tabla" striped bordered hover variant="dark">

                <tbody>


                    <tr>

                        <td className='celda'>DINO_1</td>
                        <td className='celda'>

                            <select name="dino1" onChange={handleInputChange}>

                                {dato.map((dino,i) => (

                                    <option key={i} value={dino.nombre}>{dino.nombre}</option>

                                ))}


                            </select>


                        </td>
                        <td className='celda'>VS</td>
                        <td className='celda'>DINO2</td>
                        <td className='celda'>

                            <select name="dino2" onChange={handleInputChange}>

                                {dato.map((dino,i) => (

                                    <option key={i} value={dino.nombre}>{dino.nombre}</option>

                                ))}    

                            </select>

                        </td>

                    </tr>

                    <tr>

                        <td className='celda' colSpan={5}><Button variant="danger" size="lg" onClick={batallaDino}>BATALLA</Button></td>


                    </tr>

                    <tr>

                        <td className='celda' colSpan={5}><h3 id="ganador" name="ganador"></h3></td>


                    </tr>


                </tbody>


                </Table>

                </Alert>

                </Container>

            </Fragment>



        )


    }



}


export default BatallaDino;

