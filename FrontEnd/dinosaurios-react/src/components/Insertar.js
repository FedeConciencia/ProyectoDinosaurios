import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import Navigation from "./Navigation";
import Form from "react-bootstrap/Form";
import {useForm} from 'react-hook-form';
import moment from 'moment';
import '../assets/css/registrar.css'

//Form Insertar Datos =>
const Insertar = (props) => {

    //react-hook-form =>
    const {register, formState: { errors }, handleSubmit} = useForm()

    const [dato, setDato] = useState({

        nombre:'',
        imagen:'',
        info:'',
        fuerza:'',
        
    })

    useEffect(() => {



    },[])

    //Metodo para obtener los datos ingresados en el form =>
    const handleInputChange = (event) => {

        setDato({

            ...dato,
            [event.target.name] : event.target.value

        })

    }

    //Metodo para gestionar el envio de datos al Servlet y BD =>
    const enviarDatos = (dato, event) => {

            
        insertar(dato)

        event.preventDefault();
        event.target.reset();

    
    }

    //Metodo para insertar Datos =>
    const insertar = async (dato) => {

        try{
            const response = await axios("http://localhost:8080/Dinosaurios/DinosaurioServlet", {


                method:"GET",
                params:{

                    action:"insertar",
                    nombre:dato.nombre,
                    imagen:dato.imagen,
                    info:dato.info,
                    fuerza:dato.fuerza,
                    fechaAlta:moment().format('YYYY-MM-DD'), 
                    fechaBaja:moment("1900-01-01").format('YYYY-MM-DD'), 
                    estado:"activo",

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            alert("Datos Insertados con Exito en la Base de Datos.")

        }catch(error){

            console.log(error)

            alert("Error los datos no fueron insertados con exito.")

        }    


    }


    //Validacion Personalizada que no permite que se ingresen 2 nombres iguales a la BD =>

    const validarNombre = async (nombre) => {

        try{

            const response = await fetch("http://localhost:8080/Dinosaurios/DinosaurioServlet?action=buscarAll", {

                method:"GET"

            })

            const resJson = await response.json()

            const listaDino = resJson

            let validar = true

            for(let i = 0; i < listaDino.length; i++){

                if((listaDino[i].nombre).toString() === (nombre).toString()){

                    validar = false;
                    break;

                }


            }

            //Si el dato.nombre ingresado en form es igual a algun nombre de la BD retorna falsa y no permite la validacion =>
        
            return validar;


        }catch(error){

            console.log("Error =>", error)

        }

    
    }


    if(dato === null){

        return null


    }else{

        return(

            <Fragment>

                <Navigation></Navigation>

                <br></br>

                <Alert variant="success">

                <div className="body">   

                <Alert.Heading className="titulo">FORMULARIO ADMIN REGISTRO DINOSAURIO</Alert.Heading>
            
           
                <br></br>
                <br></br>  

                <Form onSubmit={handleSubmit(enviarDatos)}>

                <Row>

                    <Col className="col-md-3">
                        
                        <label className="my-2">Nombre: </label>

                    </Col>

                    <Col>
                        
                        <input 
                            type="text"
                            name="nombre"
                            onChange={handleInputChange}
                            placeholder="Ingrese el Nombre"
                            className="form-control my-2"
                            {...register("nombre", { 

                                required:{
                                    value: true,
                                    message: 'Campo Obligatorio' 
                                },

                                validate:{

                                    validate1:validarNombre,

                                }

                            })}   

                        >
                        </input>


                    </Col>

                    <Col className="col-md-3">

                            
                        <span className="text-danger text-small d-block mb-2">
                        {errors.nombre && errors.nombre.message}
                        </span>

                        <span className="text-danger text-small d-block mb-2">
                        {
                            errors.nombre && errors.nombre.type === "validate1" && (
                                <div className="error">El nombre ingresado ya existe</div>
                            )
                        }
                        </span>

                    </Col>


                </Row>

                <Row>

                    <Col className="col-md-3">
                        
                        <label className="my-2">Imagen: </label>

                    </Col>

                    <Col>
                        
                        <input 
                            type="text"
                            name="imagen"
                            onChange={handleInputChange}
                            placeholder="Ingrese la imagen"
                            className="form-control my-2"
                            {...register("imagen", { 

                                required:{
                                    value: true,
                                    message: 'Campo Obligatorio' 
                                },

                               
                            })}   

                        >
                        </input>


                    </Col>

                    <Col className="col-md-3">

                            
                        <span className="text-danger text-small d-block mb-2">
                        {errors.imagen && errors.imagen.message}
                        </span>

                
                    </Col>


                </Row>

                <Row>

                    <Col className="col-md-3">
                        
                        <label className="my-2">Info: </label>

                    </Col>

                    <Col>
                        
                        <input 
                            type="text"
                            name="info"
                            onChange={handleInputChange}
                            placeholder="Ingrese la info"
                            className="form-control my-2"
                            {...register("info", { 

                                required:{
                                    value: true,
                                    message: 'Campo Obligatorio' 
                                },

                          
                            })}   

                        >
                        </input>


                    </Col>

                    <Col className="col-md-3">

                            
                        <span className="text-danger text-small d-block mb-2">
                        {errors.info && errors.info.message}
                        </span>


                    </Col>


                </Row>

                <Row>

                    <Col className="col-md-3">
                        
                        <label className="my-2">Fuerza: </label>

                    </Col>

                    <Col>
                        
                        <input 
                            type="number"
                            name="fuerza"
                            onChange={handleInputChange}
                            placeholder="Ingrese la fuerza"
                            className="form-control my-2"
                            min="1"
                            max="10"
                            {...register("fuerza", { 

                                required:{
                                    value: true,
                                    message: 'Campo Obligatorio' 
                                },


                            })}   

                        >
                        </input>


                    </Col>

                    <Col className="col-md-3">

                            
                        <span className="text-danger text-small d-block mb-2">
                        {errors.fuerza && errors.fuerza.message}
                        </span>

                    
                    </Col>


                </Row>

                <Row>

                    <Col className='boton'>
                        <br></br>
                        <br></br>
                        <Button type="submit" variant="primary" size="lg">REGISTER</Button>&nbsp;&nbsp;
                        <Button type="button" variant="danger" size="lg" href={`/admin`}>VOLVER</Button>

                    </Col>

                </Row>

            
                </Form>

                </div> 

                </Alert>


            </Fragment>



        )


    }



}


export default Insertar;

