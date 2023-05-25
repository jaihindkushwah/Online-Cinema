import { Box } from '@mui/material'
import React from 'react'
import Poster from './Poster'
// import VideoPlayer from '../../components/VideoPlayer'
import VerticalImageList from '../../components/VerticalImageList'
import useFetchApi from '../../customHooks/fetchApi'
import { actionAdventureUrl, comedyUrl, documentryUrl, originalUrl, recommendedUrl, romanceUrl, trendingUrl } from "../../movieApi/urls";
// import { useLocation } from 'react-router-dom'


function HomePage() {
    // const imdbApiKey=process.env.REACT_APP_IMDB_API_KEY;
    // console.log(imdbApiKey);
    const documentry = useFetchApi(documentryUrl);
    // console.log(imdbAdvanceSearch(imdbApiKey,'title_type=documentary'));
    // console.log(documentry[0]);genres=comedy,documentary title_type=tv_series
    const trending=useFetchApi(trendingUrl);
    const Comedy=useFetchApi(comedyUrl);
    const Romance=useFetchApi(romanceUrl);
    const Recomended=useFetchApi(recommendedUrl);
    const ActionAdventureSifi=useFetchApi(actionAdventureUrl);
    const TvOriginal=useFetchApi(originalUrl);


  return (
    <Box padding={'20px'} sx={{'&>*':{marginBottom:'20px'}}} >
      <Poster/>
      <Box>
        <VerticalImageList type={'tv'} data={TvOriginal[0]} title={'Tv Originals'}/>
        <VerticalImageList type={'movie'} data={Recomended[0]} title={'Recommended for you'}/>
        <VerticalImageList type={'trending'} data={trending[0]} title={'Trending'}/>
        <VerticalImageList type={'movie'} data={ActionAdventureSifi[0]} title={'Action, Adventure And Sci-Fi'}/>
        <VerticalImageList type={'movie'} data={Comedy[0]} title={'Comedy'}/>
        <VerticalImageList type={'movie'} data={Romance[0]} title={'Romance'}/>
        <VerticalImageList type={'movie'} data={documentry[0]} title={'Documentary'}/>
        
        
        {/* <VideoPlayer/> */}
      </Box>
    </Box>
  )
}

export default HomePage