import React, {useState} from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/Key';

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

const API_URL = "http://localhost:8888/api/auth/";

function Register() {
    const iconStyle = {
        height: "1.5em",
        width: "2em"
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState([]);


    const handleChangeName = event => {
        setName(event.target.value);
    };
    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };
    const handleChangePassword = event => {
        setPassword(event.target.value);
    };

    const addUser = async () => {
        let response = await axios.post(API_URL + "signup", {
            name,
            email,
            password,
            role: ["ROLE_USER"]
        });
            if (response) {
                await axios.post("http://localhost:8888/util/registerSendMail",{
                    email,
                    name
                });
                console.log("ok")
                let username = name
                const loginResponse = await axios
                    .post(API_URL + "signin", {
                        username,
                        password,
                    });
                if (loginResponse.data.token) {
                    localStorage.setItem("user", JSON.stringify(loginResponse.data));
                    window.location.replace("/");
                    // window.location.replace("/profile");

                }
            }
    }

    return (
        <MDBContainer fluid>

            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <PersonIcon style={iconStyle}/>
                                <MDBInput placeholder='Username' id='form1' type='text' className='w-100' onChange={handleChangeName}/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <EmailIcon style={iconStyle}/>
                                <MDBInput placeholder='Your Email' id='form2' type='email' onChange={handleChangeEmail}/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <LockIcon style={iconStyle}/>
                                <MDBInput placeholder='Password' id='form3' type='password' onChange={handleChangePassword}/>
                            </div>

                            {/*<div className="d-flex flex-row align-items-center mb-4">*/}
                            {/*    <KeyIcon style={iconStyle}/>*/}
                            {/*    <MDBInput placeholder='Repeat your password' id='form4' type='password'/>*/}
                            {/*</div>*/}

                            {/*<div className='mb-4'>*/}
                            {/*    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />*/}
                            {/*</div>*/}

                            {/*<MDBBtn className='mb-4' size='lg'>Register</MDBBtn>*/}
                            <button type="button" className="btn btn-primary" onClick={addUser}>Register</button>

                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
    );
}

export default Register;