import React from 'react';
import Admin from "../pages/Admin";
import Login from "../pages/admin/Login";


const PrivateRoute = () => {

    const auth = sessionStorage.getItem('username')
    return auth ? <Admin/> : <Login/>;
}

export default PrivateRoute;
