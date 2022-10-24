import React from 'react'
import MyVideo from '../src/videos/video.mp4'

const Video = () => {
    return (
        <div className='video'>
            <video src={MyVideo} autoPlay loop muted />
        </div>
    )
}

export default Video
