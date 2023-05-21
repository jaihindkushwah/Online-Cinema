import { Box } from '@mui/material'
import React from 'react'
import Poster from './Poster'
// import VideoPlayer from '../../components/VideoPlayer'
import VerticalImageList from '../../components/VerticalImageList'


function HomePage() {
  return (
    <Box padding={'20px'} sx={{'&>*':{marginBottom:'20px'}}} >
      <Poster/>
      <Box>
        <VerticalImageList title={'Portable Tv Originals'}/>
        <VerticalImageList title={'Recommended for you'}/>
        <VerticalImageList title={'Comedy'}/>
        <VerticalImageList title={'Documentaries'}/>
        <VerticalImageList title={'Romance'}/>
        <VerticalImageList title={'Terror'}/>
        
        {/* <VideoPlayer/> */}
      </Box>
    </Box>
  )
}

export default HomePage