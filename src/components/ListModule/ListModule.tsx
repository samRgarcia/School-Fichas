import React from "react";
import Card from "../Childrens/Cards";
import {IconFicha,IconPay} from '../../estaticos/imgTree';
import './ListModule.css';

const ListModule=()=>{
    return(<section className='box-item_card'>
        <Card path={IconFicha}  Title={'Fichas'}>
            <div>contenet</div>
        </Card>
        <Card path={IconPay}   Title={'Pagos'}>
            <div>contenet 2</div>
        </Card>
        <Card  Title={'Reinscripciones'}>
            <div>contenet 3</div>
        </Card>

    </section>)
}

export default ListModule;