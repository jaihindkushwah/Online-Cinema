import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import GridImage from "../../components/GridImage";
import { tokens } from "../../theme";

function Watchlist() {
  const [data,setData]=useState(JSON.parse(sessionStorage.getItem('watchListData'))||[]);
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  
  return (
    <Box
      padding={"20px"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      
    >
      <Typography letterSpacing={'1px'} marginBottom={"20px"} variant="h3">
        My Watchlist
      </Typography>
      

      <Box width='100%'>
        {data.length!==0 && <Box width={'100%'} display={'flex'} justifyContent={'flex-end'} >
          <Box sx={{backgroundColor:color.secondary[500]}}>
            <Button sx={{fontWeight:'500',color:'white'}} variant='standard' onClick={()=>{sessionStorage.removeItem("watchListData");setData([])}}>Delete All</Button>
          </Box>
        </Box>}
        <GridImage data={data} />
      </Box>
    </Box>
  );
}

export default Watchlist;
