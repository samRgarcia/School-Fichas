import React from "react";
import Home from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Reinscripcion from './pages/InitialForm';
import TramiteFicha from './pages/TransactFicha';
import {SideBarProvider } from './Provider/SideBarProvider';
import {BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import FullDashboard from "./pages/home/FullDashboard";
import Fichas from "./components/Fichas";
import ResinscripcionAdm from './components/Reinscripcion'
import Preinscripcion from "./components/Preinscripcion";
import Inscripcion from "./components/Inscripcion";
function App() {
  return (
    <div>
        <SideBarProvider>
        <Router>
            <Switch>
                <Route path='/login' exact>
                    <Home/>
                </Route>
                <Route path='/app'>
                      <FullDashboard/>
                </Route>
                <Route path='/inicio' exact>
                    <Reinscripcion/>
                </Route>
                <Route path='/ficha' exact>
                    <TramiteFicha/>
                </Route>
                <Route path='/app3' exact>
                    <FullDashboard/>
                </Route>

                <Route path='/Fichas' exact>
                    <Fichas/>
                </Route>
                <Route path='/reinscripcion' exact>
                    <ResinscripcionAdm/>
                </Route>
                <Route path='/preinscripcion' exact>
                    <Preinscripcion/>
                </Route>
                <Route path='/inscripcion' exact>
                    <Inscripcion/>
                </Route>
                <Redirect from="*" to="/login"/>
            </Switch>
        </Router>
        </SideBarProvider>
    </div>
  );
}

export default App;
