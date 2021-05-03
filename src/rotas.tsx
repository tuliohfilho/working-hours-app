import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { Route, Switch, useHistory } from "react-router-dom";

import { RootState } from './store';

import HomeContainer from './pages/Home';
import TimekeepingContainer from './pages/Timekeeping';

const Rotas: React.FC = () => {

    const history = useHistory();

    const { employee } = useSelector((application: RootState) => application.employee);

    useEffect(() => {
        if (!employee || Object.keys(employee).length === 0) {
            history.push('/');
        }
    }, [employee]);

    
return  (
        <Switch>
            <Route path="/timekeeping"><TimekeepingContainer /></Route>
            <Route path="/home" ><HomeContainer /></Route>
            <Route path="/"><HomeContainer /></Route>

            <Route path="/" component={() => <h1>404</h1>} />
        </Switch> 
    )
}

export default Rotas;