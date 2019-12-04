import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { CssBaseline, Button } from '@material-ui/core';
import { SnackbarProvider } from 'notistack';
import Registration from './routes/Registration';
import SelectUser from './pages/SelectUser';
import UserContext from './layout/UserContext';

// add action to all snackbars
const notistackRef = React.createRef();
const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
};

function App() {
    const [selectedUser, setUser] = React.useState();
    return (
        <BrowserRouter>
            <CssBaseline />
            <SnackbarProvider
                maxSnack={3}
                ref={notistackRef}
                action={key => (
                    <Button onClick={onClickDismiss(key)}>Dismiss</Button>
                )}
            >
                <UserContext.Provider value={setUser}>
                    <Route exact path='/' component={SelectUser} />
                    <Registration selectedUser={selectedUser} />
                </UserContext.Provider>
            </SnackbarProvider>
        </BrowserRouter>
    );
}

export default App;
