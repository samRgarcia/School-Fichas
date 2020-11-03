import React from "react";
import Card from "../Childrens/Cards";
import './ListModule.css';

const ListModule=()=>{
    return(<section className='box-item_card'>
        <Card color={"blue"} Title={'Fichas'}>
            <div>contenet</div>
        </Card>
        <Card color={"red"} Title={'Pagos'}>
            <div>contenet 2</div>
        </Card>
        <Card color={"orange"} Title={'Reinscripciones'}>
            <div>contenet 3</div>
        </Card>

    </section>)
}

export default ListModule;