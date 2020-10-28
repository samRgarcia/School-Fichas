import React from "react";
import ModalFancy from '../ModalFancy';
import './styles.css';


 const FormEmail= ()=>{
     const [isOpen,setIsOpen]=React.useState<boolean>(false);
     const sendEmail =()=>{
         console.log("sss")
         setIsOpen(false)
     }

    return(
        <ModalFancy setIsOpen={setIsOpen} isOpen={isOpen} Title="Registro">
            <form className='form-email' >
                <label htmlFor="email">
                    <span>Ingrese un correo</span>
                    <input type="email" name="email" id="email" autoComplete={"email"} />
                </label>

                <button type="button" onClick={sendEmail} >Validar correo</button>
            </form>
        </ModalFancy>
       )
}

export default FormEmail;