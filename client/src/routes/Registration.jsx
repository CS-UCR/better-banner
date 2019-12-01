import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Audit from '../pages/Audit';
import Sandbox from '../pages/Sandbox'
import Card from '../components/Card';
import RegistrationPage from '../pages/Schedule';
import RegMainMenu from '../pages/RegMainMenu';

export default function AuditRoutes() {
    return(
        <Switch>
            <Route path='/regpage' component={RegistrationPage} />
            <Route path='/regmainmenu' component={RegMainMenu} />
            <Route path='/audit' component={Audit} />
            <Route path='/sandbox' component={Sandbox} />
            <Route path='/' component={Card} />
            
        </Switch>
    );

}
