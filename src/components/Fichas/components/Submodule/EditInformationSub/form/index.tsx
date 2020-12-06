import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {InputDate} from '../../../InputDate';
import {TextField} from '@material-ui/core';
import './styles/styles.css';

export const FormSub =()=>{

    const formik=useFormik({
        initialValues:{
            inicionPeriodo:'',
        },
        validationSchema:Yup.object({
            inicionPeriodo:Yup.date().required('requere')
        }),
        onSubmit:values => {
            console.log(values.inicionPeriodo)
        }
    });

    return(<form className={'form-edit-info'} onSubmit={formik.handleSubmit}>
        <div className={'for-div-one'}>
            <InputDate labels={'Inicio de periodo'} width={'45%'}/>
            <InputDate labels={'Fin de periodo'} width={'45%'}/>
        </div>
        <InputDate labels={'Fecha de Examen'} width={'50%'}/>

        <TextField
            style={{maxWidth:'700px'}}
            fullWidth
            id="outlined-multiline-static"
            label="Información para el Examen"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="outlined"
        />

    </form>)
}
