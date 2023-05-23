import { Box } from '@mui/material'
import React from 'react'
import Poster from './Poster'
// import VideoPlayer from '../../components/VideoPlayer'
import VerticalImageList from '../../components/VerticalImageList'
import useFetchApi from '../../customHooks/fetchApi'
import { imdbAdvanceSearch } from "../../movieApi/urls";


function HomePage() {
    const imdbApiKey=process.env.REACT_APP_IMDB_API_KEY;
    // console.log(imdbApiKey);
    const documentry = useFetchApi(imdbAdvanceSearch(imdbApiKey,'title_type=documentary'));
    // console.log(imdbAdvanceSearch(imdbApiKey,'title_type=documentary'));
    // console.log(documentry[0]);genres=comedy,documentary title_type=tv_series
    const Comedy=useFetchApi(imdbAdvanceSearch(imdbApiKey,'genres=comedy'));
    const Romance=useFetchApi(imdbAdvanceSearch(imdbApiKey,'genres=romance'));
    const Recomended=useFetchApi(imdbAdvanceSearch(imdbApiKey,'genres=action,family,mystery,sci_fi'));
    const ActionAdventureSifi=useFetchApi(imdbAdvanceSearch(imdbApiKey,'genres=action,adventure,sci_fi'));
    // console.log(Recomended) genres=action,adventure,animation,biography,comedy,crime,family,game_show,horror,mystery,reality_tv,sport,thriller
    const TvOriginal=useFetchApi(imdbAdvanceSearch(imdbApiKey,'genres=sci_fi,comedy,,thriller,adventure,animation'));




  return (
    <Box padding={'20px'} sx={{'&>*':{marginBottom:'20px'}}} >
      <Poster/>
      <Box>
        <VerticalImageList data={TvOriginal[0]} title={'Tv Originals'}/>
        <VerticalImageList data={Recomended[0]} title={'Recommended for you'}/>
        <VerticalImageList data={ActionAdventureSifi[0]} title={'Action, Adventure And Sci-Fi'}/>
        <VerticalImageList data={Comedy[0]} title={'Comedy'}/>
        <VerticalImageList data={documentry[0]} title={'Documentariy'}/>
        <VerticalImageList data={Romance[0]} title={'Romance'}/>
        
        
        {/* <VideoPlayer/> */}
      </Box>
    </Box>
  )
}

export default HomePage