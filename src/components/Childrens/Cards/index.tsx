import React from "react";
import './style.css';

const Card = ({color="white",Title='',children}:any)=>{
    return(
        <div className='box-card' style={{backgroundColor:`${color}`}}>
            <p className='card-title'>{Title}</p>
        <div>{children}</div>
        </div>
    )
}

export default Card;