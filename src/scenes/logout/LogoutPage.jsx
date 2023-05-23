import React from 'react'
import { useDispatch } from 'react-redux'
import { logout} from '../../redux/createSlice';
import { Box, Typography } from '@mui/material';
import { signOut } from 'firebase/auth';
import { auth } from "../../firebase/firebase";
import { useNavigate } from 'react-router-dom';


function LogoutPage() {
    // const isLogin = useSelector((state)=>state.login);
    const dispatch=useDispatch();
    const navigate=useNavigate();

  return (
    <Box padding={'20px'} sx={{'&>*':{paddingLeft:'20px'}}}>
        <Typography variant='h5'>Logout Page</Typography>
        <Box>
        <p>Are you sure for logOut</p>
        <button onClick={()=>{navigate('/')}}>Cancel</button>
        <button onClick={
          ()=>{
            signOut(auth).then(()=>{dispatch(logout())}).then(()=>{navigate('/')})
          }
          }>Confirm</button>
        </Box>
    </Box>
  )
}

export default LogoutPage