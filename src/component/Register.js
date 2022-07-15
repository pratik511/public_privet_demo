import React, { useState } from 'react'
import { Box, Button,TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const dispatch = useDispatch()
    const navigate = useNavigate()

const data = {
    name:name,
    number:number,
    email:email,
    password:password
}   

    console.log(data);
    // const checkValidation = () =>{
    //     if (data.name && data.number && data.email && data.password) {
    //         console.log("demo123");
    //     }
    //     if (data.name !== '') {
    //         console.log("name");  
    //     } else {
            
    //     }
    // }

    const handelSubmit = () =>{
        navigate('/Login')
    }

  return (
    <div style={{ textAlign: '-webkit-center' }}>
            <Box 
                sx={{
                    width: 350,
                    height: 450,
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
                }} id="outlined-basic" label="Name" variant="outlined" type='text' name='name' onChange={e => setName(e.target.value)} helperText={name == "" ? " " : name} />
                <TextField fullWidth sx={{
                    mt: 0.5, input: { color: 'white' },
                    "& .MuiInputLabel-root": { color: 'white' }, "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                    },
                    '&:hover': {
                        "& .MuiInputLabel-root": { color: 'white' }, "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "white" },
                        }
                    }
                }} id="outlined-basic" label="Number" variant="outlined" type='number' name='number' onChange={e => setNumber(e.target.value)} helperText={name == "" ? " " : name} />
                <TextField fullWidth sx={{
                    mt: 0.5, input: { color: 'white' },
                    "& .MuiInputLabel-root": { color: 'white' }, "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                    },
                    '&:hover': {
                        "& .MuiInputLabel-root": { color: 'white' }, "& .MuiOutlinedInput-root": {
                            "& > fieldset": { borderColor: "white" },
                        }
                    }
                }} id="outlined-basic" label="Email" variant="outlined" type='email' name='email' onChange={e => setEmail(e.target.value)} helperText={name == "" ? " " : name} />
                <TextField fullWidth sx={{
                    mt: 0.5, input: { color: 'white' },
                    "& .MuiInputLabel-root": { color: 'white' }, "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                    }
                }} id="outlined-basic" label="Password" variant="outlined" type='password' name='password' onChange={e => setPassword(e.target.value)} helperText={name == "" ? " " : name}  />
                <Button variant="contained" sx={{
                    mt: 2.5, width: 150, fontSize: 15, '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    }
                }} onClick={handelSubmit}>Register</Button>
            </Box>
        </div>
  )
}

export default Register