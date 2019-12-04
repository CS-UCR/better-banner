/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Audit from '../pages/Audit';
import Registration from '../pages/Registration';
// import Table from '../components/Table';
import Schedule from '../pages/Schedule';
import Example from '../components/Example';
import Catalog from '../pages/Catalog';
import Drawer from '../layout/DrawerAndHeader';
import CompletedCourses from '../pages/CompletedCourses';

export default function AuditRoutes({ selectedUser }) {
    return (
        <Drawer title='Better-Banner' selectedUser={selectedUser}>
            <Switch>
                <Route path='example' component={Example} />
                <Route path='/schedule/:id' component={Schedule} />
                <Route path='/audit/:id' component={Audit} />
                <Route
                    path='/CompletedCourses/:id'
                    component={CompletedCourses}
                />
                <Route path='/catalog/:id' component={Catalog} />
                <Route path='/registration/:id' component={Registration} />
            </Switch>
        </Drawer>
    );
}
