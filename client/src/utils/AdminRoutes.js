import { Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const AdminRoutes = () => {
    const [auth, setAuth] = useState(null);
    const token = localStorage.getItem('token');
    const isAdmin = parseInt(localStorage.getItem('isAdmin'));

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
                return <Outlet/>
            } else if (auth) {
                return <Navigate to="/user/home"/>
            } else {
                return <Navigate to="/"/>
            }
        })()}
        </>
    )
    
}

export default AdminRoutes;