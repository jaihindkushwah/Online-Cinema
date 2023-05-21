// import React from 'react';
// import { Player,BigPlayButton } from 'video-react';
// import "../../node_modules/video-react/dist/video-react.css";
// import logo from '../assests/jai.png'
// import { Box } from '@mui/material';
// import logo11 from '../assests/logo512.png'


// function VideoPlayer(props) {
//   return (
//     <Box width={'920px'} height={'720px'}>
//         {/* <Player
//         playsInline
//         poster={logo}
//         width={10}
//         height={10}
//         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
//         >
//         <BigPlayButton position="center" />
//         </Player> */}
//         <iframe src="https://www.youtube.com/embed/qtRKdVHc-cE" frameborder="0"></iframe>
//     </Box>
//   )
// }

// export default VideoPlayer
import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  const videoId = 'qtRKdVHc-cE'; // Replace with the actual YouTube video ID

  const handlePlay = () => {
    console.log('Video played');
    // Add your custom logic here
  };

  const playerOptions = {
    height: '360',
    width: '640',
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
  };

  return (
    <div>
      <YouTube
        videoId={videoId}
        containerClassName="custom-player-container" // Apply your custom CSS class
        opts={playerOptions}
        onPlay={handlePlay} // Add your event handlers
      />
    </div>
  );
};

export default VideoPlayer;