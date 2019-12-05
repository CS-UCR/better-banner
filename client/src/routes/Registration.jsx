/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Audit from '../pages/Audit';
import Registration from '../pages/Registration';
// import Table from '../components/Table';
import Schedule from '../pages/Schedule';
// import Example from '../components/Example';
import Catalog from '../pages/Catalog';
import Drawer from '../layout/DrawerAndHeader';
import CompletedCourses from '../pages/CompletedCourses';

export default function AuditRoutes() {
    return (
        <Route path='/app/:id'>
            <Drawer title='Better-Banner'>
                <Switch>
                    {/* <Route path='example' component={Example} /> */}
                    <Route path='/app/:id/schedule' component={Schedule} />
                    <Route path='/app/:id/audit' component={Audit} />
                    <Route
                        path='/app/:id/CompletedCourses'
                        component={CompletedCourses}
                    />
                    <Route path='/app/:id/catalog' component={Catalog} />
                    <Route path='/app/:id/registration' component={Registration} />
                </Switch>
            </Drawer>
        </Route>
    );
}
