import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login,logout} from '../../redux/createSlice';
import { Box } from '@mui/material';
function LogoutPage() {
    const isLogin = useSelector((state)=>state.login);
    const dispatch=useDispatch();
  return (
    <Box>
        <div>LogoutPage</div>
        <p> isLogin:{console.log(isLogin)}</p>
        <button onClick={()=>{dispatch(login())}}>Login</button>
        <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </Box>
  )
}

export default LogoutPage