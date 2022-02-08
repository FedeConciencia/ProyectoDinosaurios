import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import Navigation from "./Navigation";
import '../assets/css/admin.css'
import moment from 'moment';


const AdminPrincipal = (props) => {

    const [dato, setDato] = useState(null);

    useEffect(() => {

        getDinos()

    },[])


    const getDinos = async () => {

        try{

            const response = await fetch("http://localhost:8080/Dinosaurios/DinosaurioServlet?action=buscarAll",{

                method:"GET",

            })

            const resJson = await response.json()

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

            <br></br>

            <Alert variant="success">

            <div className="body">   

            <Alert.Heading className="alertTitle">ADMIN PRINCIPAL</Alert.Heading>

            <br></br>
            <br></br>  

            <Table className="tabla" striped bordered hover variant="dark">

                <thead>

                        <tr>

                            <th className="celda">Id</th>
                            <th className="celda">Nombre</th>
                            <th className="celda">Imagen</th>
                            <th className="celda">Info</th>
                            <th className="celda">Fuerza</th>
                            <th className="celda">Fecha Alta</th>
                            <th className="celda">Fecha Baja</th>
                            <th className="celda">Estado</th>
                            <th className="celda">Acciones</th>

                        </tr>

                </thead>

                <tbody>

                    {dato.map((dino,i) => (

                        <tr key={i}>

                            <td className="celda">{dino.idDino}</td>
                            <td className="celda">{dino.nombre}</td>
                            <td className="celda">{dino.imagen}</td>
                            <td className="celdaInfo">{dino.info}</td>
                            <td className="celda">{dino.fuerza}</td>
                            <td className="celda">{moment(dino.fechaAlta).subtract(1,'M').format('YYYY-MM-DD')}</td>
                            <td className="celda">{moment(dino.fechaBaja).subtract(1,'M').format('YYYY-MM-DD')}</td>
                            <td className="celda">{dino.estado}</td>
                            <td className="celda">
                                <Button variant="warning" size="sm" href={`/actualizar/${dino.idDino}`}>ACTUALIZAR</Button>&nbsp;&nbsp;
                                <Button variant="danger" size="sm" href={`/eliminarLog/${dino.idDino}`}>ELIMINAR</Button>
                            </td>


                        </tr>

                    ))}   

                </tbody>

            </Table>

            <Button variant="success" size='lg' href="/insertar">INSERTAR</Button>&nbsp;&nbsp;
            <Button variant="danger" size='lg' href="/">VOLVER</Button>
 
            </div> 

            </Alert>

            </Fragment>

        )


    }

}

export default AdminPrincipal;


