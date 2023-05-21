import { Box } from '@mui/material'
import React from 'react'
import ImageItem from './ImageItem';
import logo from '../assests/jai.png';

function GridImage({data}) {
  return (
    <Box padding={'20px'} display={'flex'} flexWrap={'wrap'}>
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
        <ImageItem width='180px' height='220px' src={logo} />
    </Box>
  )
}

export default GridImage