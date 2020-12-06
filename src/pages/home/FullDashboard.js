import React from "react";
import HeaderInfo from "../../components/HomeDashboard/HeaderInfo/HeaderInf";
import ListModule from "../../components/HomeDashboard/ListModule/ListModule";
import ExpansionPanel from "../../components/Childrens/ExpansionPanel";
import Layout from "../../components/Childrens/Layout";
const FullDashboard=()=>{

    return(
        <Layout top={'64px auto'}>
            <HeaderInfo/>
           <ExpansionPanel title='Inscripción' description=''>
               <ListModule/>
           </ExpansionPanel>
            <ExpansionPanel title='Planes de estudio' description=''>
                <ListModule/>
            </ExpansionPanel>
        </Layout>

    )
}

export default FullDashboard;
