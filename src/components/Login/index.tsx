import React from "react";
import {TextField} from '@material-ui/core';
import Avatar from "../../pics/avatar.svg";
import './styles/styles.css';
import RegistroEmail from '../FormEmail';
import {useHistory } from 'react-router-dom'

const Login =()=>{
    const history =useHistory();

    const validarUser=(evt:any)=>{
        evt.preventDefault()
        history.replace('/home')
    }

    return(
        <>
        <div className='form-login-box'>
            <figure >
                <img className="avatar-login" src={Avatar} alt=""/>
            </figure>
            <h1>BIENVENIDO</h1>
            <form >
                <TextField className="input-login" label="Correo" size={"small"} variant={"outlined"}/>
                <TextField className="input-login" label="Contraseña" size={"small"} variant={"outlined"}/>
            <input type="submit" onClick={validarUser} value={"Iniciar"}/>
                <a href="#">Recuperar contraseña</a> <br/>
                <a href="#"></a>
                <RegistroEmail/>
            </form>
        </div>


        </>
    )
}

export default Login;
