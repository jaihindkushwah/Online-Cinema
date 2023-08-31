import { Box } from '@mui/material'
import React from 'react'
import Poster from './Poster'
import useFetchApi from '../../customHooks/fetchApi'
import { actionAdventureUrl, comedyUrl, documentryUrl, originalUrl, recommendedUrl, romanceUrl, trendingUrl } from "../../movieApi/urls";
import { Suspense } from 'react';

import VerticalImageList from '../../components/VerticalImageList'


function HomePage() {
    const documentry = useFetchApi(documentryUrl);
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
        <Suspense fallback={<div>Loading...........</div>}>
          <VerticalImageList type={'tv'} data={TvOriginal[0]} title={'Tv Originals'}/>
        </Suspense>
        <Suspense fallback={<div>Loading...........</div>}>
          <VerticalImageList type={'movie'} data={Recomended[0]} title={'Recommended for you'}/>
        </Suspense>
        <Suspense fallback={<div>Loading...........</div>}>
          <VerticalImageList type={'trending'} data={trending[0]} title={'Trending'}/>
        </Suspense>
        <Suspense fallback={<div>Loading...........</div>}>
          <VerticalImageList type={'movie'} data={ActionAdventureSifi[0]} title={'Action, Adventure And Sci-Fi'}/>
        </Suspense>
        <Suspense fallback={<div>Loading...........</div>}>
          <VerticalImageList type={'movie'} data={Comedy[0]} title={'Comedy'}/>
        </Suspense>
        <Suspense fallback={<div>Loading...........</div>}>
          <VerticalImageList type={'movie'} data={Romance[0]} title={'Romance'}/>
        </Suspense>
        <Suspense fallback={<div>Loading...........</div>}>
          <VerticalImageList type={'movie'} data={documentry[0]} title={'Documentary'}/>
        </Suspense>
        
          
      </Box>
    </Box>
  )
}

export default HomePage