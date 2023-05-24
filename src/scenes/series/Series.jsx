import React from "react";
import { seriesUrl } from "../../movieApi/urls";
import GridImagePage from "../../components/GridImagePage";
import { Box } from "@mui/material";


function Series() {

  return (
    <Box>
      <GridImagePage title={'Welcome To The Series Page'} currentUrl={seriesUrl} />
    </Box>
    
  );
}

export default Series;
