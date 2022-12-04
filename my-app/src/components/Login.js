import React, {useState} from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';

const API_URL = "http://localhost:8888/api/auth/";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeUsername = event => {
        setUsername(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    };


    const loginUser = async () => {
        const response = await axios
            .post(API_URL + "signin", {
                username,
                password,
            });
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
            // sessionStorage
            window.location.replace("/");
            // window.location.replace("/profile");

        }
        return response.data;
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50" style={{backgroundColor: 'white'}}>

            <MDBInput wrapperClass='mb-4' placeholder='Username' id='form1' onChange={handleChangeUsername}/>
            <MDBInput wrapperClass='mb-4' placeholder='Password' id='form2' type='password' onChange={handleChangePassword}/>

            <div className="d-flex justify-content-between mx-3 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="/forgotPassword">Forgot password?</a>
            </div>

            {/*<MDBBtn className="mb-4" onClick={loginUser}>Sign in</MDBBtn>*/}
            <button type="button" className="btn btn-primary" onClick={loginUser}>Login</button>


            <div className="text-center">
                <p>Not a member? <a href="/register">Register</a></p>
                <p>or sign up with:</p>

                <div className='d-flex justify-content-center' style={{}}>
                    <MDBBtn tag='a' color='none' className='m-1' >
                        <FacebookIcon/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-1'>
                        <GoogleIcon/>
                    </MDBBtn>


                </div>
            </div>

        </MDBContainer>
    );
}

export default Login;