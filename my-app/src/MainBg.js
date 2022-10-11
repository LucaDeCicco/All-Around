
import React, { Component } from 'react';
import mainPage3 from "C:/Codecool/repository/ADVANCED/weekpair2/el-proyecte-grande-sprint-2-java-LucaDeCicco/my-app/src/images/mainPage3.jpg";
import { Button } from '@mui/material';
// import {blue, blueGrey, yellow} from "@mui/material/colors";

class MainBg extends Component {
  render() {
    const parent={
        backgroundImage: `url(${mainPage3})`,
        height:'150vh',
        width: '100%',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: "2rem 2rem",
        textAlign: "center",
        // opacity: "50%",
    };
    const childDiv={
        alignItems: "center",
        display: "inline-block",
        padding: "1rem 1rem",
    };
    const buttonStyle={
        width: '50%',
        height: "150vh",
        fontSize:'70px',
        top: "50%",
    };
    return (
      <div style={parent}>
        <div style={childDiv}>
            <Button variant="text" color={"warning"} style={buttonStyle}><b>Text</b></Button>
        </div>
        <div style={childDiv}>
            <Button variant="text" color={"warning"} style={buttonStyle}><b>Text</b></Button>
        </div>
      </div>
    );
  }
}
   
export default MainBg;