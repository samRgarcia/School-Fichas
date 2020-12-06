import React from "react";
import './styles/styles.css';
import {Link,useRouteMatch,useLocation,NavLink} from 'react-router-dom';

const HeaderLink =()=>{
    let location = useLocation();
    console.log(location,"useLocation")
    return(
        <div className={'header-links'}>
            <ul>
                <li><CustomLink to={'/fichas'}  labels={'Fichas'} activeOnly={true}/></li>
                <li><CustomLink to={'/preinscripcion'}  labels={'Preinscripción'} activeOnly={true}/></li>
                <li><CustomLink to={'/inscripcion'}  labels={'Inscripción'} activeOnly={true}/></li>
                <li><CustomLink to={'/reinscripcion'}  labels={'reinscripcion'} activeOnly={true}/></li>
            </ul>
        </div>
    )
}

function CustomLink({labels,to,activeOnly}:any){
let match = useRouteMatch({
    path:to,
    exact:activeOnly
});

return(
    <Link
        style={{textDecoration:'none',color: match ? 'red' :'white'}}
        to={to}
    >{labels}</Link>
)
}

export default HeaderLink;
