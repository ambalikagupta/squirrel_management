import React, { useState } from 'react';
import "../../assets/css/style.css"
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
                        <p className='new_account'>Create new Account</p>
                        <hr className='mt_20 mb_20' />
                        <div className='signup_details'>
                            <h6 className='pt_5 pb_5'>Personal Deatils <img className='pl_5' src={Icon.Check}></img></h6>
                            <p className='company_information'>Your  company’s information</p>
                            <p>Team</p>
                        </div>
                    </div>
                </MDBCol>

                <MDBCol col='4' md='9'>

                    <div className="signuppage_field">

                        <div className="signup_divider">
                            <h2 className="">Your Company Details</h2>
                            <p className="">Enter your details bellow</p>
                        </div>

                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Whats your company name?' id='formControlLg' type='text' size="lg" />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Website Link' id='formControlLg' type='text' size="lg" />
                        <Select
                            className='mb-2 form-outline'
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={document}
                            placeholder="Company Location"
                        />
                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Describe your company in 20 words.' id='formControlLg' type='text' size="lg" />
                        <MDBTextArea className='signupinput_field' contrast id='textAreaExample' placeholder='Long description about your company' rows={4}></MDBTextArea>

                        <div className="signup_divider mt_30" style={{fontSize:"16px"}}>
                            <p className="font-weight-bold text-dark">Markets</p>
                        </div>

                        <MDBInput className='signupinput_field' wrapperClass='mb-2' placeholder='Mobile, Blockchain, SAAS' id='formControlLg' type='text' size="lg" />
                        <Select
                            className='mb-2 form-outline'
                            defaultValue={selectedOption1}
                            onChange={setSelectedOption1}
                            options={document1}
                            placeholder="No. of employees?"
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