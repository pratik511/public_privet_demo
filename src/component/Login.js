import { Box, Button, TextField  } from '@mui/material'
import React from 'react'
import { useNavigate ,NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    const data = useSelector(data => data)

    console.log("data+++++++",data);

    const handelSubmit = () => {
        localStorage.setItem("user","test")
        navigate('/')
    }

    return (
        <div style={{ textAlign: '-webkit-center' }}>
            <Box
                sx={{
                    width: 350,
                    height: 300,
                    backgroundColor: 'primary.light',
                    mt: 25,
                    pt: 10,
                    p: 5,
                    autoComplete: "off"
                    /*  '&:hover': {
                       backgroundColor: 'primary.main',
                       opacity: [0.9, 0.8, 0.7],
                     }, */

                }}
            >
                <TextField fullWidth sx={{
                    mt: 5, input: { color: 'white' },
                    "& .MuiInputLabel-root": { color: 'white' }, "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                    },
                    '&:hover': {
                        "& .MuiInputLabel-root": { color: 'white' }, "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "white" },
                        }
                    }
                }} id="outlined-basic" label="Email" variant="outlined" type='email' />
                <TextField fullWidth sx={{
                    mt: 3, input: { color: 'white' },
                    "& .MuiInputLabel-root": { color: 'white' }, "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                    }
                }} id="outlined-basic" label="Password" variant="outlined" type='password' />
                <Button variant="contained" sx={{
                    mt: 5, width: 150, fontSize: 15, '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    }
                }} onClick={handelSubmit}>Login</Button>
                <br />
                 <NavLink to="/Register" style={{color:'white'}}>Register</NavLink>
            </Box>
        </div>
    )
}

export default Login