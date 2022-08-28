import React, { useState } from "react";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

export default function Candidate() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (idx) => {
    setToggleState(idx);
  };

  return (
    <div className="candidate_main_div">
      <div className="candidate_navigation">
        <small className="logo mt_10 ml_10">
          <a href="/">SQUIRRELL</a>
        </small>
        <div className="block-tabs-candidates">
          <button
            className={toggleState === 1 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Candidates
          </button>
          <button
            className={toggleState === 2 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Unlocked
          </button>
          <button
            className={toggleState === 3 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Analytics
          </button>
          <button
            className={toggleState === 4 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Proposals
          </button>
          <button
            className={toggleState === 5 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            Contract
          </button>
          <button
            className={toggleState === 6 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(6)}
          >
            Profile
          </button>
        </div>
        <div className="block-tabs-candidates-mob">
          <button
            className={toggleState === 1 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Candidates
          </button>
          <button
            className={toggleState === 2 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Unlocked
          </button>
          <button
            className={toggleState === 3 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Analytics
          </button>
          <button
            className={toggleState === 4 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Proposals
          </button>
          <button
            className={toggleState === 5 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            Contract
          </button>
          <button
            className={toggleState === 6 ? "tabs tabs-active" : "tabs"}
            onClick={() => toggleTab(6)}
          >
            Profile
          </button>
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
           <div className="candidate_header_text_item">
              <div className="d-flex justify-content-between">
                <p className="pl_30 pr_30">Filters</p> 
                <div class="custom-button-clear ml_80" style={{ width: "130px" }}>
                 <button>Clear all <span className="pl_10">X</span></button>
              </div>
              </div>
              <div><span className="span1">616</span>< span className="span 2 fw-normal pl_5">candidates match your filters</span></div>
            </div>
          <div>
            <div className="candidate_body">
              <div className="first ">
                <div className="skills_div">
                  <p>By Skills & Experience</p>
                  <p>Clear</p>
                </div>
                <input
                  class="form-control mr-sm-2 border-0 ml_5 pl_35 skills_input_field"
                  type="search"
                  placeholder="Search Skills "
                  aria-label="Search"
                />
                <hr />
                <div className="laravel">
                  <button className="first_div_buttons">PHP Laravel</button>
                  <select>
                    <option value="0">Any</option>
                    <option value="1">View</option>
                    <option value="2">One</option>
                    <option value="3">Two</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803L9 10.5607L7.28033 12.2803C6.98744 12.5732 6.51256 12.5732 6.21967 12.2803C5.92678 11.9874 5.92678 11.5126 6.21967 11.2197L7.93934 9.5L6.21967 7.78033C5.92678 7.48744 5.92678 7.01256 6.21967 6.71967C6.51256 6.42678 6.98744 6.42678 7.28033 6.71967L9 8.43934L10.7197 6.71967C11.0126 6.42678 11.4874 6.42678 11.7803 6.71967C12.0732 7.01256 12.0732 7.48744 11.7803 7.78033L10.0607 9.5L11.7803 11.2197C12.0732 11.5126 12.0732 11.9874 11.7803 12.2803Z"
                      fill="#151417"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2ZM3 9.5C3 6.18629 5.68629 3.5 9 3.5C12.3137 3.5 15 6.18629 15 9.5C15 12.8137 12.3137 15.5 9 15.5C5.68629 15.5 3 12.8137 3 9.5Z"
                      fill="#151417"
                    />
                  </svg>
                </div>
                <div className="laravel mt_15">
                  <button className="first_div_buttons">Core PHP</button>
                  <select>
                    <option value="0">Any</option>
                    <option value="1">View</option>
                    <option value="2">One</option>
                    <option value="3">Two</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803L9 10.5607L7.28033 12.2803C6.98744 12.5732 6.51256 12.5732 6.21967 12.2803C5.92678 11.9874 5.92678 11.5126 6.21967 11.2197L7.93934 9.5L6.21967 7.78033C5.92678 7.48744 5.92678 7.01256 6.21967 6.71967C6.51256 6.42678 6.98744 6.42678 7.28033 6.71967L9 8.43934L10.7197 6.71967C11.0126 6.42678 11.4874 6.42678 11.7803 6.71967C12.0732 7.01256 12.0732 7.48744 11.7803 7.78033L10.0607 9.5L11.7803 11.2197C12.0732 11.5126 12.0732 11.9874 11.7803 12.2803Z"
                      fill="#151417"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2ZM3 9.5C3 6.18629 5.68629 3.5 9 3.5C12.3137 3.5 15 6.18629 15 9.5C15 12.8137 12.3137 15.5 9 15.5C5.68629 15.5 3 12.8137 3 9.5Z"
                      fill="#151417"
                    />
                  </svg>
                </div>
                <div className="laravel mt_15">
                  <button className="first_div_buttons">React JS</button>
                  <select>
                    <option value="0">Any</option>
                    <option value="1">View</option>
                    <option value="2">One</option>
                    <option value="3">Two</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803L9 10.5607L7.28033 12.2803C6.98744 12.5732 6.51256 12.5732 6.21967 12.2803C5.92678 11.9874 5.92678 11.5126 6.21967 11.2197L7.93934 9.5L6.21967 7.78033C5.92678 7.48744 5.92678 7.01256 6.21967 6.71967C6.51256 6.42678 6.98744 6.42678 7.28033 6.71967L9 8.43934L10.7197 6.71967C11.0126 6.42678 11.4874 6.42678 11.7803 6.71967C12.0732 7.01256 12.0732 7.48744 11.7803 7.78033L10.0607 9.5L11.7803 11.2197C12.0732 11.5126 12.0732 11.9874 11.7803 12.2803Z"
                      fill="#151417"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2ZM3 9.5C3 6.18629 5.68629 3.5 9 3.5C12.3137 3.5 15 6.18629 15 9.5C15 12.8137 12.3137 15.5 9 15.5C5.68629 15.5 3 12.8137 3 9.5Z"
                      fill="#151417"
                    />
                  </svg>
                </div>
                <div className="laravel mt_15">
                  <button className="first_div_buttons">Vue JS</button>
                  <select>
                    <option value="0">Any</option>
                    <option value="1">View</option>
                    <option value="2">One</option>
                    <option value="3">Two</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803L9 10.5607L7.28033 12.2803C6.98744 12.5732 6.51256 12.5732 6.21967 12.2803C5.92678 11.9874 5.92678 11.5126 6.21967 11.2197L7.93934 9.5L6.21967 7.78033C5.92678 7.48744 5.92678 7.01256 6.21967 6.71967C6.51256 6.42678 6.98744 6.42678 7.28033 6.71967L9 8.43934L10.7197 6.71967C11.0126 6.42678 11.4874 6.42678 11.7803 6.71967C12.0732 7.01256 12.0732 7.48744 11.7803 7.78033L10.0607 9.5L11.7803 11.2197C12.0732 11.5126 12.0732 11.9874 11.7803 12.2803Z"
                      fill="#151417"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2ZM3 9.5C3 6.18629 5.68629 3.5 9 3.5C12.3137 3.5 15 6.18629 15 9.5C15 12.8137 12.3137 15.5 9 15.5C5.68629 15.5 3 12.8137 3 9.5Z"
                      fill="#151417"
                    />
                  </svg>
                </div>
                <div className="laravel mt_15">
                  <button className="first_div_buttons">My SQL</button>
                  <select>
                    <option value="0">Any</option>
                    <option value="1">View</option>
                    <option value="2">One</option>
                    <option value="3">Two</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803L9 10.5607L7.28033 12.2803C6.98744 12.5732 6.51256 12.5732 6.21967 12.2803C5.92678 11.9874 5.92678 11.5126 6.21967 11.2197L7.93934 9.5L6.21967 7.78033C5.92678 7.48744 5.92678 7.01256 6.21967 6.71967C6.51256 6.42678 6.98744 6.42678 7.28033 6.71967L9 8.43934L10.7197 6.71967C11.0126 6.42678 11.4874 6.42678 11.7803 6.71967C12.0732 7.01256 12.0732 7.48744 11.7803 7.78033L10.0607 9.5L11.7803 11.2197C12.0732 11.5126 12.0732 11.9874 11.7803 12.2803Z"
                      fill="#151417"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2ZM3 9.5C3 6.18629 5.68629 3.5 9 3.5C12.3137 3.5 15 6.18629 15 9.5C15 12.8137 12.3137 15.5 9 15.5C5.68629 15.5 3 12.8137 3 9.5Z"
                      fill="#151417"
                    />
                  </svg>
                </div>
                <div className="laravel mt_15">
                  <button className="first_div_buttons">Amazon AWS</button>
                  <select>
                    <option value="0">Any</option>
                    <option value="1">View</option>
                    <option value="2">One</option>
                    <option value="3">Two</option>
                  </select>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M11.7803 12.2803C11.4874 12.5732 11.0126 12.5732 10.7197 12.2803L9 10.5607L7.28033 12.2803C6.98744 12.5732 6.51256 12.5732 6.21967 12.2803C5.92678 11.9874 5.92678 11.5126 6.21967 11.2197L7.93934 9.5L6.21967 7.78033C5.92678 7.48744 5.92678 7.01256 6.21967 6.71967C6.51256 6.42678 6.98744 6.42678 7.28033 6.71967L9 8.43934L10.7197 6.71967C11.0126 6.42678 11.4874 6.42678 11.7803 6.71967C12.0732 7.01256 12.0732 7.48744 11.7803 7.78033L10.0607 9.5L11.7803 11.2197C12.0732 11.5126 12.0732 11.9874 11.7803 12.2803Z"
                      fill="#151417"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 2C4.85786 2 1.5 5.35786 1.5 9.5C1.5 13.6421 4.85786 17 9 17C13.1421 17 16.5 13.6421 16.5 9.5C16.5 5.35786 13.1421 2 9 2ZM3 9.5C3 6.18629 5.68629 3.5 9 3.5C12.3137 3.5 15 6.18629 15 9.5C15 12.8137 12.3137 15.5 9 15.5C5.68629 15.5 3 12.8137 3 9.5Z"
                      fill="#151417"
                    />
                  </svg>
                </div>

                <div className=" onboarding mt_30 ml_20">
                  <p>Onboarding Time</p>
                  <div>
                    <input
                      type="checkbox"
                      id="coding"
                      name="interest"
                      value="coding"
                    />
                    <label
                      for="coding"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      Within 1 Day
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="music"
                      name="interest"
                      value="music"
                    />
                    <label
                      for="music"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      Within 1 Week
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="coding"
                      name="interest"
                      value="coding"
                    />
                    <label
                      for="coding"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      Within 1 Month
                    </label>
                  </div>
                </div>
                <div className=" onboarding mt_30 ml_20">
                  <p>Gender</p>
                  <div>
                    <input
                      type="checkbox"
                      id="coding"
                      name="interest"
                      value="coding"
                    />
                    <label
                      for="coding"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      Both
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="music"
                      name="interest"
                      value="music"
                    />
                    <label
                      for="music"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      Female
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="coding"
                      name="interest"
                      value="coding"
                    />
                    <label
                      for="coding"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      Male
                    </label>
                  </div>
                </div>
                <div className=" onboarding mt_30 ml_20">
                  <p>Cost / hr / resource</p>
                  <div>
                    <input
                      type="checkbox"
                      id="coding"
                      name="interest"
                      value="coding"
                    />
                    <label
                      for="coding"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      4$ to 7$
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="music"
                      name="interest"
                      value="music"
                    />
                    <label
                      for="music"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      8$ to 10$
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="coding"
                      name="interest"
                      value="coding"
                    />
                    <label
                      for="coding"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      11$ to 15$
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="coding"
                      name="interest"
                      value="coding"
                    />
                    <label
                      for="coding"
                      className="labels_for_checkbox pl_10 pr_10"
                    >
                      16$ & Above
                    </label>
                  </div>
                </div>

                <div className="search_sections mt_20 ml_20">
                  <p>Industry</p>
                  <input
                    class="form-control mr-sm-2 border-0"
                    type="search"
                    placeholder="Search by industry experience "
                    aria-label="Search"
                  />
                  <hr />
                </div>
                <div className="search_sections mt_20 ml_20">
                  <p>Location</p>
                  <input
                    class="form-control mr-sm-2 border-0"
                    type="search"
                    placeholder="Search by Location "
                    aria-label="Search"
                  />
                  <hr />
                </div>
                <div className="search_sections mt_20 ml_20">
                  <p>Education</p>
                  <input
                    class="form-control mr-sm-2 border-0"
                    type="search"
                    placeholder="Search by Education"
                    aria-label="Search"
                  />
                  <hr />
                </div>
                <div className="search_sections mt_20 ml_20">
                  <p>Work type</p>
                  <input
                    class="form-control mr-sm-2 border-0"
                    type="search"
                    placeholder=" Search by Work type"
                    aria-label="Search"
                  />
                  <hr />
                </div>
              </div>

              <div className="sec ">
                <div className="sec-first">
                  <div className="header_sec_top">
                    <div className=" left_div_buttons">
                      <button className="btn_boosted">Boosted</button>
                      <small>R K</small>
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
                  <p className="main_heading_bold mb_5">Skills</p>
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

                  <p className="main_heading_bold mb_5">Industries Exp.</p>
                  <div className="skills_section_buttons">
                    <button className="skill_btn">Ecommerce</button>
                    <button className="skill_btn">Fintech</button>
                    <button className="skill_btn">Food delivery</button>
                    <button className="skill_btn">
                      Medical and health care
                    </button>
                    <button className="skill_btn">2 More Experience</button>
                  </div>
                  <hr />

                  <div>
                    <p className="main_heading_bold">Included in hiring</p>
                    <p>
                      We provide tracking with desktime software, free
                      replacement of candidate if performance is not good,
                      Project manager is included for reporting.
                    </p>
                  </div>
                </div>

                <div className="sec-second mt_10 ">
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
                  <p className="main_heading_bold mb_5 ">Skills</p>
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

                  <p className="main_heading_bold mb_5">Industries Exp.</p>
                  <div className="skills_section_buttons">
                    <button className="skill_btn">Ecommerce</button>
                    <button className="skill_btn">Fintech</button>
                    <button className="skill_btn">Food delivery</button>
                    <button className="skill_btn">
                      Medical and health care
                    </button>
                    <button className="skill_btn">2 More Experience</button>
                  </div>
                  <hr />

                  <div>
                    <p className="main_heading_bold">Included in hiring</p>
                    <p>
                      We provide tracking with desktime software, free
                      replacement of candidate if performance is not good,
                      Project manager is included for reporting.
                    </p>
                  </div>
                </div>

                <div className="sec-third mt_10">
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
                  <p className="main_heading_bold mb_5">Skills</p>
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

                  <p className="main_heading_bold mb_5">Industries Exp.</p>
                  <div className="skills_section_buttons">
                    <button className="skill_btn">Ecommerce</button>
                    <button className="skill_btn">Fintech</button>
                    <button className="skill_btn">Food delivery</button>
                    <button className="skill_btn">
                      Medical and health care
                    </button>
                    <button className="skill_btn">2 More Experience</button>
                  </div>
                  <hr />

                  <div>
                    <p className="main_heading_bold">Included in hiring</p>
                    <p>
                      We provide tracking with desktime software, free
                      replacement of candidate if performance is not good,
                      Project manager is included for reporting.
                    </p>
                  </div>
                </div>

                <div className="sec-fourth mt_10 ">
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
                  <p className="main_heading_bold mb_5">Skills</p>
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

                  <p className="main_heading_bold mb_5">Industries Exp.</p>
                  <div className="skills_section_buttons">
                    <button className="skill_btn">Ecommerce</button>
                    <button className="skill_btn">Fintech</button>
                    <button className="skill_btn">Food delivery</button>
                    <button className="skill_btn">
                      Medical and health care
                    </button>
                    <button className="skill_btn">2 More Experience</button>
                  </div>
                  <hr />

                  <div>
                    <p className="main_heading_bold">Included in hiring</p>
                    <p>
                      We provide tracking with desktime software, free
                      replacement of candidate if performance is not good,
                      Project manager is included for reporting.
                    </p>
                  </div>
                </div>

                <div className="sec-fifth mt_10 ">
                  <div className="header_sec_top">
                    <div className=" left_div_buttons">
                      <small>R K</small>
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
                  <p className="main_heading_bold mb_5">Skills</p>
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

                  <p className="main_heading_bold mb_5">Industries Exp.</p>
                  <div className="skills_section_buttons">
                    <button className="skill_btn">Ecommerce</button>
                    <button className="skill_btn">Fintech</button>
                    <button className="skill_btn">Food delivery</button>
                    <button className="skill_btn">
                      Medical and health care
                    </button>
                    <button className="skill_btn">2 More Experience</button>
                  </div>
                  <hr />

                  <div>
                    <p className="main_heading_bold">Included in hiring</p>
                    <p>
                      We provide tracking with desktime software, free
                      replacement of candidate if performance is not good,
                      Project manager is included for reporting.
                    </p>
                  </div>
                </div>

                <div className="sec-sixth mt_10 ">
                  <div className="header_sec_top">
                    <div className=" left_div_buttons">
                      <small>R P</small>
                      <span>7 Yrs experience</span>
                    </div>
                    <div className="right_div_buttons">
                      <button className="btn3">7$ / Hr.</button>
                      <button className="btn2">Unlock</button>
                    </div>
                  </div>
                  <p className="languages mb_15">
                    Sr. PHP Developer, Wordpress, Opencart, Codeigniter, Laravel{" "}
                    <br /> Vadodara, Gujarat, India
                  </p>
                  <div className="skills_section_buttons_two mb_10">
                    <button className="btn1">Save</button>
                    <button className="btn2">
                      Download Resume{" "}
                      <img
                        src={
                          require("../../assets/image/png/download_resume.png")
                            .default
                        }
                        alt=""
                        style={{ paddingLeft: "10px" }}
                      />
                    </button>
                  </div>
                </div>

                <div className="sec-seventh mt_10 ">
                  <div className="header_sec_top">
                    <div className=" left_div_buttons ">
                      <small>About</small>
                    </div>
                  </div>
                  <p className="mt_10 mb_10">
                    Experienced Human Resources Executive with a demonstrated
                    history of working in the internet industry. Skilled in
                    Executive Search, Technical Recruiting, Sourcing, and
                    Screening, backend work. Strong human resources professional
                    with a Master of Business Administration (M.B.A.) focused in
                    HR from Panjab University.
                  </p>
                </div>

                <div className="sec-eight mt_10 ">
                  <div className="header_sec_top">
                    <div className=" left_div_buttons">
                      <small className="mb_5">Skills</small>
                    </div>
                  </div>
                  <div className="skills_section_buttons">
                    <button className="skill_btn mb_10">
                      PHP Laravel <span>5 Yrs</span>
                    </button>
                    <button className="skill_btn mb_10">
                      Core PHP <span>5 Yrs</span>
                    </button>
                    <button className="skill_btn mb_10">
                      React JS <span>5 Yrs</span>
                    </button>
                    <button className="skill_btn mb_10">
                      VUE JS<span>5 Yrs</span>
                    </button>
                    <button className="skill_btn mb_10">
                      VUE JS<span>5 Yrs</span>
                    </button>
                    <button className="skill_btn mb_10">
                      VUE JS<span>5 Yrs</span>
                    </button>
                  </div>
                </div>

                <div className="sec-ninth mt_10 ">
                  <div className="header_sec_top">
                    <div className=" left_div_buttons">
                      <small className="mb_5">Industries experience</small>
                    </div>
                  </div>
                  <div className="skills_section_buttons">
                    <button className="skill_btn mb_10">Ecommerce</button>
                    <button className="skill_btn mb_10">Fintech</button>
                    <button className="skill_btn mb_10">Food delivery</button>
                    <button className="skill_btn mb_10">
                      Medical and health care
                    </button>
                  </div>
                </div>

                <div className="sec-tenth mt_10 ">
                  <div className="header_sec_top">
                    <div className=" left_div_buttons">
                      <small className="mt_10">Whats included in hiring?</small>
                    </div>
                  </div>
                  <p className="mb_10">
                    We provide tracking with desktime software, free replacement
                    of candidate if performance is not good, Project manager is
                    included for reporting.
                  </p>
                </div>

                <div className="sec-eleventh mt_10 ">
                  <div className="header_sec_top">
                    <div className=" left_div_buttons">
                      <small className="mt_10 ">Availibility</small>
                    </div>
                  </div>
                  <p className="mb_10">40 Hrs per week, 8 Hrs a day</p>
                </div>
              </div>

              <div className="third ">
                <div className=" button_image mb_10">
                  <button style={{ border: "none" }}>
                    Ad
                    <img
                      className="pl_15 pr_15"
                      src={require("../../assets/image/png/dots.png").default}
                    />
                  </button>
                </div>
                <div className="image_2">
                  <img
                    src={require("../../assets/image/png/desktime.png").default}
                  />
                </div>
                <p className="mt_10 text-center fw-bold">Start Free Trial</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <h2>Unlocked</h2>
        </div>

        <div
          className={toggleState === 3 ? "content active-content" : "content"}
        >
          <h2>Analytics</h2>
        </div>

        <div
          className={toggleState === 4 ? "content active-content" : "content"}
        >
          <h2>Proposals</h2>
        </div>

        <div
          className={toggleState === 5 ? "content active-content" : "content"}
        >
          <h2>Contract</h2>
        </div>

        <div
          className={toggleState === 6 ? "content active-content" : "content"}
        >
          <h2>Profile</h2>
        </div>
      </div>
    </div>
  );
}
