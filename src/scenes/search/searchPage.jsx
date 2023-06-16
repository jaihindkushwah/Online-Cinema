
import { Box, Button,  InputAdornment, MenuItem, Select, TextField, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { tokens } from '../../theme';
import { searchDataUrl } from '../../movieApi/urls'
import GridImage from '../../components/GridImage';

function SearchPage() {
  const [searchInput,setSearchInput]=useState('');
  const [selectType,setSelectType]=useState('movie');
  const [data,setData]=useState([]);
  useEffect(()=>{
    const timeoutId=setTimeout(()=>{
      const url=searchDataUrl(selectType,searchInput);
      fetch(url)
      .then((res)=>res.json())
      .then((res)=>{
          setData(res.results)
      });
    },2000);
    return ()=>clearTimeout(timeoutId);
  },[searchInput,selectType]);
  

  
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  return (
    <Box padding='20px' display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <Box width={'50%'}>
      <form sx={{'width':'100%'}} onSubmit={
        (e)=>{e.preventDefault();}
        }>
        <Box minWidth={'200px'} borderRadius={'5px'} padding='10px' display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{backgroundColor:color.lightblue[500]}}>
                <TextField
                required
                sx={{'& div:hover':{border:'none'},display:'flex',justifyContent:'space-between',backgroundColor:'#ccc','&  input':{textAlign:'center',color:'black',height:'10px',fontSize:'15px',fontWeight:'500'}}}
                placeholder='Type your movie or tv shows name'
                value={searchInput}

                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                          <Select onChange={(e)=>{setSelectType(e.target.value)}} sx={{marginLeft:'-14px','&>div':{padding:'11px'},color:'black',':hover':{border:'none',outline:'none'}}} defaultValue={'movie'}>
                            <MenuItem value='movie'>Movie</MenuItem>
                            <MenuItem value='tv' >TV</MenuItem>
                          </Select>
                    </InputAdornment>
                  ),
                }}
                onChange={(e)=>{setSearchInput(e.target.value)}}
                fullWidth />
                <Button type='submit' sx={{backgroundColor:color.pink[500],'&:hover':{backgroundColor:color.pink[500]},marginLeft:'5px',padding:'8px 18px',fontSize:'16px',textTransform:'capitalize'}}>
                  Search
                </Button>
            </Box>
        </form>
      </Box>
      
      <Box padding='20px'>
                <GridImage type={selectType} data={data}/>
      </Box>
    </Box>
  )
}

export default SearchPage