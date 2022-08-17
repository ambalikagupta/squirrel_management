import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IconButton from "@material-ui/core/IconButton";
import Button from "react-bootstrap/Button";

export default function Candidates() {
  return (
    <>
      <div>
        <Navbar className="main-header" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar_navigation">
              <Nav.Link href="#">Candidates</Nav.Link>

              <Nav.Link href="#">Unlocked</Nav.Link>

              <Nav.Link href="#">Analytics</Nav.Link>

              <Nav.Link href="#">Proposals</Nav.Link>

              <Nav.Link href="#">Contract</Nav.Link>

              <Nav.Link href="#">Profile</Nav.Link>

              <Nav.Link href="#">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* share button */}
          <IconButton color="inherit"></IconButton>
          {/* share button  */}
        </Navbar>

        <div className="d-flex justify-content-between">
          <div
            className="first"
            style={{
              width: "300px",
              height: "'400px",
            }}
          ></div>

          <div
            className="Sec"
            style={{
              width: "600px",
              height: "'400px",
              padding:"10px"
            }}
          >
            <div style={{
                width: "100%",
                height: "300px",
              }}>
              <div className=" left_div_buttons d-flex">
                <button className="btn_boosted">Boosted</button>
                <p>R K</p>
                <span>7 Yrs experience</span>
              </div>
              <div className="right_div_buttons">
                <button className="btn1">Save</button>
                <button className="btn2">Unlock</button>
                <button className="btn3">11$/Hr.</button>
                <p>
                  Sr. PHP Developer, Wordpress, Opencart, Codeigniter, Laravel{" "}
                  <br /> Vadodara, Gujarat, India
                </p>
                <hr />
                <p>Skills</p>
                <div className="skills_section_buttons">
                  <button className="skill_btn">PHP Laravel <span>5 Yrs</span></button>
                  <button className="skill_btn">Core PHP <span>5 Yrs</span></button>
                  <button className="skill_btn">React JS <span>5 Yrs</span></button>
                  <button className="skill_btn">VUE JS<span>5 Yrs</span></button>
                  <button className="skill_btn">6 More Skills <span>5 Yrs</span></button>
                </div>
                <hr />

                <p>Skills</p>
                <div className="skills_section_buttons">
                  <button className="skill_btn">Ecommerce</button>
                  <button className="skill_btn">Fintech</button>
                  <button className="skill_btn">Food delivery</button>
                  <button className="skill_btn">Medical and health care</button>
                  <button className="skill_btn">2 More Experience</button>
                </div>
                <hr />
                <div>
                  <p>Included in hiring</p>
                  <p>
                    We provide tracking with desktime software, free replacement
                    of candidate if performance is not good, Project manager is
                    included for reporting.
                  </p>
                </div>
              </div>
            </div>

            <div style={{
                width: "100%",
                height: "300px",
              }}>
            </div>

            <div style={{
                width: "100%",
                height: "300px"
              }}>
            </div>

            <div style={{
                width: "100%",
                height: "300px",
              }}></div>

            <div style={{
                width: "100%",
                height: "300px",
            
              }}></div> 


          </div>



          <div
            className="third"
            style={{
              width: "300px",
              height: "'400px",
              border: "1px solid red",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
