import { Box, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

import { tokens } from '../../theme';


function Footer() {
  const sm=useMediaQuery("(max-width:580px)")
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  return (
    <Box sx={{backgroundColor:color.secondary[900]}} marginTop={sm && '25px'} height='150px' width={'100%'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
          <Typography fontSize={'1rem'} marginBottom={'20px'} variant='h4'>Welcome to Online Cinema</Typography>
          <Typography fontSize={'1rem'} variant='h4'>❤️ Made With ❤️</Typography>
        </Box>
    </Box>
  )
}

export default Footer