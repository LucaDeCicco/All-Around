import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardImage
}
    from 'mdb-react-ui-kit';
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

const API_URL = "http://localhost:8888/api/auth/";

function Login2() {

    const iconStyle = {
        height: "1.5em",
        width: "2em"
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const handleClick = event => {
        // 👇️ toggle visibility
        setIsVisible(current => !current);
    };
    const handleChangeUsername = event => {
        setUsername(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            loginUser();
        }
    };
    const loginUser = async () => {
        let response = null;
        try {
            response = await axios
                .post(API_URL + "signin", {
                    username,
                    password,
                });
        }
        catch (err){
            setIsVisible(current => !current);
        }

        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            // sessionStorage
            window.location.replace("/");
        }
        return response.data;
    };

    return (
        <MDBContainer fluid>
            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Log in</p>
                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <PersonIcon style={iconStyle}/>
                                <MDBInput placeholder='Username' id='form1' type='text' className='w-100' onChange={handleChangeUsername} onKeyDown={handleKeyDown}/>
                            </div>
                            <div className="d-flex flex-row align-items-center mb-4">
                                <LockIcon style={iconStyle}/>
                                <MDBInput placeholder='Password' id='form3' type='password' onChange={handleChangePassword} onKeyDown={handleKeyDown}/>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={loginUser}>Log In</button>
                            <br></br>
                            <div id={"badCredentials"} style={{visibility: isVisible ? 'visible' : 'hidden'}}>
                                <Stack sx={{ width: '100%' }} spacing={2}>
                                    <Alert variant="outlined" severity="error">
                                        Username or password wrong — <a href={"/forgotPassword"}>You forgot your password ?</a>
                                    </Alert>
                                </Stack>
                            </div>
                            <br />
                            <a href={"/forgotPassword"}>Forgot password ? </a>
                            <br></br>
                            <h5 style={{textAlign:"center"}}>If you don't have an account <a href={"/register"}>click here!</a> </h5>
                        </MDBCol>
                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage style={{height:"30em"}} src='https://img.freepik.com/free-vector/user-verification-unauthorized-access-prevention-private-account-authentication-cyber-security-people-entering-login-password-safety-measures_335657-3530.jpg?w=740&t=st=1670118665~exp=1670119265~hmac=120fdbecdc56856d3bb1daaff450153deef68ac6aee7274261c502c6b8db23f8' fluid/>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBContainer>
    );
}

export default Login2;