import React from "react";
import Login from "../components/Login";
import './styles.css';


const Home =()=>{
    return(
        <main>
           <section className="img-waves">
               <div className='container'>
                        <Login/>
               </div>
           </section>
        </main>
    )
}

export default Home