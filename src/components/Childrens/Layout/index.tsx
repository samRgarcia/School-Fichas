import React from "react";
import Toolbar from "../../Toolbar/Toolbar";
import SideDrawer from "../../SideDrawer/SideDrawer";
import Backdrop from "../../Backdrop/Backdrop";
import HeaderLink from "../HeaderLinks";
import './styles/styles.css';


const Layout =({children,title,isHeader=false,top}:any)=>{
    const [sideDrawerOpe,setSideDrawerOpe]=React.useState(false)
    let backdrop=null;

    const drawerToggleClickHeandler =(evt:any)=>{
        setSideDrawerOpe(!sideDrawerOpe)
    }
    const backdropClickHandler=(evt:any)=> {
        setSideDrawerOpe(false)
    }

    if(sideDrawerOpe){
        backdrop= <Backdrop click={backdropClickHandler}/>
    }

    return(
        <div style={{height:'100%'}}>
            <Toolbar title={title} drawerClickHeandler={drawerToggleClickHeandler}/>
            <SideDrawer show={sideDrawerOpe}/>
            {backdrop}
            {isHeader ? <HeaderLink/>:null}
            <main className={'main-toolbar'} style={{margin:top}}>
                {children}
            </main>
        </div>
    )
}

export default Layout;
