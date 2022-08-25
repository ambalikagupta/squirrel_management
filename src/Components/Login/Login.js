import React from 'react';
import "../../assets/css/style.css"
import "../../assets/css/responsive.css"
import { Link } from 'react-router-dom';
import { MDBContainer, MDBCol, MDBRow, MDBInput } from 'mdb-react-ui-kit';
import { Icon } from "../../Utilities/Icon"

function Login() {

  return (
    <MDBContainer fluid >

      <MDBRow className='loginpage'>

        <MDBCol col='4' md='6'>

          <div className='login_account_div mt_20'>
            <p className="fw-bold mt-2 mb-2">Don't have an account?</p>
            <Link to="/register" className="craete-link">Create Account</Link>
          </div>

          <div className="loginpage_field">
            <div className="divider">
              <h2 className="">Login with <span className='font-weight-bold'>SQUIRRELL</span></h2>
              <p className="">Enter your details below</p>
            </div>

            <MDBInput className='logininput_field' wrapperClass='mt_40 mb-2' placeholder='Enter your email' id='formControlLg' type='email' size="lg" />
            <MDBInput wrapperClass='mb-2' className='logininput_field' placeholder='Passowrd' id='formControlLg' type='password' size="lg" />

            <div className="forgot_password_link d-flex justify-content-between align-items-center mb_45">
              <a href="!#">Forgot password?</a>
              <button className="">Login</button>
            </div>

            <hr />

            <div className="socialmedia_div mt_30">

              <p className="lead fw-normal mb-0 me-3">Or login with</p>

              <div className='socialmedia_button d-flex flex-wrap align-items-center mt_10'>
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

          </div>
        </MDBCol>

        <MDBCol className=' d-flex align-items-center project_expenses' col='10' md='6' style={{ background: "#3653F6" }}>
          <img src={require("../../assets/image/png/dashboard.png").default} class="img-fluid" alt="Sample image" />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;