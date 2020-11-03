import React from "react";
import Home from "./home";
import Dashboard from "./pages/Dashboard";
import Reinscripcion from './pages/InitialForm';
import TramiteFicha from './pages/TransactFicha';
import {SideBarProvider } from './Provider/SideBarProvider';
import {BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import FullDashboard from "./home/FullDashboard";
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
                <Redirect from="*" to="/login"/>
            </Switch>
        </Router>
        </SideBarProvider>
    </div>
  );
}

export default App;
