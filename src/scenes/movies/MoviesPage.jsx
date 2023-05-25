// import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import { movieListUrl } from "../../movieApi/urls";

import GridImagePage from "../../components/GridImagePage";
import { Box } from "@mui/material";

function MoviesPage() {

  return (
    <Box>
      <GridImagePage type={'movie'} title={'Welcome To The Movies Page'} currentUrl={movieListUrl} />
    </Box>
  );
}

export default MoviesPage;
