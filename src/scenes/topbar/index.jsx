import { Box, IconButton, TextField, useMediaQuery, useTheme } from '@mui/material'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { colorModeContext, tokens } from '../../theme';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useProSidebar } from 'react-pro-sidebar';

function TopBar() {
  const colorMode=useContext(colorModeContext);
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  // console.log(color);
  const mobile=useMediaQuery('(max-width:590px)');
  const navigate=useNavigate();
  

  const isLogin=useSelector((state)=>state.login);

  const {collapseSidebar,broken,toggleSidebar}=useProSidebar();
  

  return (
    // <Box sx={{position:'sticky',top:"0px",backdropFilter:'blur(8px)',zIndex:'1000'}}>
      <Box display={'flex'} justifyContent={mobile ?'space-between':'flex-end'} p={'15px'} width={'100%'}>
        { broken && <Box justifySelf={'flex-start'} alignSelf={'center'}  sx={{height:'37px',margin:'0px 2px',backgroundColor:color.secondary[900]}}>
          <IconButton
              onClick={
                () => {toggleSidebar() ; collapseSidebar(false)}
              }
            >
            <MenuIcon/>
          </IconButton>
        </Box>}
      <Box sx={{display: 'flex',alignItems:'center',justifyContent:'space-around',height:'40px','& > *':{margin:'0px 2px',backgroundColor:color.secondary[900]}}}>
      
        <Box sx={{ display: 'flex', alignItems: 'center'}} minWidth={mobile?'160px':'280px'}>
          <IconButton onClick={()=>{navigate('/search')}}  ><SearchIcon/></IconButton>
          <TextField  onClick={()=>{navigate('/search')}} variant="standard" InputProps={{ disableUnderline: true }}   sx={{flex:'1',fontSize:'12px'}} placeholder='What are you looking for?'/>
          <IconButton onClick={()=>{navigate('/search')}}  ><KeyboardVoiceOutlinedIcon/></IconButton>
        </Box>
          <Box>
            <IconButton onClick={()=>{colorMode.toggleColorMode()}}>{theme.palette.mode==='dark'?<DarkModeOutlined/>:<LightModeOutlined/>}</IconButton>
          </Box>
          <Box>
            <IconButton><NotificationsOutlinedIcon/></IconButton>
          </Box>
          <Box >
            <IconButton onClick={()=>{
                isLogin?navigate('/logout'):navigate('/login')
            }} ><PersonOutlineOutlinedIcon/></IconButton>
          </Box>
        
      </Box>
    </Box>
    // </Box>
  )
}

export default TopBar