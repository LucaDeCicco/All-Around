import React from 'react'
import MyVideo from '../src/videos/video.mp4'

const Video = () => {
    const videoStyle = {
        display: "block",
        height: "30em",
        width: "50em",
        marginLeft: "auto",
        marginRight: "auto"
    }
    return (
        <div className='video'>
            <video src={MyVideo} style={videoStyle} autoPlay loop muted />
        </div>
    )
}

export default Video
