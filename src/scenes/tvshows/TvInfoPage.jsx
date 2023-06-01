import { Box,IconButton,Typography, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
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

  
  const saveFavoriteData=(image,id)=>{
    const myFavoriteData=JSON.parse(localStorage.getItem('myFavoriteData'))||[];
    const isPresent=myFavoriteData.some((item)=>item.id===id);
    if(!isPresent){
      const newFabData=[...myFavoriteData,{"id":id,poster_path:image,type:'movie'}]
      localStorage.setItem('myFavoriteData',JSON.stringify(newFabData))
    }else{
      const filterData=myFavoriteData.filter((item)=>item.id!==id);
      // localStorage.setItem('myFavoriteData',JSON.stringify(filterData));
      localStorage.setItem('myFavoriteData',JSON.stringify(filterData))
    }
  }

  const saveWatchListData=(image,id)=>{
    const watchListData=JSON.parse(localStorage.getItem('watchListData'))||[];
    const isPresent=watchListData.some((item)=>item.id===id);
    if(!isPresent){
      const newWatchListData=[...watchListData,{"id":id,poster_path:image,type:'movie'}];
      localStorage.setItem('watchListData',JSON.stringify(newWatchListData));
    }
    else{
      const filterData=watchListData.filter((item)=>item.id!==id);
      localStorage.setItem('watchListData',JSON.stringify(filterData));
    }
    
  }

  useEffect(()=>{
    const myFavoriteData=JSON.parse(localStorage.getItem('myFavoriteData'))||[];
    const isPresentFav=myFavoriteData.some((item)=>item.id===Number(id));
    if(isPresentFav){
      setFav(true);
    }
    const watchListData=JSON.parse(localStorage.getItem('watchListData'))||[];
    const isPresentWatchList=watchListData.some((item)=>item.id===Number(id));
    if(isPresentWatchList){
      setWatch(true);
    }

  },[id]);
  
  
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
                  <Typography fontWeight={'700'} color='white' variant="h2">{singleData.original_name} <span >({new Date(singleData.first_air_date).getFullYear()})</span></Typography>
                </Box>

                <Box display={"flex"} sx={{'& >*':{margin:'5px 20px'}}}>
                  <Box title={'My Favorite'}>
                        <IconButton onClick={()=>{setFav(!addFav);saveFavoriteData(singleData.poster_path,singleData.id)}} color={addFav?'success':''} sx={{ padding: "12px" }} style={{ backgroundColor: color.secondary[900] }}>
                          <Favorite />
                          
                        </IconButton>
                    </Box>
                    <Box title={'Add to WatchList'} >
                        <IconButton onClick={()=>{setWatch(!addWatch);saveWatchListData(singleData.poster_path,singleData.id)}} color={addWatch?'success':''} sx={{ padding: "12px" }} style={{ backgroundColor: color.secondary[900] }}>
                          <WatchLater />
                          
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{'&>*':{margin:"2px 0px"}}}>
                      <Typography variant="h4" color='#cccc' fontSize={'16px'}>{singleData.tagline}</Typography>
                    </Box>
                    <Typography variant={'h4'} color='white' >Overview</Typography>
                    <Box>
                      <Typography variant="h5" color='white' >{singleData.overview}</Typography>
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