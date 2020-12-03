import React from "react";
import Card from "../../Childrens/Cards";
import {IconFicha,IconPay} from '../../../estaticos/imgTree';
import './styles/ListModule.css';

const ListModule=()=>{
    return(<section className='box-item_card'>
        <Card path={IconFicha}  Title={'Fichas'} linkTo='/fichas' >
            {/* <div>contenet</div>*/}
        </Card>
        <Card path={IconPay}   Title={'Preinscripcióne'} linkTo={'/preinscripcion'}>
            {/* <div>contenet</div>*/}
        </Card>
        <Card  Title={'Inscripción'} linkTo={'/inscripcion'}>
            {/* <div>contenet</div>*/}
        </Card>
        <Card  Title={'Reinscripción'} linkTo={'/reinscripcion'}>
            {/* <div>contenet</div>*/}
        </Card>

    </section>)
}

export default ListModule;
