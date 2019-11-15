import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Registration from './routes/Registration';
import Audit from './pages/Audit';

function App() {
    return (
        <BrowserRouter>
            <CssBaseline />
            {/* <Audit /> */}
            <Registration />
        </BrowserRouter>
    );
}

export default App;
