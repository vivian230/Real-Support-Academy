import { Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const PrivateRoutes = () => {
    const [auth, setAuth] = useState(null);
    const isAdmin = parseInt(localStorage.getItem('isAdmin'));
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get('http://localhost:3333/user/auth', {
            headers: { authorization: "Bearer " + token }
          })
          .then((response) => {
              setAuth(true);
          })
          .catch((err) => {
              setAuth(false);
          })
    }, [])
    
    if (auth === null) return null;
    return (
        <>
        { (() => {
            if (auth && isAdmin === 1) {
                return <Navigate to="/admin/home"/>
            } else if (auth) {
                return <Outlet/>
            } else {
                return <Navigate to="/"/>
            }
        })()}
        </>
    )

    
}

export default PrivateRoutes;