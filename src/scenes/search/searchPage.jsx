import {
  Box,
  Button,
  CircularProgress,
  // InputAdornment,
  // MenuItem,
  // Select,
  // TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { tokens } from "../../theme";
import { searchDataUrl } from "../../movieApi/urls";
import GridImage from "../../components/GridImage";
import { useSearchState } from "../../context/SearchContext";

function SearchPage() {
  // const [searchInput,setSearchInput]=useState('');
  const [loading,setLoading]=useState(false);
  const [data, setData] = useState([]);
  const { searchInput, setSearchInput } = useSearchState();
  useEffect(() => {
    // const timeoutId = setTimeout(() => {
    const url = searchDataUrl(searchInput.type, searchInput.searchValue);
    const fetchData=async()=>{
      try {
        setLoading(true);
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setLoading(false);
        setData(data.results);
      } catch (error) {
        alert("Something went wrong");
        setLoading(false);
      }
    }
    fetchData();
  }, [searchInput]);

  const mid = useMediaQuery("(max-width:720px)");
  const sm = useMediaQuery("(max-width:480px)");
  const theme = useTheme();
  const color = tokens(theme.palette.mode);
  return (
    <Box
      padding={sm ? "5px" : "20px"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      <Box width={sm ? "90%" : mid ? "80%" : "50%"}>
        <Button
          disabled={searchInput.type === "tv"}
          onClick={() => {
            setSearchInput({ ...searchInput, type: "tv" });
          }}
          sx={{
            backgroundColor: color.pink[500],
            "&:hover": { backgroundColor: color.pink[500] },
            marginLeft: "5px",
            padding: "8px 18px",
            fontSize: "16px",
            textTransform: "capitalize",
          }}
        >
          TV
        </Button>
        <Button
          disabled={searchInput.type === "movie"}
          onClick={() => {
            setSearchInput({ ...searchInput, type: "movie" });
          }}
          sx={{
            backgroundColor: color.pink[500],
            "&:hover": { backgroundColor: color.pink[500] },
            marginLeft: "5px",
            padding: "8px 18px",
            fontSize: "16px",
            textTransform: "capitalize",
          }}
        >
          Movie
        </Button>
        {/* <form sx={{'width':'100%'}} onSubmit={
        (e)=>{e.preventDefault();}
        }>
        <Box minWidth={'200px'} borderRadius={'5px'} padding={'10px'} display={'flex'} alignItems={'center'} justifyContent={'center'} sx={{backgroundColor:color.lightblue[500]}}>
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
        </form> */}
      </Box>

      <Box padding="20px">
        {loading ? (
          <CircularProgress color="secondary" size={sm ? "50px" : "100px"} />
        ) : (
          <GridImage type={searchInput.type} data={data} />
        )}
      </Box>
    </Box>
  );
}

export default SearchPage;
