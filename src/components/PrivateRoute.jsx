import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ 
    children,
    requireDaftar = false,
    requireAuth = false,

}) => {
    const authToken = localStorage.getItem('authToken');
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));

    if (requireAuth && !authToken) {
        return <Navigate to='/masuk' />
    }

    if (requireDaftar && !registrationData) {
        return <Navigate to='/daftar' />
    }

    return children;
}

export default PrivateRoute