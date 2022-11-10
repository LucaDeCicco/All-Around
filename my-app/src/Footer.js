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
        marginLeft: "2em",
        marginTop: "1em"
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
          // backgroundColor: (theme) =>
          //   theme.palette.mode === 'light'
          //     ? theme.palette.grey[200]
          //     : theme.palette.grey[800],
            backgroundColor: '#B7C8B5',
            marginTop: "???px"
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
              E-mail: luca14.decicco@gmail.com

          </Typography>
          <Copyright />
          <div key={"icons"} style={logosStyle}>
              <FacebookIcon style={logoStyle}/>
              <InstagramIcon style={logoStyle}/>
              <InfoIcon style={logoStyle}/>
          </div>

        </Container>
      </Box>
    </Box>
  );
}