import React, {Component, Fragment, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Label from "react-bootstrap/FormLabel";
import { useHistory } from "react-router-dom"

const Navigation = () => {

    const [dato,setDato] = useState({

        nombre:null,

    })

    //HISTORY REDIRECCIONAR POR PAGINA =>
    let history = useHistory()

    //ESTE METODO SE PUEDE USAR PARA CAPTURAR LA INFORMACION INGRESADA EN EL FORM:
    const handleInputChange = (event) => {

        setDato({

            ...dato,
            [event.target.name] : event.target.value

        })


    }

    const obtenerNombre = () => {

        try{

            if(dato.nombre !== null && dato.nombre !== ""){

                console.log("OBTENER NOMBRE => ", dato.nombre)

                //Redirecciono y paso los datos a traves de un search =>
                history.push({
                    pathname: '/grillaDino',
                    search: '',
                    search: `?nombre=${dato.nombre}`,
                })


            }else{

                alert("Debe ingresar datos en el buscador");


            }


        }catch(error){

            console.log("Error => ", error)

        }


    }



    return (

        <Fragment>

        <Navbar bg="primary" variant="dark">

            <Navbar.Brand href="/">HOME</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/grillaDino">DINOSAURIOS</Nav.Link>
            <Nav.Link href="/batallaDino">BATALLA DINOSAURIOS</Nav.Link>
            <Nav.Link href="/admin">ADMIN</Nav.Link>
            </Nav>
            <Form className="d-flex">
                <Form.Label>DINOSAURIO:</Form.Label>&nbsp;&nbsp;
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    name="nombre"
                    onChange={handleInputChange}
                />&nbsp;&nbsp;
                <Button variant="outline-success" onClick={obtenerNombre}>SEARCH</Button>&nbsp;&nbsp;
            </Form>

                
        </Navbar>

        </Fragment>  

    );  
}

export default Navigation;