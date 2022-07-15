import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export default function Navbar() {
  const location = useLocation()
  const navigation = useNavigate()
  const logOut = () => {
    localStorage.removeItem('user');
    navigation('/Login')
  }

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', display: 'flex' }}>
      <Tabs centered sx={{width:'94%'}}>
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><Tab label="Home" /></Link>
        <Link to='/About' style={{ textDecoration: 'none', color: 'black' }}><Tab label="About" /></Link>
        <Link to='/Photo' style={{ textDecoration: 'none', color: 'black' }}><Tab label="Photo" /></Link>
        <Link to='/Contact' style={{ textDecoration: 'none', color: 'black' }}><Tab label="Contact Us" /></Link>
      </Tabs>
        <Tabs sx={{width:'6%'}}>
          {location.pathname === '/Login' ? <Link to='/Login' style={{ textDecoration: 'none', color: 'black' }}><Tab label="Login" /></Link> :
            <Button onClick={logOut} style={{ color: 'black', opacity: 0.6 ,marginTop:'5px' }}>Logout</Button>}
        </Tabs>
    </Box>
  );
}
