import React, { useState, useEffect, Fragment } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Table from 'react-bootstrap/Table'
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom"
import moment from 'moment';


const EliminarLogic = (props) => {

    const [dato,setDato] = useState(null);

    //HISTORY REDIRECCIONAR POR PAGINA =>
    let history = useHistory()

    useEffect(() => {

        eliminarLogic()

    },[])

    //Metodo para eliminar logicamente registro x servlet =>
    const eliminarLogic = async () => {

        try{

            const idDino = props.match.params.id;

            const response = await axios("http://localhost:8080/Dinosaurios/DinosaurioServlet", {


                method:"GET",
                params:{

                    action:"eliminarLogico",
                    idDino:idDino,
                    fechaBaja:moment().format('YYYY-MM-DD'), 

                }

            })

            const resJson = await response.data

            console.log("DATOS API => ", resJson)

            //Redirecciono y paso los datos a traves de un search =>
            history.push({
                pathname: '/admin',
                search: '',
            })


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


            </Fragment>



        )


    }



}


export default EliminarLogic;

