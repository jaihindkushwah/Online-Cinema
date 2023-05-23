import { Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

function Settings() {
  const useDetails=useSelector((state)=>state.useDetails);
  return (
    <Box padding={'20px'}>
      <Typography variant='h3' >Settings</Typography>
      <Box>
        {console.log(useDetails)}
        {JSON.stringify(useDetails)}
      </Box>

    </Box>
  )
}

export default Settings