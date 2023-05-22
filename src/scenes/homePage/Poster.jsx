import { tokens } from '../../theme';
import poster from './poster.jpg'
import { Box, Button, ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material'
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
function Poster() {
  const mobile=useMediaQuery('(max-width:480px)');
  const theme=useTheme();
  const color=tokens(theme.palette.mode);
  return (
        <Box> 
            <Box sx={{background:`url(${poster})`,backgroundRepeat:'no-repeat', backgroundSize:'100% 100%',objectFit:'cover',padding:"20px"}} width={'100%'} height={mobile?'40vh':'65vh'}>
                <Box sx={{'&>*':{margin:'10px 0px'}}}>
                  <Typography variant='h2' color={'white'} fontWeight={'600'}>Lost In Space 2</Typography>
                  <Typography variant='h6'color={'#cccc'}>A Netflix Original Series</Typography>
                  <Typography variant='h5'><span style={{color:'green',fontWeight:'600'}}>98% Match </span><span style={{color:'white'}}>  2019 </span><ButtonBase color='white'><span style={{color:'white'}}> 1B+</span></ButtonBase></Typography>
                  <Box sx={{'& > *':{fontSize:'10px',fontWeight:'600'},'& >*:hover':{backgroundColor:color.secondary[500]}}}>
                    <Button variant="contained" style={{backgroundColor:color.secondary[500],color:'white',borderRadius:'0px'}}  startIcon={<PlayCircleFilledWhiteOutlinedIcon/>}>Watch now</Button>
                    
                    <Button variant="contained" style={{marginLeft:'8px',color:'white',borderRadius:'0px',backdropFilter: 'blur(8px)',backgroundColor:'rgba(166, 166, 166,0.4)'}}  startIcon={<AddCircleOutlineOutlinedIcon/>}>My List</Button>
                  </Box>
                </Box>
                <Box></Box>
            </Box>
        </Box>
  )
}

export default Poster