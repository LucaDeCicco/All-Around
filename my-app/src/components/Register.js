import React from 'react';
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

function Register() {
    const iconStyle = {
        height: "1.5em",
        width: "2em"
        // backgroundColor: "red"

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
                                <MDBInput placeholder='Your Name' id='form1' type='text' className='w-100'/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <EmailIcon style={iconStyle}/>
                                <MDBInput placeholder='Your Email' id='form2' type='email'/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <LockIcon style={iconStyle}/>
                                <MDBInput placeholder='Password' id='form3' type='password'/>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                                <KeyIcon style={iconStyle}/>
                                <MDBInput placeholder='Repeat your password' id='form4' type='password'/>
                            </div>

                            <div className='mb-4'>
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                            </div>

                            <MDBBtn className='mb-4' size='lg'>Register</MDBBtn>

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