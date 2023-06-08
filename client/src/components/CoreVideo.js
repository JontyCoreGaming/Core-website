import React from 'react'
// import ReactPlayer from 'react-player'
import VideoJS from './VideoJS.js'
import video from '../assets/video.mp4'




const coreVideo = () => {
    const videoJSOptions = {
        controls: true, 
        sources: [{
            src: video, 
            type: 'video/mp4'
        }]
    }
    
    return (
    <div className='video'>
        <VideoJS options={videoJSOptions}/>
    </div>
  )
}

export default coreVideo