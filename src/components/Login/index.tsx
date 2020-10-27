import React from "react";
import {TextField} from '@material-ui/core';
import Avatar from "../../pics/avatar.svg";
import './styles.css'


const Login =()=>{
    return(
        <div className='form-login-box'>
            <figure >
                <img className="avatar-login" src={Avatar} alt=""/>
            </figure>
            <h1>BIENVENIDO</h1>
            <form >
                <TextField className="input-login" label="email" size={"small"} variant={"outlined"}/>
                <TextField className="input-login" label="password" size={"small"} variant={"outlined"}/>
            <input type="submit" value={"iniciar"}/>
                <a href="#">Recuperar contraseña</a> <br/>
                <a href="#">Registrarse</a>
            </form>
        </div>
    )
}

export default Login;