import { Box, Typography } from "@mui/material";
import React from "react";
import GridImage from "../../components/GridImage";
import MovieListData from "../movies/getMovieDate";

function TvShows() {
  const data = MovieListData();

  return (
    <Box
      padding={"20px"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography marginBottom={"20px"} variant="h3">
        Welcome to the Tv Shows page
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

export default TvShows;
