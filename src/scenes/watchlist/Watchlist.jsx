import { Box, Typography } from "@mui/material";
import React from "react";
import GridImage from "../../components/GridImage";

function Watchlist() {
  const data = [];
  return (
    <Box
      padding={"20px"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography marginBottom={"20px"} variant="h3">
        My Watchlist
      </Typography>
      {/* <Box justifySelf={'space-around'} alignSelf={'flex-start'} >
          Filter By Years.
        </Box> */}
      <Box>
        <GridImage data={data} />
      </Box>
    </Box>
  );
}

export default Watchlist;
