import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import IconButton from "@material-ui/core/IconButton";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

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
        <div className="candidate_body">
          <div className="first">
            <div className="skills_div">
              <p>By Skills & Experience</p>
              <p>Clear</p>
            </div>
            <input
              class="form-control mr-sm-2 border-0 ml_5 pl_35"
              type="search"
              placeholder="Search Skills "
              aria-label="Search"
            />
            <hr />
            <div className="laravel d-flex">
              <button className="first_div_buttons">PHP Laravel</button>
              <select>
                <option value="0">Any</option>
                <option value="1">View</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>
            <div className="laravel d-flex mt_10">
              <button className="first_div_buttons">Core PHP</button>
              <select>
                <option value="0">6 yrs</option>
                <option value="1">View</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>
            <div className="laravel d-flex mt_10">
              <button className="first_div_buttons">React JS</button>
              <select>
                <option value="0">6 yrs</option>
                <option value="1">View</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>
            <div className="laravel d-flex mt_10">
              <button className="first_div_buttons">Vue JS</button>
              <select>
                <option value="0">6 yrs</option>
                <option value="1">View</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>
            <div className="laravel d-flex mt_10">
              <button className="first_div_buttons">My SQL</button>
              <select>
                <option value="0">6 yrs</option>
                <option value="1">View</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>
            <div className="laravel d-flex mt_10">
              <button className="first_div_buttons">Amazon AWS</button>
              <select>
                <option value="0">6 yrs</option>
                <option value="1">View</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>

            <div className=" onboarding mt_10">
              <p>Onboarding Time</p>
              <div>
                <input
                  type="checkbox"
                  id="coding"
                  name="interest"
                  value="coding"
                />
                <label for="coding" className="labels_for_checkbox pl_10 pr_10">Within 1 Day</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="music"
                  name="interest"
                  value="music"
                />
                <label for="music"  className="labels_for_checkbox pl_10 pr_10">Within 1 Week</label>
              </div>
              <div>
              <input
                type="checkbox"
                id="coding"
                name="interest"
                value="coding"
              />
              <label for="coding" className="labels_for_checkbox pl_10 pr_10">Within 1 Month</label>
            </div>
            </div>
            <div className=" onboarding mt_10">
            <p>Gender</p>
            <div>
              <input
                type="checkbox"
                id="coding"
                name="interest"
                value="coding"
              />
              <label for="coding" className="labels_for_checkbox pl_10 pr_10">Both</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="music"
                name="interest"
                value="music"
              />
              <label for="music"  className="labels_for_checkbox pl_10 pr_10">Female</label>
            </div>
            <div>
            <input
              type="checkbox"
              id="coding"
              name="interest"
              value="coding"
            />
            <label for="coding" className="labels_for_checkbox pl_10 pr_10">Male</label>
          </div>
          </div>
          <div className=" onboarding mt_10">
          <p>Cost / hr / resource</p>
          <div>
            <input
              type="checkbox"
              id="coding"
              name="interest"
              value="coding"
            />
            <label for="coding" className="labels_for_checkbox pl_10 pr_10">4$ to 7$</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="music"
              name="interest"
              value="music"
            />
            <label for="music"  className="labels_for_checkbox pl_10 pr_10">8$ to 10$</label>
          </div>
          <div>
          <input
            type="checkbox"
            id="coding"
            name="interest"
            value="coding"
          />
          <label for="coding" className="labels_for_checkbox pl_10 pr_10">11$ to 15$</label>
        </div>
        <div>
        <input
          type="checkbox"
          id="coding"
          name="interest"
          value="coding"
        />
        <label for="coding" className="labels_for_checkbox pl_10 pr_10">16$ & Above</label>
      </div>
        </div>

          <div className="search_sections pt_10">
          <p>Industry</p>
          <input
              class="form-control mr-sm-2 border-0 ml_5 pl_35"
              type="search"
              placeholder="Search by industry experience "
              aria-label="Search"
            />
            <hr />
          </div>
          <div className="search_sections pt_10">
          <p>Location</p>
          <input
              class="form-control mr-sm-2 border-0 ml_5 pl_35"
              type="search"
              placeholder="Search by Location "
              aria-label="Search"
            />
            <hr />
          </div>
          <div className="search_sections pt_10">
          <p>Education</p>
          <input
              class="form-control mr-sm-2 border-0 ml_5 pl_35"
              type="search"
              placeholder="Search by Education"
              aria-label="Search"
            />
            <hr />
          </div>
          <div className="search_sections pt_10">
          <p>Work type</p>
          <input
              class="form-control mr-sm-2 border-0 ml_5 pl_35"
              type="search"
              placeholder=" Search by Work type"
              aria-label="Search"
            />
            <hr />
          </div>
          </div>

          <div className="sec">
            <div className="sec-first">
              <div className="header_sec_top">
                <div className=" left_div_buttons">
                  <button className="btn_boosted">Boosted</button>
                  <small>RK</small>
                  <span>7 Yrs experience</span>
                </div>
                <div className="right_div_buttons">
                  <button className="btn1">Save</button>
                  <button className="btn2">Unlock</button>
                  <button className="btn3">11$/Hr.</button>
                </div>
              </div>
              <p className="languages">
                Sr. PHP Developer, Wordpress, Opencart, Codeigniter, Laravel{" "}
                <br /> Vadodara, Gujarat, India
              </p>
              <hr />
              <p className="main_heading_bold">Skills</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">
                  PHP Laravel <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  Core PHP <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  React JS <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  VUE JS<span>5 Yrs</span>
                </button>
                <button className="skill_btn">6 More Skills</button>
              </div>
              <hr />

              <p className="main_heading_bold">Industries Exp.</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">Ecommerce</button>
                <button className="skill_btn">Fintech</button>
                <button className="skill_btn">Food delivery</button>
                <button className="skill_btn">Medical and health care</button>
                <button className="skill_btn">2 More Experience</button>
              </div>
              <hr />

              <div>
                <p className="main_heading_bold">Included in hiring</p>
                <p>
                  We provide tracking with desktime software, free replacement
                  of candidate if performance is not good, Project manager is
                  included for reporting.
                </p>
              </div>
            </div>

            <div className="sec-second mt_20 ">
              <div className="header_sec_top">
                <div className=" left_div_buttons">
                  <button className="btn_boosted">Boosted</button>
                  <small>A P</small>
                  <span>7 Yrs experience</span>
                </div>
                <div className="right_div_buttons">
                  <button className="btn1">Save</button>
                  <button className="btn2">Unlock</button>
                  <button className="btn3">12$ / Hr.</button>
                </div>
              </div>
              <p className="languages">
                Sr. PHP Developer, Wordpress, Opencart, Codeigniter, Laravel{" "}
                <br /> Vadodara, Gujarat, India
              </p>
              <hr />
              <p className="main_heading_bold">Skills</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">
                  PHP Laravel <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  Core PHP <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  React JS <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  VUE JS<span>5 Yrs</span>
                </button>
                <button className="skill_btn">6 More Skills</button>
              </div>
              <hr />

              <p className="main_heading_bold">Industries Exp.</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">Ecommerce</button>
                <button className="skill_btn">Fintech</button>
                <button className="skill_btn">Food delivery</button>
                <button className="skill_btn">Medical and health care</button>
                <button className="skill_btn">2 More Experience</button>
              </div>
              <hr />

              <div>
                <p className="main_heading_bold">Included in hiring</p>
                <p>
                  We provide tracking with desktime software, free replacement
                  of candidate if performance is not good, Project manager is
                  included for reporting.
                </p>
              </div>
            </div>

            <div className="sec-third mt_20 ">
              <div className="header_sec_top">
                <div className=" left_div_buttons">
                  <button className="btn_boosted">Boosted</button>
                  <small>J R</small>
                  <span>7 Yrs experience</span>
                </div>
                <div className="right_div_buttons">
                  <button className="btn1">Save</button>
                  <button className="btn2">Unlock</button>
                  <button className="btn3"> 9$ / Hr.</button>
                </div>
              </div>
              <p className="languages">
                Sr. PHP Developer, Wordpress, Opencart, Codeigniter, Laravel{" "}
                <br /> Vadodara, Gujarat, India
              </p>
              <hr />
              <p className="main_heading_bold">Skills</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">
                  PHP Laravel <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  Core PHP <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  React JS <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  VUE JS<span>5 Yrs</span>
                </button>
                <button className="skill_btn">6 More Skills</button>
              </div>
              <hr />

              <p className="main_heading_bold">Industries Exp.</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">Ecommerce</button>
                <button className="skill_btn">Fintech</button>
                <button className="skill_btn">Food delivery</button>
                <button className="skill_btn">Medical and health care</button>
                <button className="skill_btn">2 More Experience</button>
              </div>
              <hr />

              <div>
                <p className="main_heading_bold">Included in hiring</p>
                <p>
                  We provide tracking with desktime software, free replacement
                  of candidate if performance is not good, Project manager is
                  included for reporting.
                </p>
              </div>
            </div>

            <div className="sec-fourth mt_20 ">
              <div className="header_sec_top">
                <div className=" left_div_buttons">
                  <small>R P</small>
                  <span>7 Yrs experience</span>
                </div>
                <div className="right_div_buttons">
                  <button className="btn1">Save</button>
                  <button className="btn2">Unlock</button>
                  <button className="btn3">7$ / Hr.</button>
                </div>
              </div>
              <p className="languages">
                Sr. PHP Developer, Wordpress, Opencart, Codeigniter, Laravel{" "}
                <br /> Vadodara, Gujarat, India
              </p>
              <hr />
              <p className="main_heading_bold">Skills</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">
                  PHP Laravel <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  Core PHP <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  React JS <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  VUE JS<span>5 Yrs</span>
                </button>
                <button className="skill_btn">6 More Skills</button>
              </div>
              <hr />

              <p className="main_heading_bold">Industries Exp.</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">Ecommerce</button>
                <button className="skill_btn">Fintech</button>
                <button className="skill_btn">Food delivery</button>
                <button className="skill_btn">Medical and health care</button>
                <button className="skill_btn">2 More Experience</button>
              </div>
              <hr />

              <div>
                <p className="main_heading_bold">Included in hiring</p>
                <p>
                  We provide tracking with desktime software, free replacement
                  of candidate if performance is not good, Project manager is
                  included for reporting.
                </p>
              </div>
            </div>

            <div className="sec-fifth mt_20 ">
              <div className="header_sec_top">
                <div className=" left_div_buttons">
                  <small>RK</small>
                  <span>7 Yrs experience</span>
                </div>
                <div className="right_div_buttons">
                  <button className="btn1">Save</button>
                  <button className="btn2">Unlock</button>
                  <button className="btn3">7$ / Hr.</button>
                </div>
              </div>
              <p className="languages">
                Sr. PHP Developer, Wordpress, Opencart, Codeigniter, Laravel{" "}
                <br /> Vadodara, Gujarat, India
              </p>
              <hr />
              <p className="main_heading_bold">Skills</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">
                  PHP Laravel <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  Core PHP <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  React JS <span>5 Yrs</span>
                </button>
                <button className="skill_btn">
                  VUE JS<span>5 Yrs</span>
                </button>
                <button className="skill_btn">6 More Skills</button>
              </div>
              <hr />

              <p className="main_heading_bold">Industries Exp.</p>
              <div className="skills_section_buttons">
                <button className="skill_btn">Ecommerce</button>
                <button className="skill_btn">Fintech</button>
                <button className="skill_btn">Food delivery</button>
                <button className="skill_btn">Medical and health care</button>
                <button className="skill_btn">2 More Experience</button>
              </div>
              <hr />

              <div>
                <p className="main_heading_bold">Included in hiring</p>
                <p>
                  We provide tracking with desktime software, free replacement
                  of candidate if performance is not good, Project manager is
                  included for reporting.
                </p>
              </div>
            </div>
          </div>

          <div className="third">
            <div className=" button_image mb_10">
              <button style={{border:"none"}}>
                Ad
                <img src={require("../../assets/image/png/dots.png").default} />
              </button>
            </div>
            <div className="image_2">
              <img
                src={require("../../assets/image/png/desktime.png").default}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
