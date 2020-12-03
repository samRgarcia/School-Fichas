import React from "react";
import {Avatar} from '../../../estaticos/imgTree';
import './style.css';
import {Link} from 'react-router-dom';


const Card = ({linkTo='/',path=`${Avatar}`,color='#f9fafc',Title='',children}:any)=>{
    return(
        <Link style={{textDecoration:'none'}} to={linkTo} >
            <div className='box-card' style={{backgroundColor:`${color}`}}>
                <div className='card-title'>
                    <figure>
                        <img src={path} alt="avatar-card"/>
                    </figure>
                    <p >{Title}</p>
                </div>

                <div className='card-conteiner'>{children}</div>
            </div>
        </Link>

    )
}

export default Card;
