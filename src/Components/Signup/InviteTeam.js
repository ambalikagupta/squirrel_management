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
                        <hr className='mt_20 mb_20' />
                        <div className='signup_details'>
                            <h6 className='pt_5 pb_5'>Personal Deatils <img className='pl_5' src={require("../../assets/image/png/Vector.png").default}></img></h6>
                            <p className='company_information'>Your  company’s information<img className='pl_5' src={require("../../assets/image/png/Vector.png").default}></img></p>
                            <p className='team'>Team</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol col='4' md='9'>

                    <div className="signuppage_field">


                        <div className="signup_divider">
                            <h2 className="">Invite your team</h2>
                            <p className="">Enter your team member’s email, we will send them an invite to join Squirrel.</p>
                        </div>

                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='e.g.  person@company.com' id='formControlLg' type='email' size="lg" />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='e.g.  person@company.com' id='formControlLg' type='email' size="lg" />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='e.g.  person@company.com' id='formControlLg' type='email' size="lg" />

                        <div className="addmore_team_link d-flex justify-content-between align-items-center mb_20">
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