import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InfoIcon from '@mui/icons-material/Info';
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000">
        All Around
      </Link>{' '}
      {new Date().getFullYear()}
      {'.  '}
        All Rights Reserved
    </Typography>
  );
}

export default function StickyFooter() {
    const logosStyle = {
        align: "center",
        textAlign: "center",
        // backgroundColor: "red"

    }
    const logoStyle = {
        color: "black"
    }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          backgroundColor: '#ADB5BD',
          marginTop: "???px"
        }}
      >
        <Container maxWidth="sm" style={{textAlign: 'center', display:"flex"}}>
            <div className={"emailFooter"} style={{display: 'inline-block', verticalAlign: 'middle', marginRight:"2em"}}>
              <Typography variant="body1">
                  E-mail: luca14.decicco@gmail.com
              </Typography>
                <Copyright />
            </div>
          {/*<div key={"icons"} style={logosStyle}>*/}
          {/*<div key={"icons"} style={{display: 'inline-block', alignSelf: 'start', marginLeft:'2em'}}>*/}
          {/*        <a href="/ceva">ceva</a>*/}
          {/*        <FacebookIcon style={logoStyle}/>*/}
          {/*        <InstagramIcon style={logoStyle}/>*/}
          {/*        <InfoIcon style={logoStyle}/>*/}
          {/*</div>*/}
            <div style={{display: 'inline-block', alignSelf: 'start', marginLeft:'2em'}}>
                <div style={{marginRight: "2em", display: 'inline-block', alignSelf: 'start'}}>
                    <a href={"https://www.facebook.com/CodecoolOfficial"}><FacebookIcon style={logoStyle}/></a>
                </div>
                <div style={{marginRight: "2em", display: 'inline-block', alignSelf: 'start'}}>
                    <a href={"https://www.instagram.com/codecool_official/?hl=en"}><InstagramIcon style={logoStyle}/></a>
                </div>
                <div style={{marginRight: "2em", display: 'inline-block', alignSelf: 'start'}}>
                    <a href={"/info"}><InfoIcon style={logoStyle}/></a>
                </div>
            </div>

        </Container>
      </Box>

    </Box>
  );
}