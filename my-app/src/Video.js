import React from 'react'
import MyVideo from '../src/videos/video.mp4'

const Video = () => {
    const videoStyle = {
        height: "10em",
        width: "10em"
    }
    return (
        <div className='video'>
            <video src={MyVideo} style={videoStyle} autoPlay loop muted />
        </div>
    )
}

export default Video
