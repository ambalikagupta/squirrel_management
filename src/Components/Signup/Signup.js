import React from 'react';
import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import { Link } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';
import { Icon } from "../../Utilities/Icon"

function SignUp() {
       

    return (
        <MDBContainer fluid >

            <MDBRow className='signuppage'>

                <MDBCol col='10' md='3' style={{ background: "#3653F6" }}>
                    <h2 className='signup_header_logo'>Squirrell</h2>
                    <div className='signup_sidenav'>
                        <p className='new_account'>Create new Account</p>
                        <hr style={{border: "1px solid rgba(255, 255, 255, 0.2)"}} className='mt_20 mb_20' />
                        <div className='signup_details'>
                            <h6 className='pt_5 pb_5'>Personal Deatils</h6>
                            <p>Yours Company Name</p>
                            <p>Team</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol col='4' md='9'>

                    <div className="signuppage_field">

                        <div className="socialmedia_div">

                            <p className="lead fw-normal mb-0 me-3">Signup with social media.
                            </p>

                            <div className='socialmedia_button d-flex flex-row align-items-center mt_10'>
                                <button className='pt_10 pb_10 pr_10 pl_10'>
                                    <img className='mr_10' src={Icon.Google}></img>Google
                                </button>

                                <button className='pt_10 pb_10 pr_10 pl_10'>
                                    <img className='mr_10' src={Icon.Linkedin}></img>Linked In
                                </button>

                                <button className='pt_10 pb_10 pr_10 pl_10'>
                                    <img className='mr_10' src={Icon.Twitter}></img>Twitter
                                </button>
                            </div>
                        </div>

                        <hr className='or_before mt_30 mb_30' />

                        <div className="signup_divider">
                            <h2 className="">What’s your full name?</h2>
                            <p className="">Enter your details bellow</p>
                        </div>

                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='First Name' id='formControlLg' type='text' size="lg" />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Last Name' id='formControlLg' type='text' size="lg" />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Enter your email' id='formControlLg' type='email' size="lg" />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Passowrd' id='formControlLg' type='password' size="lg" />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Re Password' id='formControlLg' type='resetpassword' size="lg" />

                        <div className="signup_button d-flex justify-content-end mb-4">
                          <Link to='/companydetails'>  <button className="btn-primary pt_5 pl_30 pb_5 pr_30 ">Next</button></Link>
                        </div>

                    </div>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default SignUp;