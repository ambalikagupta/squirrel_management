import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { mainListItems, secondaryListItems } from "../Dashboard/SideNav";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/fonts.css"
import { Icon } from "../../Utilities/Icon"



const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    boxShadow: "unset",
    background: "#FFFFFF",
    borderBottom: "1px solid #E1E3E9",
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    '&::-webkit-scrollbar': {
      display: "none"
     },
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    // content which is class of main needs to be flex and column direction
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    margin: "20px 20px",
    '&::-webkit-scrollbar': {
       display: "none"
      },
},
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Settings() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [toggleState, setToggleState] = useState(2);

  const toggleTab = (idx) => {
    setToggleState(idx);
  };

  return (
    <div className={classes.root}>
      <AppBar className={clsx(classes.appBar, open && classes.appBarShift)} >
        <Toolbar className={classes.toolbar} style={{minHeight:"45px"}}>
          <img
            src={Icon.Closearrow}
            alt=""
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
            onClick={handleDrawerOpen}
          />
          <div className="members_header">
            <h2>Settings</h2>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon} style={{minHeight:"45px"}}>
          <h1 className="logo">
            <a href="/">SQUIRRELL</a>
          </h1>
          <IconButton onClick={handleDrawerClose}>
            <img
              src={Icon.Openarrow}
              alt=""
            />
          </IconButton>
        </div>
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} style={{ minHeight: "45px" }} />
        <div>
          <div className="block-tabs">
            <button
              className={toggleState === 1 ? "tabs tabs-active" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Personal
            </button>
            <button
              className={toggleState === 2 ? "tabs tabs-active" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              Organization
            </button>
            <button
              className={toggleState === 3 ? "tabs tabs-active" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              General
            </button>
          </div>
          <div className="content-tabs">

            <div
              className={toggleState === 1 ? "content active-content" : "content"}
            >
              <h2>Personal</h2>
            </div>

            <div
              className={toggleState === 2 ? "content active-content" : "content"}
            >
              <div className="organization_div">
                <div className="wolfsoft_div pl_10 pt_10 pr_10 pb_10 ">
                  <img
                    src={require("../../assets/image/png/wolfsoft.png").default}
                    alt=""
                  />
                </div>
                <div className="setting_right_section ml_10">
                  <p>WOLF SOFT Pvt. Ltd.</p>
                  <p>
                    Mobile app development, UIUX Design, Interaction design, IT
                    Project development, Web app development,
                  </p>
                  <span>IT Services and IT Consulting . Vadodara, Gujarat</span>
                </div>
              </div>

              <div className="organization_tab_div row pt_20">
                <div className="col-md-9">
                  <div className="overview_section">
                    <p className="overview">Overview <svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                      <circle cx="15" cy="15" r="14.5" fill="#F6F6F6" stroke="#D6D6D6" />
                      <path d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z" fill="#151417" />
                    </svg></p>
                    <p>
                      ✅ +7 years experience in digital product development <br />✅ Best
                      practices <br /> ✅ Swift response and communications. <br /> <br /> 💎 Result-oriented
                      and highly motivated Interface Designer with over 7 years experience
                      with huge brands and companies from over than 20+ countries of the
                      world. I know my business and always take a lead in work. Each
                      solution that I suggest you is based on facts, data and real
                      experience. I will always have interesting solutions for your
                      project, using the latest design trends.
                    </p>
                  </div>
                  <div className="company_details mt_20">
                    <p className="mb_5">Website</p>
                    <span className="link">https://wolfsoft.in</span>
                  </div>
                  <div className="company_details mt_25">
                    <p className="mb_5">Phone</p>
                    <span>+91 9549990169, +91 774388438883</span>
                  </div>
                  <div className="company_details mt_25">
                    <p className="mb_5">Email Id</p>
                    <span>ceo@wolfsoft.in</span>
                  </div>
                  <div className="company_details mt_25">
                    <p className="mb_5">Industry</p>
                    <span>IT Services and IT Consulting</span>
                  </div>
                  <div className="company_details mt_25">
                    <p className="mb_5">Founded</p>
                    <span>2015</span>
                  </div>
                  <div className="company_details mt_25">
                    <p className="mb_5">Founder & Director</p>
                    <span>
                      Rushabh Patel <span style={{ color: "#3653F6" }}>( View Profile )</span>
                    </span>
                  </div>

                  <div className="company_details mt_25">
                    <p className="mb_5">Specialities <svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                      <circle cx="15" cy="15" r="14.5" fill="#F6F6F6" stroke="#D6D6D6" />
                      <path d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z" fill="#151417" />
                    </svg></p>
                    <span>
                      Specialities of Organization
                    </span>

                    <div className="specialities_button mt_20">
                      <button type="button">Php Laravel</button>
                      <button type="button">Web Design</button>
                      <button type="button">User Interface Design</button>
                      <button type="button">Mobile App Design</button>
                      <button type="button">Mobile Angular UI</button>
                      <button type="button">App Development</button>
                      <button type="button">App Development</button>
                      <button type="button">App Development</button>
                      <button type="button">Mobile App Redesign</button>
                    </div>
                  </div>
                </div>


                <div className="company_details_locations col-md-3">
                  <div> <h6>Office locations</h6>

                    <div className="address_description">
                      <p><span style={{ color: "#737376" }}>California, USA </span><span><svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="14.5" fill="#F6F6F6" stroke="#D6D6D6" />
                        <path d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z" fill="#151417" />
                      </svg></span> <span><svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11.5" fill="#F6F6F6" stroke="#D6D6D6" />
                        <path d="M7.20117 8.99375H16.8012M16.2012 8.99375L15.681 16.2789C15.6594 16.5817 15.5239 16.865 15.3018 17.0719C15.0797 17.2787 14.7875 17.3938 14.484 17.3937H9.51837C9.21486 17.3938 8.92261 17.2787 8.7005 17.0719C8.47839 16.865 8.34292 16.5817 8.32137 16.2789L7.80117 8.99375H16.2012ZM10.8012 11.3937V14.9937V11.3937ZM13.2012 11.3937V14.9937V11.3937ZM13.8012 8.99375V7.19375C13.8012 7.03462 13.738 6.88201 13.6254 6.76949C13.5129 6.65696 13.3603 6.59375 13.2012 6.59375H10.8012C10.642 6.59375 10.4894 6.65696 10.3769 6.76949C10.2644 6.88201 10.2012 7.03462 10.2012 7.19375V8.99375H13.8012Z" stroke="#242529" stroke-linecap="round" stroke-linejoin="round" />
                      </svg></span></p>
                    </div>

                    <div className="address_description">
                      <p><span style={{ color: "#737376" }}>Vadodara, India  </span><span style={{ color: "#DF311A" }}>( Primary )</span> <span><svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="14.5" fill="#F6F6F6" stroke="#D6D6D6" />
                        <path d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z" fill="#151417" />
                      </svg></span> <span><svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11.5" fill="#F6F6F6" stroke="#D6D6D6" />
                        <path d="M7.20117 8.99375H16.8012M16.2012 8.99375L15.681 16.2789C15.6594 16.5817 15.5239 16.865 15.3018 17.0719C15.0797 17.2787 14.7875 17.3938 14.484 17.3937H9.51837C9.21486 17.3938 8.92261 17.2787 8.7005 17.0719C8.47839 16.865 8.34292 16.5817 8.32137 16.2789L7.80117 8.99375H16.2012ZM10.8012 11.3937V14.9937V11.3937ZM13.2012 11.3937V14.9937V11.3937ZM13.8012 8.99375V7.19375C13.8012 7.03462 13.738 6.88201 13.6254 6.76949C13.5129 6.65696 13.3603 6.59375 13.2012 6.59375H10.8012C10.642 6.59375 10.4894 6.65696 10.3769 6.76949C10.2644 6.88201 10.2012 7.03462 10.2012 7.19375V8.99375H13.8012Z" stroke="#242529" stroke-linecap="round" stroke-linejoin="round" />
                      </svg></span></p>
                    </div>

                    <div class="addmore_team_link d-flex justify-content-between align-items-center mb_20 mt_10"><a href="!#">+   Add New Location</a></div></div>
                  <hr />


                  <div>
                    <div className="d-flex justify-content-between"><h6>Client focus</h6><p><span><svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="14.5" fill="#F6F6F6" stroke="#D6D6D6" />
                        <path d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z" fill="#151417" />
                      </svg></span> <span><svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11.5" fill="#F6F6F6" stroke="#D6D6D6" />
                        <path d="M7.20117 8.99375H16.8012M16.2012 8.99375L15.681 16.2789C15.6594 16.5817 15.5239 16.865 15.3018 17.0719C15.0797 17.2787 14.7875 17.3938 14.484 17.3937H9.51837C9.21486 17.3938 8.92261 17.2787 8.7005 17.0719C8.47839 16.865 8.34292 16.5817 8.32137 16.2789L7.80117 8.99375H16.2012ZM10.8012 11.3937V14.9937V11.3937ZM13.2012 11.3937V14.9937V11.3937ZM13.8012 8.99375V7.19375C13.8012 7.03462 13.738 6.88201 13.6254 6.76949C13.5129 6.65696 13.3603 6.59375 13.2012 6.59375H10.8012C10.642 6.59375 10.4894 6.65696 10.3769 6.76949C10.2644 6.88201 10.2012 7.03462 10.2012 7.19375V8.99375H13.8012Z" stroke="#242529" stroke-linecap="round" stroke-linejoin="round" />
                      </svg></span></p></div>
                     

                  <div className="small_addons_description">
                      <p>Small Business</p>
                      <p>Medium Business</p>
                      <p>Large Business</p>
                    </div>  
                    </div>
                  <hr />


                  <div>
                    <div className="d-flex justify-content-between"><h6>Company size</h6><p><span><svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                        <circle cx="15" cy="15" r="14.5" fill="#F6F6F6" stroke="#D6D6D6" />
                        <path d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z" fill="#151417" />
                      </svg></span> <span><svg className="ml_5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="11.5" fill="#F6F6F6" stroke="#D6D6D6" />
                        <path d="M7.20117 8.99375H16.8012M16.2012 8.99375L15.681 16.2789C15.6594 16.5817 15.5239 16.865 15.3018 17.0719C15.0797 17.2787 14.7875 17.3938 14.484 17.3937H9.51837C9.21486 17.3938 8.92261 17.2787 8.7005 17.0719C8.47839 16.865 8.34292 16.5817 8.32137 16.2789L7.80117 8.99375H16.2012ZM10.8012 11.3937V14.9937V11.3937ZM13.2012 11.3937V14.9937V11.3937ZM13.8012 8.99375V7.19375C13.8012 7.03462 13.738 6.88201 13.6254 6.76949C13.5129 6.65696 13.3603 6.59375 13.2012 6.59375H10.8012C10.642 6.59375 10.4894 6.65696 10.3769 6.76949C10.2644 6.88201 10.2012 7.03462 10.2012 7.19375V8.99375H13.8012Z" stroke="#242529" stroke-linecap="round" stroke-linejoin="round" />
                      </svg></span></p></div>
                     

                  <div className="small_addons_description">
                      <p>11-50 employees</p>
                      <p>16 on linkedin</p>
                      <p>34 on Squirrell</p>
                    </div>  
                    </div>
                </div>
              </div>
            </div>

            <div
              className={toggleState === 3 ? "content active-content" : "content"}
            >
              <h2>General</h2>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}