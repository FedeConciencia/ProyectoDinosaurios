import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import Navigation from "./Navigation";
import Tarjeta from "./Tarjeta"
import '../assets/css/grillaDino.css'
import { useLocation } from "react-router-dom";


const GrillaDino  = (props) => {

    

    //Obtengo los datos pasados por search URL =>
    let {search} = useLocation();
    let query = new URLSearchParams(search)

    const [nomUrl, setNomUrl] = useState(query.get("nombre"))
   
    const [dato, setDato] = useState(null)


    useEffect(() => {

        getDino()

        //De esta forma esta a la escucha de las modificaciones en los search URL =>
        setNomUrl(query.get("nombre"))


    },[query.get("nombre")])

    const getDino = async () => {

        try{

            const nomURL = query.get("nombre")

            if(nomURL === null || nomURL === undefined){

                //Importante ver el LocalHost 8080 0 3000 que se abre Proyecto Web Netbeans =>
                const response = await fetch("http://localhost:8080/Dinosaurios/DinosaurioServlet?action=buscarAll", {

                    method:"GET",
                
                
                })

                const resJson = await response.json();

                console.log("DATOS API => ", resJson)

                setDato(resJson)

            }else{

                  //Importante ver el LocalHost 8080 0 3000 que se abre Proyecto Web Netbeans =>
                  const response = await fetch("http://localhost:8080/Dinosaurios/DinosaurioServlet?action=buscarAll", {

                    method:"GET",
                
                
                })

                const resJson = await response.json();

                console.log("DATOS API => ", resJson)

                const encontrado = resJson.filter(function (element){

                    return (element.nombre).toString() === (nomURL).toString()
               
               })

               setDato(encontrado)


            }    


        }catch(error){

            console.log(error)

        }


    }

    if(dato === null){

        return null

    }else{

        //reutilizar el componente tarjeta y le paso los datos =>
        const card = dato.map((dino, i) => {
            return (
              <Tarjeta
                key = { dino.idDino }
                id = { dino.idDino }
                nombre = { dino.nombre}
                imagen = { dino.imagen }
              ></Tarjeta>
            );
        });

        return (  

            <Fragment>

                <Navigation></Navigation>

                <Container>

                <br></br>

                <Alert variant="success" className="body">

                <Alert.Heading className="alertTitle">DINOSAURIOS</Alert.Heading>

                <br></br>
                <br></br>   

                  
                <Row xs={1} md={3} className="g-4">
                    { card }
                </Row>

                </Alert>

                </Container>


            </Fragment>

        );

    }    

}
 
export default GrillaDino;