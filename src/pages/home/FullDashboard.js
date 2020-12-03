import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from "../../components/Backdrop/Backdrop";
import HeaderInfo from "../../components/HomeDashboard/HeaderInfo/HeaderInf";
import ListModule from "../../components/HomeDashboard/ListModule/ListModule";
import ExpansionPanel from "../../components/Childrens/ExpansionPanel";

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
        <main style={{maxWidth:'1657px', margin:'64px auto'}}>
            <HeaderInfo/>
           <ExpansionPanel title='Inscripción' description=''>
               <ListModule/>
           </ExpansionPanel>
            <ExpansionPanel title='Planes de estudio' description=''>
                <ListModule/>
            </ExpansionPanel>
           <p>This is the page content</p>
        </main>
        </div>

    )
}

export default FullDashboard;
