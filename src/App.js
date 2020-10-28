import React from "react";
import Home from "./home";
import Dashboard from "./pages/Dashboard";
import {BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

function App() {
  return (
    <div>
        <Router>
            <Switch>
                <Route path='/login' exact>
                    <Home/>
                </Route>
                <Route path='/dashboard'>
                    <Dashboard/>
                </Route>
                <Redirect from="*" to="/login"/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
