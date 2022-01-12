import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Dashboard></Dashboard>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='*' element={<Error></Error>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
