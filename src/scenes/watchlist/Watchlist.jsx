import { Box, Typography } from '@mui/material'
import React from 'react'
import GridImage from '../../components/GridImage'

function Watchlist() {
  return (
    <Box padding={'20px'}>
        <Typography variant='h3'>Welcome to the movies page.</Typography>
          <Box>
            Filter By Years.
          </Box>
          <Box>
              <GridImage data={''} />
          </Box>
    </Box>
  )
}

export default Watchlist