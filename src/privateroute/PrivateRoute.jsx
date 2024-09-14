import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Adjust path as necessary

const PrivateRoute = ({ element }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // Or a spinner
    }

    return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
