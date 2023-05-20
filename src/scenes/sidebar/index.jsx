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
// import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import { tokens } from "../../theme";
// import { Link } from "react-router-dom";


const Item = ({ title, to, active, setActive, icon }) => {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <MenuItem
      // component={<Link to={`/${to}`} />}
      onClick={() => {
        setActive(title);
      }}
      active={active===title}
      style={active === title ? { color: color.secondary[500]} : {}}
      icon={icon}
    >
      {title}
    </MenuItem>
  );
};

function SideBars() {
  const [active,setActive]=useState("Home");
  const { collapseSidebar, collapsed } = useProSidebar();
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  return (
    <Box sx={{backgroundColor:color.primary[900]}}>
      <Sidebar style={{minHeight:'100vh',borderRightWidth:0}} 
      rootStyles={{
        '.ps-sidebar-container':{
            backgroundColor:color.primary[900],
            
        },
        '.ps-menuitem-root:hover':{
            // color:"brown",
        },
        '.ps-menu-button:hover':{backgroundColor:'inherit'}
        }}>
        <Menu >
         <MenuItem>
         <IconButton
            onClick={() => {
              collapseSidebar();
            }}
            
          >
           {!collapsed?<CloseIcon/>:<MenuIcon/>}
          </IconButton>
          </MenuItem>
        </Menu>
        <Menu style={{paddingTop:'100px'}} rootStyles={{'.ps-menu-button:hover':{backgroundColor:'inherit',}}} menuItemStyles={{button:({active})=>({borderLeft: active &&'6px solid #f54707'})}}>
          <Item to={''} title={'Home'} active={active} setActive={setActive} icon={<HouseOutlinedIcon />}/>
          <Item to={''} title={'Movies'} active={active} setActive={setActive} icon={<MovieOutlinedIcon />}/>
          <Item to={''} title={'Tv Shows'} active={active} setActive={setActive} icon={<LiveTvOutlinedIcon />}/>
          <Item to={''} title={'Series'} active={active} setActive={setActive} icon={<LanguageOutlinedIcon />}/>
          <Item to={''} title={'Favorite'} active={active} setActive={setActive} icon={<StarBorderIcon />}/>
          <Item to={''} title={'Watchlist'} active={active} setActive={setActive} icon={<BookOutlinedIcon />}/>
          <Item to={''} title={'Settings'} active={active} setActive={setActive} icon={<SettingsOutlinedIcon />}/>
          <Item to={''} title={'Logout'} active={active} setActive={setActive} icon={<LogoutOutlinedIcon />}/>
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default SideBars;
