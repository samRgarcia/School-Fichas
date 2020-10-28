import React from "react";
import './styles.css';
import {Dialog,DialogContent,DialogTitle } from '@material-ui/core';



const Modal =(props:any)=>{
    const [open, setOpen] = React.useState(false);

    const handlOpen=()=>{
        props.setIsOpen(true);
    }


    return(<>
        <a href="#" className="" onClick={handlOpen}>Registrarte</a>
        <Dialog open={props.isOpen} >
            <DialogTitle id="form-dialog-title">{props.Title}</DialogTitle>
            <DialogContent>
                {props.children}
            </DialogContent>

        </Dialog>
    </>)
}



export default Modal;