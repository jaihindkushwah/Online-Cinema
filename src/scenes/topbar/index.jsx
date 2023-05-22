import { Box, IconButton, TextField, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { colorModeContext, tokens } from '../../theme';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const colorMode=useContext(colorModeContext);
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  // console.log(color);
  const mobile=useMediaQuery('(max-width:420px)');
  const navigate=useNavigate();
  

  return (
    // <Box sx={{position:'sticky',top:"0px",backdropFilter:'blur(8px)',zIndex:'1000'}}>
      <Box display={'flex'} justifyContent={'flex-end'} p={'15px'}>
      <Box sx={{display: 'flex',alignItems:'center',justifyContent:'space-around',height:'40px','& > *':{margin:'0px 5px',backgroundColor:color.secondary[900]}}}>
        <Box sx={{ display: 'flex', alignItems: 'center'}} minWidth={mobile?'180px':'280px'}>
          <IconButton ><SearchIcon/></IconButton>
          <TextField variant="standard" InputProps={{ disableUnderline: true }}   sx={{flex:'1',fontSize:'12px'}} placeholder='What are you looking for?'/>
          <IconButton ><KeyboardVoiceOutlinedIcon/></IconButton>
        </Box>
        <Box>
          <IconButton onClick={()=>{colorMode.toggleColorMode()}}>{theme.palette.mode==='dark'?<DarkModeOutlined/>:<LightModeOutlined/>}</IconButton>
        </Box>
        <Box>
          <IconButton><NotificationsOutlinedIcon/></IconButton>
        </Box>
        <Box >
          <IconButton onClick={()=>{navigate('/user')}} ><PersonOutlineOutlinedIcon/></IconButton>
        </Box>
        
      </Box>
    </Box>
    // </Box>
  )
}

export default TopBar