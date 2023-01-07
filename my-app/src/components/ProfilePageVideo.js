import React from 'react'
import MyVideo from 'C:/Codecool/repository/ADVANCED/weekpair2/el-proyecte-grande-sprint-2-java-LucaDeCicco/my-app/src/videos/profilePageVideo.mp4'

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