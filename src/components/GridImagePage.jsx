import { Box, Button, TextField, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useReducer, useState } from "react";
import GridImage from "./GridImage";
import getData from "../movieApi/getListOfData";
import { ChevronLeftRounded, ChevronRightOutlined } from "@mui/icons-material";
import { tokens } from "../theme";


function GridImagePage({currentUrl,title,type}) {
  const [currentInput,setCurrentInput]=useState(1);
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  
  const reducer=(state,action)=>{
        switch(action.type){
            case "INC":
                setCurrentInput(state.value+1);
                return {value:state.value+1};
            case "DEC":
                if(state.value===1){
                    setCurrentInput(1);
                    return {value:1};
                }else{
                    setCurrentInput(state.value-1);
                   return {value:state.value-1};
                }
            case "ByInput":
                const pages=Number(action.payload);
                if(isNaN(pages)){
                    alert('Please Enter Number');
                    setCurrentInput(state.value);
                    return state;
                }
                else{
                    if(pages<1 || pages>250){
                        alert("Please Enter a number between 1 to 250");
                        setCurrentInput(state.value);
                        return state;
                    }
                    else{
                        return {value:pages};
                    }
                }

            default:
                return state;
                
        }
  }

    const [state,dispatch]=useReducer(reducer,{value:1});
    const data = getData(currentUrl,state.value);
    const sm=useMediaQuery('(max-width:480px)');
   
  return (
    <Box
      padding={"20px"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography letterSpacing={'1px'} marginBottom={"20px"} fontSize={sm && '19px'} variant="h3">
        {title}
      </Typography>
      {/* <Box justifySelf={'space-around'} alignSelf={'flex-start'} >
          Filter By Years.
        </Box> */}
      <Box>
        <GridImage type={type} data={data} />
      </Box>
      <Box sx={{'& > button:hover':{backgroundColor:color.secondary[400]}}}>
          <Button sx={{backgroundColor:color.secondary[500],marginRight:'8px'}} disabled={state.value===1} onClick={()=>{dispatch({type:'DEC'})}}  startIcon={<ChevronLeftRounded/>} variant="contained">Prev</Button>
          <TextField onChange={(e)=>{setCurrentInput(e.target.value)}} value={currentInput} onKeyDown={(e)=>{e.key==='Enter' && dispatch({type:'ByInput',payload:e.target.value})}} type="text" variant="standard"  style={{backgroundColor:color.secondary[900],padding:'3px',width:'30px',borderRadius:'5px'}}  InputProps={{ disableUnderline: true }}   sx={{fontSize:'12px'}}/>
          <Button sx={{backgroundColor:color.secondary[500],marginLeft:'8px'}} disabled={state.value===250} onClick={()=>{dispatch({type:'INC'})}} endIcon={<ChevronRightOutlined/>} variant="contained">Next</Button>
      </Box>
    </Box>
  );
}

export default GridImagePage;
