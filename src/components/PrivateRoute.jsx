import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute = ({ 
    requireDaftar = false,
    requireAuth = false,
}) => {
    const authToken = localStorage.getItem('token');
    const registrationData = JSON.parse(localStorage.getItem('registrationData'));

    if (requireAuth && !authToken) {
        return <Navigate to='/masuk' />
    }

    if (requireDaftar && !registrationData) {
        return <Navigate to='/daftar' />
    }

    return <Outlet />;
}

export default PrivateRoute