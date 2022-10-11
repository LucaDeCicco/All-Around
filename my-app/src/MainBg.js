
import React, { Component } from 'react';
import mainPage from "C:/Codecool/repository/ADVANCED/weekpair2/el-proyecte-grande-sprint-2-java-LucaDeCicco/my-app/src/images/mainPage.jpg";

class MainBg extends Component {
  render() {
    const myStyle={
        backgroundImage: `url(${mainPage})`,
        height:'150vh',
        width: '100%',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        {/* <h1></h1> */}
      </div>
    );
  }
}
   
export default MainBg;