import { Box } from '@mui/material'
import React from 'react'
import { useNavigate} from 'react-router-dom'

function ImageItem({id,src,type,width='140px',height='200px'}) {
    const navigate=useNavigate();
    



  return (
    <Box padding={'5px 0px'} width={`cal(${width} + 10px)`}  sx={{'& > img:hover':{transform:'scale(1.03)',cursor:'pointer',transition:'all 0.4s ease 0s'},'& > img':{ transform:'scale(.95)',transition: 'all 0.4s ease 0s'}}}>
      <img loading='lazy' id={id} onClick={(e)=>{navigate(`/${type}/${e.target.id}`)}} src={src} style={{ width:width,height:height,borderRadius:'3px'}} alt={"#"+id}/>
    </Box>
  )
}

export default ImageItem