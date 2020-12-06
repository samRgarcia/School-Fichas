import React from "react";
import './styles/styles.css';
import {FormSub} from './form';

const EditSub =()=>{
    return(<div className={'edit-sub-box'}>
        <section className= 'edit-sub-box-one'>
            <h1>Ingrese información</h1>
            <p> Lorem ipsum dolor sit amet consectetur adipiscing elit,
                pellentesque augue congue ridiculus malesuada scelerisque
                aliquam accumsan, platea cras felis turpis porta tempus</p>
            <button type="submit">Guardar</button>
        </section>
        <section className= 'edit-sub-box-two'>
            <FormSub/>
        </section>
    </div>)
}
export default EditSub;
