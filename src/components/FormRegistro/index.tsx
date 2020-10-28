import React from "react";
import {Formik,Form} from 'formik';
import * as Yup from 'yup';

interface InfoForm {
    nombre:string,
    apellidoPaterno:string,
    apellidoMaterno:string,
    contrasena:string,
    confirmarContrasena:string
}

const initialValues:InfoForm={
    nombre:'',
    apellidoPaterno:'',
    apellidoMaterno:'',
    contrasena:'',
    confirmarContrasena:''
}

const accountValidateShecma = Yup.object({

})

const FormRegistro =()=>{
    return(<h3>f</h3>)
}
export default FormRegistro;