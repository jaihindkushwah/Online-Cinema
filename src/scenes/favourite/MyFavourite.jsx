import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import GridImage from '../../components/GridImage'
import { useTheme } from '@mui/material'
import { tokens } from '../../theme';

function MyFavorite() {
  const [data,setData]=useState(JSON.parse(sessionStorage.getItem('myFavoriteData'))||[]);
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
        My Favourite
      </Typography>
      
      <Box width='100%'>
        {data.length!==0 && <Box width={'100%'} display={'flex'} justifyContent={'flex-end'} >
          <Box sx={{backgroundColor:color.secondary[500]}}>
            <Button sx={{fontWeight:'500',color:'white'}} variant='standard' onClick={()=>{sessionStorage.removeItem("myFavoriteData");setData([])}}>Delete All</Button>

          </Box>
        </Box>}
        <GridImage data={data} />
      </Box>
    </Box>
  )
}

export default MyFavorite