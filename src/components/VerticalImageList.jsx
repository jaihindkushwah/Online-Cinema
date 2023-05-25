import { Box,Button,Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ImageItem from './ImageItem'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import logo from '../assests/jai.png'
// import logo1 from '../assests/logo512.png'

import { imageBaseUrl } from '../movieApi/urls';


import { tokens } from '../theme';
function VerticalImageList( {title,data,type}) {
    const ref=useRef(null);
    const [scrollValue,setScrollValue]=useState(0);
    const [maxScrollWidth,setMaxScrollWidth]=useState(0);
    // total scroll length=156*total_no_of_items
    const theme=useTheme();
    const color=tokens(theme.palette.mode);
    

    const PrevScroll=()=>{
        
        if(scrollValue-156>0){
            setScrollValue(scrollValue-156);
        }
        else{
            setScrollValue(0);
        }
    }
    useEffect(()=>{
        setMaxScrollWidth(Number(ref.current.scrollWidth)-Number(ref.current.offsetWidth));
    },[])
    useEffect(()=>{
        ref.current.scrollLeft=scrollValue;
        // console.log(scrollValue);
        setMaxScrollWidth(Number(ref.current.scrollWidth)-Number(ref.current.offsetWidth));
    },[scrollValue,data]);

    const NextScroll=()=>{
        if(scrollValue<maxScrollWidth-156){
            setScrollValue(scrollValue+156);
        }
        else{
            setScrollValue(maxScrollWidth);
        }
    }
    
  return (  
        <Box>
            <Box display={'flex'} justifyContent={'space-between'} margin={'10px 0px'} >
                <Typography padding={'0px 5px'} variant='h3' letterSpacing={'1px'}> {title} </Typography> 
                <Box sx={{'& > Button:hover':{backgroundColor:color.secondary[500]},'& > Button':{color:'white'}}}>
                    <Button onClick={PrevScroll} variant='standard' disabled={scrollValue===0 ? true:false} sx={{backgroundColor:color.secondary[500],marginRight:'5px'}} startIcon={<ChevronLeftIcon/>}/>
                    <Button onClick={NextScroll} variant='standard' disabled={scrollValue===maxScrollWidth ? true:false} sx={{backgroundColor:color.secondary[500]}} endIcon={<ChevronRightIcon/>}/>
                </Box>

            </Box>   
            {/* // total scroll length=156*total_no_of_items */}
            
            <Box zIndex={'5'} display={'flex'} alignItems={'center'} sx={{overflow:'hidden'}} ref={ref} >

                { data.map((item)=>{
                        return(
                            <ImageItem type={type==='trending'?item.media_type:type} key={item.id}  id={item.id} src={imageBaseUrl+item.poster_path} />
                        )
                    })
                }
                
{/* 

                    <ImageItem src={logo} />
                    <ImageItem src={logo1} />
                    <ImageItem src={logo1} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo1} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo1} />
                    <ImageItem src={logo1} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo1} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo1} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo1} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo1} />
                    <ImageItem src={logo} />
                    <ImageItem src={logo1} /> */}

                
                
            </Box>
        </Box>

  )
}

export default VerticalImageList