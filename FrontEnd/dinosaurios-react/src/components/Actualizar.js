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
import moment from 'moment';
import {useForm} from 'react-hook-form';



const Actualizar = (props) => {

    //Validar formulario con Libreria useForm =>
    const {register, formState: { errors }, handleSubmit, setValue} = useForm({


    })

    const [dato,setDato] = useState({

        nombre:'',
        imagen:'',
        info:'',
        fuerza:'',
        fechaAlta:'',
        fechaBaja:'',
        estado:''

    });

    useEffect(() => {

        getOneDino()

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

            
        actualizar(dato)

        event.preventDefault();
        event.target.reset();

    
    }

    //Metodo para actualizar Datos Servlet - Base de datos =>
    const actualizar = async (dato) => {

        try{

            const idDino = props.match.params.id

            const response = await axios("http://localhost:8080/Dinosaurios/DinosaurioServlet", {

                method:"GET",
                params:{

                    action:"actualizar",
                    idDino:idDino,
                    nombre:dato.nombre,
                    imagen:dato.imagen,
                    info:dato.info,
                    fuerza:dato.fuerza,
                    fechaAlta:dato.fechaAlta,
                    fechaBaja:dato.fechaBaja,
                    estado:dato.estado,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            alert("Datos actualizados con exito.")

        }catch(error){

            console.log("Error => ", error)

            alert("No es posible gestionar actualizacion de datos.")

        }


    }

    //Metodo para Obtener One Dino desde el Servlet Base de Datos =>
    const getOneDino = async () => {

        try{

            const idDino = props.match.params.id

            const response = await axios("http://localhost:8080/Dinosaurios/DinosaurioServlet", {

                method:"GET",
                params:{

                    action:"buscarOne",
                    idDino:idDino,

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            setDato(resJson)

            //Pasar los datos obtenidos al form con setValue =>

            setValue('nombre', resJson.nombre)
            setValue('imagen', resJson.imagen)
            setValue('info', resJson.info)
            setValue('fuerza', resJson.fuerza)
            setValue('fechaAlta', moment(resJson.fechaAlta).subtract(1, 'M').format('YYYY-MM-DD'))
            setValue('fechaBaja', moment(resJson.fechaBaja).subtract(1, 'M').format('YYYY-MM-DD'))
            setValue('estado', resJson.estado)


        }catch(error){

            console.log("Error => ", error)


        }


    }

    //Metodo validar estado (activo-inactivo) =>
    const validarEstado = (estado) => {

        let validar = false

        if(estado === "activo"){

            validar = true;

        }else if(estado === "inactivo"){

            validar = true;

        }

        return validar;


    }

    //Metodo para validar que el nombre ingresado ya no se encuentre en la base de datos como "Activo" =>
    const validarNombre = async (nombre) => {

        try{

            let validar = true

            const idDino = props.match.params.id

            const response = await fetch("http://localhost:8080/Dinosaurios/DinosaurioServlet?action=buscarAll", {

                method:"GET"


            })

            const resJson = await response.json()

            console.log("DATOS API => ", resJson)

            for(let i = 0; i < resJson.length; i++){

                //Si el idDino es distinto al id pasado por parametro:
                if((idDino).toString() !== (resJson[i].idDino).toString()){

                    if(nombre === resJson[i].toString()){

                        validar = false;
                        break;

                    }


                }

            }


        }catch(error){

            console.log("Error => ", error)

        }


    }




    if(dato === null){

        return null


    }else{

        return(

            <Fragment>

            <Container>
    
            <Alert variant="success" className="body">
    
                <br></br>
                <br></br>
    
                <Alert.Heading className="titulo">FORMULARIO ADMIN ACTUALIZACION DINOSAURIO</Alert.Heading>
                
               
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
                                    <div className="error">El nombre ingresado ya existe.</div>
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
                            placeholder="Ingrese la Imagen"
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
                            placeholder="Ingrese la Info"
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
                            placeholder="Ingrese la Fuerza"
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


                    <Col className="col-md-3">
                        
                        <label className="my-2">Fecha de Alta: </label>

                    
                    </Col>

                    <Col>
                        
                        <input 
                            type="date"
                            name="fechaAlta"
                            onChange={handleInputChange}
                            placeholder="Ingrese la Fecha de Alta 2020-11-05"
                            className="form-control my-2"
                            {...register("fechaAlta", { 

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
                            {errors.fechaAlta && errors.fechaAlta.message}
                            </span>

                    </Col>

                </Row>

                <Row>


                    <Col className="col-md-3">
                        
                        <label className="my-2">Fecha de Baja: </label>

                    
                    </Col>

                    <Col>
                        
                        <input 
                            type="date"
                            name="fechaBaja"
                            onChange={handleInputChange}
                            placeholder="Ingrese la Fecha de Baja 2020-11-05"
                            className="form-control my-2"
                            {...register("fechaBaja", { 

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
                            {errors.fechaBaja && errors.fechaBaja.message}
                            </span>

                    </Col>

                </Row>

                <Row>


                    <Col className="col-md-3">
                        
                        <label className="my-2">Estado: </label>

                    
                    </Col>

                    <Col>
                        
                        <input 
                            type="text"
                            name="estado"
                            onChange={handleInputChange}
                            placeholder="Ingrese el estado (activo-inactivo)"
                            className="form-control my-2"
                            {...register("estado", { 

                                required:{
                                    value: true,
                                    message: 'Campo Obligatorio' 
                                },

                                validate:{

                                    validate1:validarEstado,

                                }

                            })}   

                        >
                        </input>
                    
                    
                    </Col>

                    <Col className="col-md-3">

                            
                            <span className="text-danger text-small d-block mb-2">
                            {errors.estado && errors.estado.message}
                            </span>

                            <span className="text-danger text-small d-block mb-2">
                            {
                                errors.estado && errors.estado.type === "validate1" && (
                                    <div className="error">El estado es incorrecto.</div>
                                )
                            }
                            </span>

                    </Col>

                </Row>

                <Row>

                    <Col ClassName='boton'>
                        <br></br>
                        <br></br>
                        <Button type="submit" variant="primary" size="lg">ACTUALIZAR</Button>&nbsp;&nbsp;
                        <Button type="button" href={`/admin`} variant="danger" size="lg">VOLVER</Button>

                    </Col>


                </Row>




                </Form>

                <br></br>
                <br></br>
                

            </Alert>

            </Container>

            </Fragment>    

        )


    }



}


export default Actualizar;

