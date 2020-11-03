import React from "react";
import Toolbar from "../components/Toolbar/Toolbar";
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from "../components/Backdrop/Backdrop";
import HeaderInfo from "../components/HeaderInfo/HeaderInf";
import ListModule from "../components/ListModule/ListModule";

const FullDashboard=()=>{
const [sideDrawerOpe,setSideDrawerOpe]=React.useState(false)
    let backdrop=null;

    const drawerToggleClickHeandler =(evt)=>{
        setSideDrawerOpe(!sideDrawerOpe)
    }
    const backdropClickHandler=(evt)=> {
        setSideDrawerOpe(false)
    }

if(sideDrawerOpe){

    backdrop= <Backdrop click={backdropClickHandler}/>
}
    return(
        <div style={{height:'100%'}}>
            <Toolbar drawerClickHeandler={drawerToggleClickHeandler}/>
            <SideDrawer show={sideDrawerOpe}/>
            {backdrop}
        <main style={{marginTop:'64px'}}>
            <HeaderInfo/>
            <ListModule/>
           <p>This is the page content</p>
        </main>
        </div>

    )
}

export default FullDashboard;