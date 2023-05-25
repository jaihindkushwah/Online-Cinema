import { Box, Typography } from "@mui/material";
import React from "react";
import GridImage from "../../components/GridImage";

function Watchlist() {
  const data = JSON.parse(localStorage.getItem('watchListData'))||[];
  return (
    <Box
      padding={"20px"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      
    >
      <Typography letterSpacing={'1px'} marginBottom={"20px"} variant="h3">
        My Watchlist
      </Typography>
      

      <Box>
        <GridImage data={data} />
      </Box>
    </Box>
  );
}

export default Watchlist;
