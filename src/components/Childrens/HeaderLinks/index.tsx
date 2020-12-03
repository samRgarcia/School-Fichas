import React from "react";
import './styles/styles.css';
import {Link} from 'react-router-dom';

const HeaderLink =()=>{
    return(
        <div className={'header-links'}>
            <ul>
                <li><Link style={{textDecoration:'none',color:'white'}} to={'/fichas'}>Fichas</Link></li>
                <li><Link style={{textDecoration:'none',color:'white'}} to={'/preinscripcion'}>Preinscripción</Link></li>
                <li><Link style={{textDecoration:'none',color:'white'}} to={'/inscripcion'}>Inscripción</Link></li>
                <li><Link style={{textDecoration:'none',color:'white'}} to={'/reinscripcion'}>Reinscripción</Link></li>
            </ul>
        </div>
    )
}

export default HeaderLink;
