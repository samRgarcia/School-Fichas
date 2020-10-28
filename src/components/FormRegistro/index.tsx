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
    return(<Formik initialValues={initialValues} onSubmit={}/>)
}
export default FormRegistro;