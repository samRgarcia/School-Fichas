import React from "react";
import {Avatar} from '../../../estaticos/imgTree';
import './style.css';

const Card = ({path=`${Avatar}`,color='#f9fafc',Title='',children}:any)=>{
    return(
        <div className='box-card' style={{backgroundColor:`${color}`}}>
            <div className='card-title'>
                <figure>
                    <img src={path} alt="avatar-card"/>
                </figure>
                <p >{Title}</p>
            </div>

        <div className='card-conteiner'>{children}</div>
        </div>
    )
}

export default Card;