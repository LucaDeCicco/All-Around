import React, {useEffect, useState} from "react";
import {MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from "@mui/icons-material/Email";
import KeyIcon from "@mui/icons-material/Key";
import axios from "axios";

const API_URL = "http://localhost:8888/util/";


function ChangeForgotPassword() {

    const [currentUser, setCurrentUser] = useState(undefined);
    const [email, setEmail] = useState('');
    const [oldPassword, setOldPassword] = useState([]);
    const [newPassword, setNewPassword] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const iconStyle = {
        height: "1.5em",
        width: "2em"
    }
    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };
    const handleChangeOldPassword = event => {
        setOldPassword(event.target.value);
    };
    const handleChangeNewPassword = event => {
        setNewPassword(event.target.value);
    };

    const changePassword = async () => {
        const response = await axios
            .post(API_URL + "changePassword", {
                email,
                oldPassword,
                newPassword
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
            <MDBContainer fluid>
                <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Change your password!</p>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <EmailIcon style={iconStyle}/>
                                    <MDBInput placeholder='Your Email' id='form2' type='email' onChange={handleChangeEmail}/>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <KeyIcon style={iconStyle}/>
                                    <MDBInput placeholder='Old password' id='form4' type='password' onChange={handleChangeOldPassword}/>
                                </div>
                                <div className="d-flex flex-row align-items-center mb-4">
                                    <LockIcon style={iconStyle}/>
                                    <MDBInput placeholder='New password' id='form3' type='password' onChange={handleChangeNewPassword}/>
                                </div>
                                <br></br>
                                <button type="button" className="btn btn-warning" onClick={changePassword}>Set</button>
                            </MDBCol>
                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage style={{height:'30em'}} src='https://img.freepik.com/free-vector/reset-password-concept-illustration_114360-7886.jpg?w=740&t=st=1670168341~exp=1670168941~hmac=3759ad42f5fde1c6df0643ca40ad12b3350df9689f03722c192d4f0dbc2a48de' fluid/>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
}

export default ChangeForgotPassword;