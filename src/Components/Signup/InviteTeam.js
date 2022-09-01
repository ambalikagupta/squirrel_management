import React from 'react';
import "../../assets/css/style.css"
import "../../assets/css/fonts.css"
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
                        <p className='new_account ml_15'>Creating New Account</p>
                        <hr style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)", width:"90%" }} className='mt_25 mb_25' />
                        <div className='signup_details'>
                            <h6 className='pt_5 pb_10 ml_15'>Personal deatils <img className='pl_5' src={Icon.Check}></img></h6>
                            <p className='com_details'><span className='linetext mr_15'></span>Your  company’s information <img className='pl_5' src={Icon.Check}></img></p>
                            <p className='com_details ml_15'>Team</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol col='4' md='9'>

                    <div className="signuppage_field">


                        <div className="signup_divider">
                            <h2 className="">Invite your team</h2>
                            <p className="">Enter your team member’s email, we will send them an invite to join Squirrel.</p>
                        </div>

                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='e.g.  person@company.com' id='formControlLg' type='email' />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='e.g.  person@company.com' id='formControlLg' type='email' />
                        <MDBInput className='signupinput_field' wrapperClass='mb-4' placeholder='e.g.  person@company.com' id='formControlLg' type='email' />

                        <div className="addmore_team_link d-flex justify-content-between align-items-center mb_50">
                            <a href="!#">+ Add more team member</a>
                        </div>

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