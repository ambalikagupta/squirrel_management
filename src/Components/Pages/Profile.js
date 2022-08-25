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

export default function Profile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
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
      <AppBar className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <img
            src={Icon.Closearrow}
            alt=""
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
            onClick={handleDrawerOpen}
          />
          <div className="profile_header">
            <h2>Jay Patel</h2>
            <div className="block-tabs border-0">
              <button
                className={toggleState === 1 ? "tabs tabs-active" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Activity
              </button>
              <button
                className={toggleState === 2 ? "tabs tabs-active" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Profile
              </button>
              <button
                className={toggleState === 3 ? "tabs tabs-active" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                Feedback
              </button>
            </div>
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
        <div className={classes.toolbarIcon}>
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
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main>
        <div className={classes.appBarSpacer} style={{ minHeight: "45px" }} />
        <div>
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content active-content" : "content"
              }
            >
              <h2>Activity</h2>
            </div>

            <div
              className={
                toggleState === 2 ? "content active-content" : "content"
              }
            >
              <div className="organization_div">
                <div className="wolfsoft_div pl_10 pt_10 pr_10 pb_10 ">
                  <img
                    src={
                      require("../../assets/image/png/bigprofile.png").default
                    }
                    alt=""
                  />
                </div>
                <div className="setting_right_section ml_10">
                  <p>
                    Jay Patel
                    <svg
                      className="ml_20"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                    >
                      <circle
                        cx="15"
                        cy="15"
                        r="14.5"
                        fill="#F6F6F6"
                        stroke="#D6D6D6"
                      />
                      <path
                        d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                        fill="#151417"
                      />
                    </svg>
                  </p>
                  <p>
                    Sr. UIUX Designer with 7 years of exp. on 150+ projects.
                  </p>
                  <span>
                  From Vadodara, Gujarat, India
                  </span>
                </div>
              </div>

              <div className="organization_tab_div row pt_20">
                <div className="col-md-9">
                  <div className="overview_section">
                    <p className="overview">
                      About
                      <svg
                        className="ml_15"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="14.5"
                          fill="#F6F6F6"
                          stroke="#D6D6D6"
                        />
                        <path
                          d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                          fill="#151417"
                        />
                      </svg>
                    </p>
                    <p>
                      Experienced technical leader with a demonstrated history
                      of working in the industrial automation industry. Skilled
                      in Python. Strong information technology professional with
                      a Master of Technology (M.Tech.) focused in Computer
                      Science from IIT Kanpur.
                    </p>
                  </div>

                  <div className="company_details mt_25">
                    <p className="mb_5">
                      Skills{" "}
                      <svg
                        className="ml_15"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="14.5"
                          fill="#F6F6F6"
                          stroke="#D6D6D6"
                        />
                        <path
                          d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                          fill="#151417"
                        />
                      </svg>
                    </p>

                    <div className="specialities_button mt_10">
                      <button type="button">
                        User Experience Design
                        <span className="pl_10">8 Yrs</span>
                      </button>
                      <button type="button">
                        User interface design
                        <span className="pl_10">8 Yrs</span>
                      </button>
                      <button type="button">
                        Product design<span className="pl_10">8 Yrs</span>
                      </button>
                      <button type="button">
                        Wireframing<span className="pl_10">8 Yrs</span>
                      </button>
                      <button type="button">
                        User research<span className="pl_10">6 Yrs</span>
                      </button>
                      <button type="button">
                        Website Design<span className="pl_10">8 Yrs</span>
                      </button>
                      <button type="button">
                        Mobile app design<span className="pl_10">8 Yrs</span>
                      </button>
                      <button type="button">
                        Qualitative Research<span className="pl_10">2 Yrs</span>
                      </button>
                      <button type="button">
                        User ability testing<span className="pl_10">4 Yrs</span>
                      </button>
                      <button type="button">
                        Figma<span className="pl_10">3 Yrs</span>
                      </button>
                      <button type="button">
                        Sketch<span className="pl_10">2 Yrs</span>
                      </button>
                      <button type="button">
                        Adobe XD<span className="pl_10">3 Yrs</span>
                      </button>
                      <button type="button">
                        Photoshop<span className="pl_10">2 Yrs</span>
                      </button>
                      <button type="button">
                        Information Architecture
                        <span className="pl_10">6 Yrs</span>
                      </button>
                    </div>
                  </div>

                  <div className="company_details mt_25">
                    <p className="mb_5">
                      Industry Experience{" "}
                      <svg
                        className="ml_15"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="14.5"
                          fill="#F6F6F6"
                          stroke="#D6D6D6"
                        />
                        <path
                          d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                          fill="#151417"
                        />
                      </svg>
                    </p>

                    <div className="specialities_button mt_10">
                      <button type="button">Ecommerce</button>
                      <button type="button">Food delivery</button>
                      <button type="button">ERP System</button>
                      <button type="button">SAAS</button>
                      <button type="button">OTT</button>
                      <button type="button">Landing Page</button>
                      <button type="button">Dating app</button>
                      <button type="button">Fintech</button>
                    </div>
                  </div>

                  <div className="overview_section mt_25">
                    <p className="overview">
                      Certifications
                      <svg
                        className="ml_15"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 28 28"
                        fill="none"
                      >
                        <path
                          d="M14 10.5V14V10.5ZM14 14V17.5V14ZM14 14H17.5H14ZM14 14H10.5H14ZM24.5 14C24.5 15.3789 24.2284 16.7443 23.7007 18.0182C23.1731 19.2921 22.3996 20.4496 21.4246 21.4246C20.4496 22.3996 19.2921 23.1731 18.0182 23.7007C16.7443 24.2284 15.3789 24.5 14 24.5C12.6211 24.5 11.2557 24.2284 9.98182 23.7007C8.70791 23.1731 7.55039 22.3996 6.57538 21.4246C5.60036 20.4496 4.82694 19.2921 4.29926 18.0182C3.77159 16.7443 3.5 15.3789 3.5 14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.7848 3.5 19.4555 4.60625 21.4246 6.57538C23.3938 8.54451 24.5 11.2152 24.5 14Z"
                          fill="#F6F6F6"
                        />
                        <path
                          d="M14 10.5V14M14 14V17.5M14 14H17.5M14 14H10.5M24.5 14C24.5 15.3789 24.2284 16.7443 23.7007 18.0182C23.1731 19.2921 22.3996 20.4496 21.4246 21.4246C20.4496 22.3996 19.2921 23.1731 18.0182 23.7007C16.7443 24.2284 15.3789 24.5 14 24.5C12.6211 24.5 11.2557 24.2284 9.98182 23.7007C8.70791 23.1731 7.55039 22.3996 6.57538 21.4246C5.60036 20.4496 4.82694 19.2921 4.29926 18.0182C3.77159 16.7443 3.5 15.3789 3.5 14C3.5 11.2152 4.60625 8.54451 6.57538 6.57538C8.54451 4.60625 11.2152 3.5 14 3.5C16.7848 3.5 19.4555 4.60625 21.4246 6.57538C23.3938 8.54451 24.5 11.2152 24.5 14Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </p>
                    <p>
                      Listing your certifications can help prove your specific
                      knowledge or abilities. (+10%)
                    </p>
                  </div>

                  <div className="overview_section mt_25">
                    <p className="overview">
                      Other Experiences{" "}
                      <svg
                        className="ml_15"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="14.5"
                          fill="#F6F6F6"
                          stroke="#D6D6D6"
                        />
                        <path
                          d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                          fill="#151417"
                        />
                      </svg>
                    </p>
                    <p>
                      Highlighting relevant experiences can boost your
                      visibility in our search results. (+5%)
                    </p>
                  </div>

                  <div className="overview_section mt_25">
                    <p className="overview">
                      Employment history
                      <svg
                        className="ml_15"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="14.5"
                          fill="#F6F6F6"
                          stroke="#D6D6D6"
                        />
                        <path
                          d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                          fill="#151417"
                        />
                      </svg>
                    </p>
                    <p className="april_designer">
                      Sr. UIUX Designer | Wolf Soft Pvt. Ltd. | April 2015 -
                      Present - 7 yrs 5 months{" "}
                      <span>
                        <svg
                          className="ml_15"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <circle
                            cx="15"
                            cy="15"
                            r="14.5"
                            fill="#F6F6F6"
                            stroke="#D6D6D6"
                          />
                          <path
                            d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                            fill="#151417"
                          />
                        </svg>
                      </span>
                      <span>
                        <svg
                          className="ml_15"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="11.5"
                            fill="#F6F6F6"
                            stroke="#D6D6D6"
                          />
                          <path
                            d="M7.20117 8.99375H16.8012M16.2012 8.99375L15.681 16.2789C15.6594 16.5817 15.5239 16.865 15.3018 17.0719C15.0797 17.2787 14.7875 17.3938 14.484 17.3937H9.51837C9.21486 17.3938 8.92261 17.2787 8.7005 17.0719C8.47839 16.865 8.34292 16.5817 8.32137 16.2789L7.80117 8.99375H16.2012ZM10.8012 11.3937V14.9937V11.3937ZM13.2012 11.3937V14.9937V11.3937ZM13.8012 8.99375V7.19375C13.8012 7.03462 13.738 6.88201 13.6254 6.76949C13.5129 6.65696 13.3603 6.59375 13.2012 6.59375H10.8012C10.642 6.59375 10.4894 6.65696 10.3769 6.76949C10.2644 6.88201 10.2012 7.03462 10.2012 7.19375V8.99375H13.8012Z"
                            stroke="#242529"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </p>
                  </div>

                  <div className="overview_section mt_30">
                    <p className="overview">
                      Portfolio ( 2 )
                      <svg
                        className="ml_15"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="14.5"
                          fill="#F6F6F6"
                          stroke="#D6D6D6"
                        />
                        <path
                          d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                          fill="#151417"
                        />
                      </svg>
                    </p>
                    <div class="portfolio_cards">
                      <div class="col-md-4 mb_10">
                        <div class="card">
                          <div class="portfolio-card-blocks">
                            <img
                              src={
                                require("../../assets/image/png/portfolio1.png")
                                  .default
                              }
                              alt=""
                            />
                            <div className="documents_text">
                              <h6>
                                <span className="scope_work_profile">
                                  Admin management App design
                                </span>
                              </h6>
                              <span>
                                <svg
                                  className="ml_15"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <circle
                                    cx="15"
                                    cy="15"
                                    r="14.5"
                                    fill="#F6F6F6"
                                    stroke="#D6D6D6"
                                  />
                                  <path
                                    d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                                    fill="#151417"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  className="ml_15"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="11.5"
                                    fill="#F6F6F6"
                                    stroke="#D6D6D6"
                                  />
                                  <path
                                    d="M7.20117 8.99375H16.8012M16.2012 8.99375L15.681 16.2789C15.6594 16.5817 15.5239 16.865 15.3018 17.0719C15.0797 17.2787 14.7875 17.3938 14.484 17.3937H9.51837C9.21486 17.3938 8.92261 17.2787 8.7005 17.0719C8.47839 16.865 8.34292 16.5817 8.32137 16.2789L7.80117 8.99375H16.2012ZM10.8012 11.3937V14.9937V11.3937ZM13.2012 11.3937V14.9937V11.3937ZM13.8012 8.99375V7.19375C13.8012 7.03462 13.738 6.88201 13.6254 6.76949C13.5129 6.65696 13.3603 6.59375 13.2012 6.59375H10.8012C10.642 6.59375 10.4894 6.65696 10.3769 6.76949C10.2644 6.88201 10.2012 7.03462 10.2012 7.19375V8.99375H13.8012Z"
                                    stroke="#242529"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb_10">
                        <div class="card">
                          <div class="portfolio-card-blocks">
                            <img
                              src={
                                require("../../assets/image/png/portfolio1.png")
                                  .default
                              }
                              alt=""
                            />
                            <div className="documents_text">
                              <h6>
                                <span className="scope_work_profile">
                                  Admin management App design
                                </span>
                              </h6>
                              <span>
                                <svg
                                  className="ml_15"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <circle
                                    cx="15"
                                    cy="15"
                                    r="14.5"
                                    fill="#F6F6F6"
                                    stroke="#D6D6D6"
                                  />
                                  <path
                                    d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                                    fill="#151417"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  className="ml_15"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="11.5"
                                    fill="#F6F6F6"
                                    stroke="#D6D6D6"
                                  />
                                  <path
                                    d="M7.20117 8.99375H16.8012M16.2012 8.99375L15.681 16.2789C15.6594 16.5817 15.5239 16.865 15.3018 17.0719C15.0797 17.2787 14.7875 17.3938 14.484 17.3937H9.51837C9.21486 17.3938 8.92261 17.2787 8.7005 17.0719C8.47839 16.865 8.34292 16.5817 8.32137 16.2789L7.80117 8.99375H16.2012ZM10.8012 11.3937V14.9937V11.3937ZM13.2012 11.3937V14.9937V11.3937ZM13.8012 8.99375V7.19375C13.8012 7.03462 13.738 6.88201 13.6254 6.76949C13.5129 6.65696 13.3603 6.59375 13.2012 6.59375H10.8012C10.642 6.59375 10.4894 6.65696 10.3769 6.76949C10.2644 6.88201 10.2012 7.03462 10.2012 7.19375V8.99375H13.8012Z"
                                    stroke="#242529"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4 mb_10">
                        <div class="card">
                          <div class="portfolio-card-blocks">
                            <img
                              src={
                                require("../../assets/image/png/portfolio1.png")
                                  .default
                              }
                              alt=""
                            />
                            <div className="documents_text">
                              <h6>
                                <span className="scope_work_profile">
                                  Admin management App design
                                </span>
                              </h6>
                              <span>
                                <svg
                                  className="ml_15"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 30 30"
                                  fill="none"
                                >
                                  <circle
                                    cx="15"
                                    cy="15"
                                    r="14.5"
                                    fill="#F6F6F6"
                                    stroke="#D6D6D6"
                                  />
                                  <path
                                    d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                                    fill="#151417"
                                  />
                                </svg>
                              </span>
                              <span>
                                <svg
                                  className="ml_15"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="11.5"
                                    fill="#F6F6F6"
                                    stroke="#D6D6D6"
                                  />
                                  <path
                                    d="M7.20117 8.99375H16.8012M16.2012 8.99375L15.681 16.2789C15.6594 16.5817 15.5239 16.865 15.3018 17.0719C15.0797 17.2787 14.7875 17.3938 14.484 17.3937H9.51837C9.21486 17.3938 8.92261 17.2787 8.7005 17.0719C8.47839 16.865 8.34292 16.5817 8.32137 16.2789L7.80117 8.99375H16.2012ZM10.8012 11.3937V14.9937V11.3937ZM13.2012 11.3937V14.9937V11.3937ZM13.8012 8.99375V7.19375C13.8012 7.03462 13.738 6.88201 13.6254 6.76949C13.5129 6.65696 13.3603 6.59375 13.2012 6.59375H10.8012C10.642 6.59375 10.4894 6.65696 10.3769 6.76949C10.2644 6.88201 10.2012 7.03462 10.2012 7.19375V8.99375H13.8012Z"
                                    stroke="#242529"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="company_details_locations col-md-3">
                  <div className="company_details">
                    {" "}
                    <p className="mb_5">
                      About
                      <svg
                        className="ml_15"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="14.5"
                          fill="#F6F6F6"
                          stroke="#D6D6D6"
                        />
                        <path
                          d="M18.303 9.4789C18.4477 9.32907 18.6208 9.20957 18.8122 9.12736C19.0036 9.04514 19.2094 9.00187 19.4177 9.00006C19.626 8.99825 19.8325 9.03794 20.0253 9.11681C20.2181 9.19569 20.3933 9.31217 20.5405 9.45945C20.6878 9.60674 20.8043 9.78189 20.8832 9.97467C20.9621 10.1675 21.0018 10.374 20.9999 10.5823C20.9981 10.7906 20.9549 10.9964 20.8726 11.1878C20.7904 11.3792 20.6709 11.5523 20.5211 11.697L19.8991 12.319L17.681 10.1009L18.303 9.4789ZM16.572 11.2099L10 17.7819V20H12.2181L18.7909 13.428L16.5712 11.2099H16.572Z"
                          fill="#151417"
                        />
                      </svg>
                    </p>
                  </div>

                  <div className="company_details mt_15">
                    <p className="mb_5">Phone</p>
                    <span>+91 9549990169, +91 774388438883</span>
                  </div>
                  <div className="company_details mt_15">
                    <p className="mb_5">Email Id</p>
                    <span>ceo@wolfsoft.in</span>
                  </div>

                  <div className="company_details mt_15">
                    <p className="mb_5">Job title</p>
                    <span>UIUX Designer</span>
                  </div>
                  <div className="company_details mt_15">
                    <p className="mb_5">Experience</p>
                    <span>7.8 years</span>
                  </div>
                  <div className="company_details mt_15">
                    <p className="mb_5">Joining date</p>
                    <span>10/08/2015 ( 7 years and 8 months )</span>
                  </div>
                  <div className="company_details mt_15">
                    <p className="mb_5">Salary</p>
                    <span>₹ 30,000/m . ₹ 1082/d . ₹ 432/h</span>
                  </div>

                  <hr />

                  <div className="sidenav">
                    <div className="create_project pt_20 pb_10 pl_15 pr_10">
                      <p>Projects</p>
                      <a href="#">Craete new Project +</a>
                    </div>

                    <div className="sidenav_bottom_div">
                      
                      <a href="#">
                        <span className="letter_circle2">N</span>
                        <span className="pl_30">NFT Marketplace</span>
                      </a>
                      <a href="#">
                        <span className="letter_circle3">S</span>
                        <span className="pl_30">sdsds</span>
                      </a>
                      <a href="#">
                        <span className="letter_circle4">W</span>
                        <span className="pl_30">Wolfsoft Management</span>
                      </a>
                      <a href="#">
                        <span className="letter_circle5">L</span>
                        <span className="pl_30">LIC App</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={
                toggleState === 3 ? "content active-content" : "content"
              }
            >
              <h2>Feedback</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
