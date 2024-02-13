import React from 'react'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/slices/userSlice'
import './styles.css'
import { Link } from 'react-router-dom'
import { Box, Button } from '@mui/material'

function Header() {
    const dispatch = useDispatch()

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'rgb(36, 161, 223)',
            height: '50px',
            alignItems: 'center',
            color: 'white'
        }}>
            <Box sx={{ mx: 'auto' }} className='links'>
                <Link to="/">
                    Home
                </Link>
                <Link to="/about" >
                    About
                </Link>
                <Link to="/blog">
                    Blog
                </Link>
                <Link to="/contacts">
                    Contacts
                </Link>
            </Box>
            <Box sx={{ display: 'flex', gap: '20px', paddingRight: '20px' }}>
                <Button variant="outlined" color="success" size="medium" sx={{ color: 'white', backgroundColor: 'grey' }}> <Link to='./login'>Log in</Link></Button>
                <Button variant="outlined" color="success" size="medium" sx={{ color: 'white', backgroundColor: 'grey' }}> <Link to='./signup'>Sign Up</Link></Button>
                <Button onClick={() => dispatch(removeUser())} variant="outlined" color="success" size="medium" sx={{ color: 'white', backgroundColor: 'grey' }}>Exit</Button>
            </Box>
        </Box>
    )
}

export default Header;