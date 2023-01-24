import React from 'react'
import MyVideo from 'C:/Codecool/repository/CV-Projects/All_Around/All-Around/my-app/src/videos/profilePageVideo.mp4'

const ProfilePageVideo = () => {
    const videoStyle = {
        display: "block",
        height: "20em",
        width: "80em",
        marginLeft: "auto",
        marginRight: "auto"
    }

    return (
        <div className='video'>
            <video src={MyVideo} style={videoStyle} autoPlay loop muted />
        </div>
    )
}

export default ProfilePageVideo