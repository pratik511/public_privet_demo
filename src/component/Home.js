import { Button } from '@mui/material'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
    const navigation = useNavigate()
    const location = useLocation()
    const logOut = () => {
        localStorage.removeItem('user');
        navigation('/Login')
    }
    return (
        <div>Home
            {location.pathname !=='/Login'  && <Button onClick={logOut} variant="outlined">Logout</Button>}
        </div>
    )
}

export default Home