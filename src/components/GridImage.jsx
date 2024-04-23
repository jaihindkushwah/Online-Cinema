import { Box, useMediaQuery } from '@mui/material'
import React, {  } from 'react'
import ImageItem from './ImageItem';
import { imageBaseUrl } from '../movieApi/urls';
// import logo from '../assests/jai.png';


function GridImage({data,type}) {
  const sm=useMediaQuery('(max-width:480px)');
  // const [customData,setCustomData]=useState();
  

  return (
    <Box padding={'0px'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
          { data.map((item)=>{
                if(item.poster_path==null){return null}
                return(
                    <ImageItem type={type || item.type} width={sm?"150px":'180px'} height='220px' key={item.id}  id={item.id} src={imageBaseUrl+item.poster_path} />
                )
            })
        }
        
    </Box>
  )
}

export default GridImage