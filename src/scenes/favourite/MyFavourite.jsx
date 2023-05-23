import { Box, Typography } from '@mui/material'
import React from 'react'
import GridImage from '../../components/GridImage'

function MyFavorite() {
  const data=[];
  return (
    <Box
      padding={"20px"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography marginBottom={"20px"} variant="h3">
        My Favourite
      </Typography>
      
      <Box>
        <GridImage data={data} />
      </Box>
    </Box>
  )
}

export default MyFavorite