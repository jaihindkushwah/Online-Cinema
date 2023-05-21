import { Box,Button,Typography, useTheme } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import ImageItem from './ImageItem'
import logo from '../assests/jai.png'
import logo11 from '../assests/logo512.png'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


import { tokens } from '../theme';
function VerticalImageList( {title}) {
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
        setMaxScrollWidth(Number(ref.current.scrollWidth)-Number(ref.current.offsetWidth));
    },[scrollValue]);

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
            <Box display={'flex'} justifyContent={'space-between'} margin={'20px 0px'} >
                <Typography variant='h4' letterSpacing={'1.5px'}> {title} </Typography> 
                <Box sx={{'& > Button:hover':{backgroundColor:color.secondary[500]},'& > Button':{color:'white'}}}>
                    <Button onClick={PrevScroll} variant='standard' disabled={scrollValue===0 ? true:false} sx={{backgroundColor:color.secondary[500],marginRight:'5px'}} startIcon={<ChevronLeftIcon/>}/>
                    <Button onClick={NextScroll} variant='standard' disabled={scrollValue===maxScrollWidth ? true:false} sx={{backgroundColor:color.secondary[500]}} endIcon={<ChevronRightIcon/>}/>
                </Box>

            </Box>   
            <Box zIndex={'5'} display={'flex'} alignItems={'center'} sx={{overflow:'hidden'}} ref={ref} >
            {/* // total scroll length=156*total_no_of_items */}
                <ImageItem src={logo} />
                <ImageItem src={logo} />
                <ImageItem src={logo11} />
                <ImageItem src={logo} />
                <ImageItem src={logo11} />
                <ImageItem src={logo} />
                <ImageItem src={logo} />
                <ImageItem src={logo11} />
                <ImageItem src={logo11} />
                <ImageItem src={logo} />
                <ImageItem src={logo} />
                <ImageItem src={logo11} />
                <ImageItem src={logo} />
                <ImageItem src={logo11} />
                <ImageItem src={logo11} />
                <ImageItem src={logo} />
                <ImageItem src={logo} />
            </Box>
        </Box>

  )
}

export default VerticalImageList