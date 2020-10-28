import React from "react";
import ModalFancy from '../ModalFancy';
import './styles.css';


 const FormEmail= ()=>{
     const [isOpen,setIsOpen]=React.useState<boolean>(false);
     const sendEmail =(evt:any)=>{
         evt.preventDefault();
         console.log("sss")
         setIsOpen(false)
     }

    return(
        <ModalFancy setIsOpen={setIsOpen} isOpen={isOpen} Title="Registro">
            <form onSubmit={sendEmail} className='form-email'  >
                <label htmlFor="email">
                    <span>Ingrese un correo</span>
                    <input type="email" name="email" id="email" autoComplete={"email"} required placeholder={"escribe tu correo"} />
                </label>

                <button type="submit" >Validar correo</button>
            </form>
        </ModalFancy>
       )
}

export default FormEmail;