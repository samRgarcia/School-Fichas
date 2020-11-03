import React from "react";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './ToolBar.css'

const Toolbar=(props:any)=>{
    return(<header className='toolbar'>
        <nav className='toolbar_navigation'>
            <div className='toolbar_toggle-button'><DrawerToggleButton click={props.drawerClickHeandler}/></div>
            <div className='toolbar_logo' ><a href='#'>the logo</a></div>
            <div className='spacer'/>
            <div className='toolbar_navigation-item'>
                <ul>
                  <li><a href="#">Produc</a></li>
                    <li><a href="#">User</a></li>
                </ul>
            </div>
        </nav>
    </header>)
}

export default Toolbar;