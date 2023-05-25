import { Box,IconButton,Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { singleDataUrl } from '../../movieApi/urls';
import {useFetchApiForSingleData} from '../../customHooks/fetchApi'
import { imageBaseUrl } from '../../movieApi/urls';
import { Favorite, WatchLater } from '@mui/icons-material';
import { tokens } from '../../theme';

function TvInfoPage() {
  const {id}=useParams();
  const singleData=useFetchApiForSingleData(singleDataUrl('tv',id));
  const imgFullSizeUrl='https://image.tmdb.org/t/p/w1920_and_h800_multi_faces';
  
  const [addFav,setFav]=useState(false);
  const [addWatch,setWatch]=useState(false);
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  
  
  // console.log(singleData);
  return (
    <Box padding={"40px 20px"}>
      <Box padding={"20px"}>
        <Box
          width={"100%"}
          height={"65vh"}
          sx={{
            backgroundImage: `url(${
              imgFullSizeUrl + singleData.backdrop_path
            })`,
            backgroundSize: "100% 100%",
          }}
        >
          <Box
            width={"100%"}
            height='100%'
            padding={"30px"}
            sx={{
              backgroundImage:
                "linear-gradient(to right, rgba(31.5, 31.5, 31.5, .9) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.60) 50%, rgba(31.5, 31.5, 31.5, 0.60) 100%)",
            }}
          >
            <Box display={"flex"}>


              <Box>
                <img style={{ borderRadius: "10px" }} width={"280px"} src={imageBaseUrl + singleData.poster_path} alt="image1" />
              </Box>


              <Box padding={'20px 40px'} display={'flex'} sx={{'& >*':{margin:'10px 0px'}}} justifyContent={'flex-start'} flexDirection={'column'}>
                
                
                <Box>
                  <Typography fontWeight={'700'} variant="h2">{singleData.original_name} <span >({new Date(singleData.first_air_date).getFullYear()})</span></Typography>
                </Box>

                <Box display={"flex"} sx={{'& >*':{margin:'5px 20px'}}}>
                  <Box title={'My Favorite'}>
                        <IconButton onClick={()=>{setFav(!addFav)}} color={addFav?'success':''} sx={{ padding: "12px" }} style={{ backgroundColor: color.secondary[900] }}>
                          <Favorite />
                          
                        </IconButton>
                    </Box>
                    <Box title={'Add to WatchList'} >
                        <IconButton onClick={()=>{setWatch(!addWatch)}} color={addWatch?'success':''} sx={{ padding: "12px" }} style={{ backgroundColor: color.secondary[900] }}>
                          <WatchLater />
                          
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{'&>*':{margin:"2px 0px"}}}>
                      <Typography variant="h4" color='#cccc' fontSize={'16px'}>{singleData.tagline}</Typography>
                    </Box>
                    <Typography variant={'h4'} >Overview</Typography>
                    <Box>
                      <Typography variant="h5" >{singleData.overview}</Typography>
                    </Box>
                    <Box>

                    </Box>
                </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default TvInfoPage