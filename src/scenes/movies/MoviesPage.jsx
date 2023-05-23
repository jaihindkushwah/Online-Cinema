import { Box, Typography } from "@mui/material";
import React from "react";
import GridImage from "../../components/GridImage";
import MovieListData from "../../movieApi/getListOfData";
import { movieListUrl } from "../../movieApi/urls";

function MoviesPage() {
  const data = MovieListData(movieListUrl);
  // console.log(data)

  return (
    <Box
      padding={"20px"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography marginBottom={"20px"} variant="h3">
        Welcome To The Movies Page
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

export default MoviesPage;
