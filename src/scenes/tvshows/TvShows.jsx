import { Box } from "@mui/material";
import React from "react";
import { tvShowUrl } from "../../movieApi/urls";
import GridImagePage from "../../components/GridImagePage";

function TvShows() {

  return (
    <Box>
      <GridImagePage type={'tv'} title={'Welcome To The Tv Shows Page'} currentUrl={tvShowUrl} />
    </Box>
  );
}

export default TvShows;
