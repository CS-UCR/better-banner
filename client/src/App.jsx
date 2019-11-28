import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Registration from './routes/Registration';

function App() {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Registration />
        </BrowserRouter>
    );
}

export default App;
