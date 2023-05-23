import { Box } from '@mui/material'
import React, {  } from 'react'
import ImageItem from './ImageItem';
import { imageBaseUrl } from '../movieApi/urls';
// import logo from '../assests/jai.png';


function GridImage({data}) {
  // const [customData,setCustomData]=useState();
  

  return (
    <Box padding={'0px'} display={'flex'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'}>
          { data.map((item)=>{
                return(
                    <ImageItem width='180px' height='220px' key={item.id}  id={item.id} src={imageBaseUrl+item.poster_path} />
                )
            })
        }
        
    </Box>
  )
}

export default GridImage