import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Audit from '../pages/Audit';
import Sandbox from '../pages/Sandbox'
import Table from '../components/Table'
import Schedule from '../pages/Schedule';
import RegMainMenu from '../pages/RegMainMenu';
import Example from '../components/Example';
import Catalog from '../pages/Catalog';

export default function AuditRoutes() {
    return(
        <Switch>
            <Route path='/example' component={Example} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/regmainmenu' component={RegMainMenu} />
            <Route path='/audit' component={Audit} />
            <Route path='/catalog' component={Catalog} />
            <Route path='/sandbox' component={Sandbox} />
            <Route path='/' component={Table} />
        </Switch>
    );

}
