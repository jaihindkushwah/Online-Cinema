import { Box, IconButton, useTheme } from "@mui/material";
import React, { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";

import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import HelpIcon from '@mui/icons-material/Help';

import { tokens } from "../../theme";
import { Link } from "react-router-dom"; //, useLocation
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";


const Item = ({ title, to, active, setActive, icon }) => {
  
  // const location=useLocation().pathname;

  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <MenuItem
      component={<Link to={`/${to}`} />}
      onClick={() => {
        setActive(title);
      }}
      active={active===title}
      style={ title === active? { color: color.secondary[500]} : {}}
      icon={icon}
    >
      {title}
    </MenuItem>
  );
};

function SideBars() {
  const [active,setActive]=useState("Home");
  const { collapseSidebar, collapsed,broken,toggleSidebar } = useProSidebar();
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  const isLogin=useSelector((state)=>state.login);

  // const sm=useMediaQuery('(480px)');

  return (
    <Box sx={{backgroundColor:color.secondary[900]}} minHeight={'100%'}>
      <Sidebar
        breakPoint="sm"
        transitionDuration={400}
       style={{borderRightWidth:0,backgroundColor:color.secondary[900]}} 
      rootStyles={{
        '.ps-sidebar-container':{
            backgroundColor:color.secondary[900],
        },
        '.ps-menuitem-root:hover':{
            // color:"brown",
        },
        '.ps-menu-button:hover':{backgroundColor:'inherit'}
        }}>
        <Menu >
         <MenuItem>
         <IconButton
            onClick={broken ? () => toggleSidebar() : () => collapseSidebar()}
            
          >
           {!collapsed?<CloseIcon/>:<MenuIcon/>}
          </IconButton>
          </MenuItem>
        </Menu>

        <Menu style={{paddingTop:'100px'}} rootStyles={{'.ps-menu-button:hover':{backgroundColor:'inherit',}}} menuItemStyles={{button:({active})=>({borderLeft: active &&'6px solid #f54707'})}}>
          <Item to={''} title={'Home'} active={active} setActive={setActive} icon={<HouseOutlinedIcon />}/>
          <Item to={'movies'} title={'Movies'} active={active} setActive={setActive} icon={<MovieOutlinedIcon />}/>
          <Item to={'tvshows'} title={'Tv Shows'} active={active} setActive={setActive} icon={<LiveTvOutlinedIcon />}/>
          <Item to={'series'} title={'Series'} active={active} setActive={setActive} icon={<LanguageOutlinedIcon />}/>
          <Item to={'favorite'} title={'My Favorite'} active={active} setActive={setActive} icon={<StarBorderIcon />}/>
          <Item to={'watchlist'} title={'Watchlist'} active={active} setActive={setActive} icon={<BookOutlinedIcon />}/>
          <Item to={'settings'} title={'Settings'} active={active} setActive={setActive} icon={<SettingsOutlinedIcon />}/>
          <Item to={'faq'} title={'FAQ'} active={active} setActive={setActive} icon={<HelpIcon/>}/>
          {isLogin? <Item to={'logout'}  title={'Logout'} active={active} setActive={setActive} icon={<LogoutOutlinedIcon />}/>:
          <Item to={'login'} title={'Login'} active={active} setActive={setActive} icon={<LoginOutlinedIcon/>}/>} 
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default SideBars;
