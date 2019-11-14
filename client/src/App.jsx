import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Audit from './pages/Audit';

function App() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Route path='/'>
                <Audit />
            </Route>
        </BrowserRouter>
    );
}

export default App;
