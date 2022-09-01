import React, { useState } from 'react';
import "../../assets/css/style.css"
import "../../assets/css/fonts.css"
import "../../assets/css/responsive.css"
import Select from "react-select";
import { MDBContainer, MDBCol, MDBRow, MDBInput,MDBTextArea } from 'mdb-react-ui-kit';
import { Icon } from "../../Utilities/Icon"
import { Link } from 'react-router-dom';

function CompanyDeatils() {
    const document = [{ value: "Company Location", label: "Company Location" }];
    const document1 = [{ value: "No. of employees?", label: "No. of employees?" }];

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption1, setSelectedOption1] = useState(null);

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
                            <p className='com_details'><span className='linetext mr_15'></span>Your  company’s information</p>
                            <p className='sign_up ml_15'>Team</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol col='4' md='9'>

                    <div className="signuppage_field">

                        <div className="signup_divider">
                            <h2 className="">Your Company Details</h2>
                            <p className="">Enter your details bellow</p>
                        </div>

                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Whats your company name?' id='formControlLg' type='text'  />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Website Link' id='formControlLg' type='text'  />
                        <Select
                            className='signupinput_field mb-2 form-outline'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={document}
                        />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Describe your company in 20 words.' id='formControlLg' type='text'  />
                        <MDBTextArea className='textarea_inputfield' contrast id='textAreaExample' placeholder='Long description about your company' rows={4}></MDBTextArea>

                        <div className="signup_divider mt_35" style={{fontSize:"16px"}}>
                            <p className='text-dark' style={{fontWeight:"600", fontSize:"16px"}}>Markets</p>
                        </div>

                        <div className='company_details_search'> <img className="searchicon" src={require("../../assets/image/png/search.png").default} pl_5 /><MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Mobile, Blockchain, SAAS' id='formControlLg' type='text'  /></div>

                       
                        <Select
                            className='signupinput_field mb-2 form-outline'
                            defaultValue={selectedOption1}
                            onChange={setSelectedOption1}
                            options={document1}
                        />

                        <div className="signup_button d-flex justify-content-end mb-4">
                           <Link to='/inviteteam'> <button className="btn-primary pt_5 pl_30 pb_5 pr_30 ">Next</button></Link>
                        </div>

                    </div>
                </MDBCol>

            </MDBRow>

        </MDBContainer>
    );
}

export default CompanyDeatils;