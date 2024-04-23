import { Box, CircularProgress } from '@mui/material'
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
        <Suspense fallback={<CircularProgress color="secondary" size={"50px"} />}>
          <VerticalImageList type={'tv'} data={TvOriginal.data} title={'Tv Originals'}/>
        </Suspense>
        <Suspense fallback={<CircularProgress color="secondary" size={"50px"} />}>
          <VerticalImageList type={'movie'} data={Recomended.data} title={'Recommended for you'}/>
        </Suspense>
        <Suspense fallback={<CircularProgress color="secondary" size={"50px"} />}>
          <VerticalImageList type={'trending'} data={trending.data} title={'Trending'}/>
        </Suspense>
        <Suspense fallback={<CircularProgress color="secondary" size={"50px"} />}>
          <VerticalImageList type={'movie'} data={ActionAdventureSifi.data} title={'Action, Adventure And Sci-Fi'}/>
        </Suspense>
        <Suspense fallback={<CircularProgress color="secondary" size={"50px"} />}>
          <VerticalImageList type={'movie'} data={Comedy.data} title={'Comedy'}/>
        </Suspense>
        <Suspense fallback={<CircularProgress color="secondary" size={"50px"} />}>
          <VerticalImageList type={'movie'} data={Romance.data} title={'Romance'}/>
        </Suspense>
        <Suspense fallback={<CircularProgress color="secondary" size={"50px"} />}>
          <VerticalImageList type={'movie'} data={documentry.data} title={'Documentary'}/>
        </Suspense>
        
          
      </Box>
    </Box>
  )
}

export default HomePage