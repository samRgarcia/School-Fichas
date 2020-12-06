import React,{useEffect} from "react";
import { format,isAfter} from 'date-fns'
import './styles/HeaderInfo.css';
import IconDay from '../../../pics/sol.svg';
import IconNight from '../../../pics/luna.svg';
import {Avatar} from '@material-ui/core';
const data = new Date();
        const FECHA = format(new Date(),'dd/MM/yyyy')

const Intervale=()=> {
    const [date,setDate]=React.useState(new Date());

    useEffect(()=>{
        const interval = setInterval(()=>setDate(new Date()));
        return()=>{
            clearInterval(interval);
        }
    },[])

    const currentTime = React.useMemo(()=>{
        return date;
    },[date])

   return (<span className='time'>{format(currentTime,'pp')}</span>)
}

const StatusHora = isAfter(new Date(0,0,0, data.getHours(),data.getMinutes(),data.getUTCSeconds()),new Date(0, 0, 0, 22, 9, 0))
    ? IconNight:IconDay;

const HeaderInfo =()=>{
    return(
        <div className='header-container'>
        <div className='box-inf'>
            <Avatar>H</Avatar>
            <h3>DANIEL ANDRÉS CASTIBLANCO SALGADO</h3>
        </div>
        <div className='box-onclock'>
            <div>
                <figure>
                    <img src={StatusHora} alt=""/>
                </figure>
                <span className='date'>{FECHA}</span>
                <Intervale/>
            </div>
        </div>
    </div>)
}

export default HeaderInfo;
