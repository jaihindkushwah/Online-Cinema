import { Box } from '@mui/material'
import React from 'react'

function ImageItem({id,src,title,width='140px',height='200px'}) {
  return (
    <Box padding={'5px 0px'} width={`cal(${width} + 10px)`}  sx={{'& > img:hover':{transform:'scale(1.03)',cursor:'pointer',transition:'all 0.4s ease 0s'},'& > img':{ transform:'scale(.95)',transition: 'all 0.4s ease 0s'}}}>
      <img id={id} onClick={()=>{console.log('clicked')}} src={src} style={{ width:width,height:height,borderRadius:'3px'}} alt={title}/>
    </Box>
  )
}

export default ImageItem