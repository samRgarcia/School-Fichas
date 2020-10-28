import React from "react";
import {TextField} from '@material-ui/core';
import Avatar from "../../pics/avatar.svg";
import './styles.css';
import RegistroEmail from '../FormEmail';
import {useHistory } from 'react-router-dom'

const Login =()=>{
    const history =useHistory();

    const validarUser=(evt:any)=>{
        evt.preventDefault();
        history.replace('/dashboard')
    }

    return(
        <>
        <div className='form-login-box'>
            <figure >
                <img className="avatar-login" src={Avatar} alt=""/>
            </figure>
            <h1>BIENVENIDO</h1>
            <form onSubmit={validarUser}>
                <TextField className="input-login" label="email" size={"small"} variant={"outlined"}/>
                <TextField className="input-login" label="password" size={"small"} variant={"outlined"}/>
            <input type="submit" value={"iniciar"}/>
                <a href="#">Recuperar contraseña</a> <br/>
                <a href="#"></a>
                <RegistroEmail/>
            </form>
        </div>


        </>
    )
}

export default Login;