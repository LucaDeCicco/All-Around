import React, {useEffect, useState} from 'react';
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
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [userNames, setUserNames] = useState([]);
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetcherUsernames = async () => {
            let request = await fetch(`http://localhost:8888/util/usernames`)
            let result = await request.json();
            setUserNames(result);
            // setLoading(false)
        };
        const fetcherEmails = async () => {
            let request = await fetch(`http://localhost:8888/util/getEmails`)
            let result = await request.json();
            setEmails(result);
            setLoading(false)
        };

        fetcherUsernames();
        fetcherEmails();
    },[loading])


    const handleChangeName = event => {
        setName(event.target.value);
        let sameUsername = false;
        for (let userName of userNames) {
            if (userName.toLowerCase()===event.target.value.toLowerCase()){
                console.log("username used")
                sameUsername = true;
            }
        }
        if (sameUsername){
            setErrorMessage("This username is used")
        }
        else {
            setErrorMessage("")
        }
    };
    const handleChangeEmail = event => {
        setEmail(event.target.value);
        let sameEmail = false;
        for (let email of emails) {
            if (email.toLowerCase()===event.target.value.toLowerCase()){
                sameEmail = true;
            }
        }
        if (sameEmail){
            setErrorMessage("This email is used")
        }
        else {
            setErrorMessage("")
        }
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
        if (event.target.value.length<6){
            setErrorMessage("The password must contain at least 6 characters")
        }
        else {
            setErrorMessage("")
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // Call the function here
            addUser();
        }
    };

    const validateEmail =()=> {
        if (!email.includes("@")){
            setErrorMessage("The email must contain \"@\"")
        }
        if (email.split("@")[1]===""){
            setErrorMessage("The email must have a correct format")
        }
    }

    // const validatePassword =()=> {
    //     let passwordList = password.split("")
    //     let checkCounter = 0;
    //     let lowerAlphabet = "abcdefghijklmnopqrstuvwxyz"
    //     for (let letter of passwordList) {
    //         if (!lowerAlphabet.includes(letter)){
    //             checkCounter ++;
    //         }
    //     }
    //     if (checkCounter<2){
    //         setErrorMessage("Make your password stronger")
    //     }
    // }

    const addUser = async () => {
        validateEmail()
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

                            <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">Sign up</p>

                            <label style={{color:"red"}}>{errorMessage}</label>
                            <br/>
                            <div className="d-flex flex-row align-items-center mb-4 ">
                                <PersonIcon style={iconStyle}/>
                                <MDBInput placeholder='Username' id='form1' type='text' className='w-100' onChange={handleChangeName} onKeyDown={handleKeyDown}/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <EmailIcon style={iconStyle}/>
                                <MDBInput placeholder='Your Email' id='form2' type='email' onChange={handleChangeEmail} onKeyDown={handleKeyDown}/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <LockIcon style={iconStyle}/>
                                <MDBInput placeholder='Password' id='form3' type='password' onChange={handleChangePassword} onKeyDown={handleKeyDown}/>
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