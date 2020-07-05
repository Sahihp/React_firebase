import React from 'react';
import { Route , Redirect } from 'react-router-dom';

const loggedIn = false;
const ProtectedRoute = ({ component : Component , ...rest }) => {
    return (
        <Route 
            {...rest}  
            render = {(props) => {
                return <Component {...props} />
                /* if ( localStorage.getItem('token') !== null ){
                    return <Component {...props} />
                } else {
                    return <Redirect to = "/login" />
                } */
            }}
        />

    )
}

export default ProtectedRoute;