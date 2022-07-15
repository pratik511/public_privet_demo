import React from 'react'
import {Outlet ,Navigate} from 'react-router-dom';

const useAuth = () =>{
    const user = localStorage.getItem('user');
    if (user) {
        return true
    } else {
        return false
    }
}

const ProtectedRoutes = () => {
    const auth = useAuth()
  return ( auth ?<Outlet /> : <Navigate to="/Login" />
  )
}

export default ProtectedRoutes