import React, {useEffect, useState} from "react";
import axios from "axios";
import {MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBContainer, MDBInput, MDBRow} from "mdb-react-ui-kit";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from '@mui/icons-material/Lock';

function ChangeForgotPassword() {

    const [currentUser, setCurrentUser] = useState(undefined);

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
    // console.log("currentUser")
    // console.log(currentUser)

        return (
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">You forgot your password!</p>
                                <h5 style={{textAlign:"center"}}>
                                    Set the password here
                                </h5>
                                <br></br>
                                <br></br>

                                {/*<div className="d-flex flex-row align-items-center mb-4">*/}
                                {/*    <EmailIcon style={iconStyle}/>*/}
                                {/*    <MDBInput placeholder='Your Email' id='form2' type='email' onChange={handleChangeEmail}/>*/}
                                {/*</div>*/}

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <LockIcon style={iconStyle}/>
                                    <MDBInput placeholder='Password' id='form3' type='password'/>
                                </div>
                                <br></br>
                                <button type="button" className="btn btn-warning" >Send</button>

                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage style={{height:'30em'}} src='https://img.freepik.com/free-vector/forgot-password-concept-illustration_114360-4652.jpg?w=2000' fluid/>
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        );

}

export default ChangeForgotPassword;