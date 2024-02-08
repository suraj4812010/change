import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import video from './Innovacion_Trailer.mp4'
import './Video.css'; // Import your CSS file


function Video() {
  return (
    <div className=' mt-24 flex items-center justify-center'  >
      <ReactPlayer
       url={video}
       playing={true}
       loop={false} 
       controls={true}
       width={1140}
       height={560}
       />

    </div>
  )
}

export default Video
