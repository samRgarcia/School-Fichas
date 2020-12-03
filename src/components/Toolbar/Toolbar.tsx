import React from "react";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './ToolBar.css';
import ButtonOp from '../Desplegables/Button';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from 'react-router-dom';

const Toolbar=(props:any)=>{
    return(<header className='toolbar'>
        <nav className='toolbar_navigation'>
            <div className='toolbar_toggle-button'><DrawerToggleButton click={props.drawerClickHeandler}/></div>
            <div className='toolbar_logo' >
                <a href='#'><Link to={'/app'}><HomeIcon/></Link></a>
                <a href='#' style={{fontSize:'larger'}}>{props.title}</a>
            </div>
            <div className='spacer'/>
            <div className='toolbar_navigation-item'>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">User</a></li>
                </ul>
            </div>
            <ButtonOp/>
        </nav>
    </header>)
}

export default Toolbar;
