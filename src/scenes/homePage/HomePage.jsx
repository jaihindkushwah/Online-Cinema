import { Box } from '@mui/material'
import React from 'react'
import Poster from './Poster'
// import VideoPlayer from '../../components/VideoPlayer'
import VerticalImageList from '../../components/VerticalImageList'
import { useFetchApi } from '../../customHooks/fetchApi'
import { imdbAdvanceSearch } from "../../movieApi/urls";


function HomePage() {
    const documentry = useFetchApi(imdbAdvanceSearch('title_type=documentary'));
    // console.log(documentry[0]);genres=comedy,documentary title_type=tv_series
    const Comedy=useFetchApi(imdbAdvanceSearch('genres=comedy'));
    const Romance=useFetchApi(imdbAdvanceSearch('genres=romance'));
    const Recomended=useFetchApi(imdbAdvanceSearch('genres=action,family,mystery,sci_fi'));
    const ActionAdventureSifi=useFetchApi(imdbAdvanceSearch('genres=action,adventure,sci_fi'));
    // console.log(Recomended) genres=action,adventure,animation,biography,comedy,crime,family,game_show,horror,mystery,reality_tv,sport,thriller
    const TvOriginal=useFetchApi(imdbAdvanceSearch('genres=action,adventure,animation,biography,comedy,crime,family,game_show,horror,mystery,reality_tv,sport,thriller'));




  return (
    <Box padding={'20px'} sx={{'&>*':{marginBottom:'20px'}}} >
      <Poster/>
      <Box>
        <VerticalImageList data={TvOriginal[0]} title={'Portable Tv Originals'}/>
        <VerticalImageList data={Recomended[0]} title={'Recommended for you'}/>
        <VerticalImageList data={ActionAdventureSifi[0]} title={'Action, Adventure And Si-Fi'}/>
        <VerticalImageList data={Comedy[0]} title={'Comedy'}/>
        <VerticalImageList data={documentry[0]} title={'Documentariy'}/>
        <VerticalImageList data={Romance[0]} title={'Romance'}/>
        
        
        {/* <VideoPlayer/> */}
      </Box>
    </Box>
  )
}

export default HomePage