import React from "react";
import './styles/styles.css';
import Periodos from "../Periods";
import {IconSearch,IconReports,IconEditInfor,IconEditCost} from '../../../../estaticos/imgTree';
import {SubModule} from '../Submodule';



const HeaderFichas=()=>{
const [next,setNext]=React.useState(0);

 const handlChange=(id:number)=>{
    SubModule(id);
 }
    return(
        <React.Fragment>
            <nav className={'nav-fichas'}>
                <section className={'section-fichas-one'}>
                    <Periodos/>
                </section>

                <section className={'section-fichas-two'}>
                    <div className={'card-nav'} >
                        <figure>
                            <button type={'button'} onClick={()=>setNext(1)}>
                            <img className={'figure-img'} src={IconEditInfor}/>
                            </button>
                        </figure>
                        <strong className={'text-item-fichas'}>Editar Información.</strong>
                    </div>
                    <div className={'card-nav'}>
                        <figure>
                            <button type={'button'} onClick={()=>setNext(2)}>
                            <img className={'figure-img'} src={IconEditCost}/>
                            </button>
                        </figure>
                        <strong className={'text-item-fichas'}>Editar Costos.</strong>
                    </div>
                    <div className={'card-nav'}>
                        <figure>
                            <button type={'button'} onClick={()=>setNext(3)}>
                            <img className={'figure-img'} src={IconSearch}/>
                            </button>
                        </figure>
                        <strong className={'text-item-fichas'}>Buscar información.</strong>
                    </div>
                    <div className={'card-nav'}>
                        <figure>
                            <button type={'button'} onClick={()=>setNext(4)}>
                            <img className={'figure-img'} src={IconReports}/>
                            </button>
                        </figure>
                        <strong className={'text-item-fichas'}>Reportes.</strong>
                    </div>
                </section>
            </nav>
            <div>
                {SubModule(next)}
            </div>
        </React.Fragment>
    )
}

export default HeaderFichas;
