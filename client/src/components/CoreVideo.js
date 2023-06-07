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
        {/* <ReactPlayer 
            url="https://vimeo.com/690473326/8ab45c92f3?share=copy"
            controls= {true}
            width="940"
            height="860"
        /> */}

        <VideoJS options={videoJSOptions}/>


    </div>
  )
}

export default coreVideo