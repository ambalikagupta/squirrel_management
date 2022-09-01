import React from "react";
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
import "../../assets/css/fonts.css"

const drawerWidth = 240;

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

export default function Datatable() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar className={clsx(classes.appBar, open && classes.appBarShift)} >
        <Toolbar className={classes.toolbar} style={{minHeight:"45px", paddingLeft:"4px"}}>
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
            <h2>Members</h2>
            <div className="header_select_selection">
              <div class="custom-select-documents" style={{ width: "100px" }}>
                <select>
                  <option value="0">By region</option>
                  <option value="1">None</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                </select>
              </div>
              <div class="custom-select-documents" style={{ width: "135px" }}>
                <select>
                  <option value="0">By Designerion</option>
                  <option value="1">None</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                </select>
              </div>
              <div class="custom-select-documents" style={{ width: "100px" }}>
                <select>
                  <option value="0">By Role</option>
                  <option value="1">None</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                </select>
              </div>
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

        <div className="members_div row">
          <div className="col-md-9">
          <div className="header_select_selection-mob">
              <div class="custom-select-documents" style={{ width: "100px" }}>
                <select>
                  <option value="0">By region</option>
                  <option value="1">None</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                </select>
              </div>
              <div class="custom-select-documents" style={{ width: "135px" }}>
                <select>
                  <option value="0">By Designerion</option>
                  <option value="1">None</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                </select>
              </div>
              <div class="custom-select-documents" style={{ width: "100px" }}>
                <select>
                  <option value="0">By Role</option>
                  <option value="1">None</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                </select>
              </div>
            </div>
            <div>
              <form class="form-inline members_form_group">
                <div className="member_search">
                  <img className="searchicon" src={require("../../assets/image/png/search.png").default} pl_5 />
                  <input
                    class="form-control border-0 pl_35"
                    type="search"
                    placeholder="Search Members"
                    aria-label="Search"
                  />
                </div>


                <div className="rightside_div">
                  <i class="fa fa-user-o" aria-hidden="true"></i>
                  <input type="text" id="fname" name="fname" placeholder="Invite by email" className="invite_member" />
                  <select name="City" className="select_member">
                    <option value="">Member</option>
                    <option value="">city</option>
                    <option value="">city</option>
                    <option value="">city</option>
                  </select>
                  <button className="btn_invite">Invite</button>
                </div>
              </form>

              <div className="full_member_div mt_35">
                <p>Full Members (14)</p>
                <p>Invited (2)</p>
              </div>
            </div>
            <div className="member_card_box">
              <div class="table-responsive">
                <table class="table datatable_table">
                  <thead>
                    <tr className="member_table_head">
                      <th className="member_table_head_text">Full Name</th>
                      <th className="member_table_head_text">Designation</th>
                      <th className="member_table_head_text">Monthly</th>
                      <th className="member_table_head_text">Daily</th>
                      <th className="member_table_head_text">Hourly</th>
                      <th className="member_table_head_text">Region</th>
                      <th className="member_table_head_text">Role</th>
                      <th className="member_table_head_text">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="member_table_body_row">
                      <td className="member_table_body_text">Rushabh Patel</td>
                      <td className="member_table_body_text">
                        CEO & Sr. UIUX Designer
                      </td>
                      <td className="member_table_body_text">₹ 80,000 </td>
                      <td className="member_table_body_text">₹ 4000 </td>
                      <td className="member_table_body_text">₹ 1200 </td>
                      <td className="member_table_body_text">Vadodara, IN</td>
                      <td className="member_table_body_text">
                        <select name="City" className="select_role">
                          <option value="">Admin</option>
                          <option value="">city</option>
                          <option value="">city</option>
                          <option value="">city</option>
                        </select>
                      </td>
                      <td className="member_table_body_text">
                        <div className="toggle-switch">
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </td>
                    </tr>

                    <tr className="member_table_body_row">
                      <td className="member_table_body_text">Jay Patel</td>
                      <td className="member_table_body_text">
                        Sr. UIUX Designer
                      </td>
                      <td className="member_table_body_text">₹ 80,000 </td>
                      <td className="member_table_body_text">₹ 4000 </td>
                      <td className="member_table_body_text">₹ 1200 </td>
                      <td className="member_table_body_text">Vadodara, IN</td>
                      <td className="member_table_body_text">
                        <select name="City" className="select_role">
                          <option value="">Project Manag</option>
                          <option value="">city</option>
                          <option value="">city</option>
                          <option value="">city</option>
                        </select>
                      </td>
                      <td className="member_table_body_text">
                        <div className="toggle-switch">
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr className="member_table_body_row">
                      <td className="member_table_body_text">Rutvik Jolapara</td>
                      <td className="member_table_body_text">
                        Project Manager
                      </td>
                      <td className="member_table_body_text">₹ 80,000 </td>
                      <td className="member_table_body_text">₹ 4000 </td>
                      <td className="member_table_body_text">₹ 1200 </td>
                      <td className="member_table_body_text">Vadodara, IN</td>
                      <td className="member_table_body_text">
                        <select name="City" className="select_role">
                          <option value="">Employee</option>
                          <option value="">city</option>
                          <option value="">city</option>
                          <option value="">city</option>
                        </select>
                      </td>
                      <td className="member_table_body_text">
                        <div className="toggle-switch">
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr className="member_table_body_row">
                      <td className="member_table_body_text">Deepan Panchani</td>
                      <td className="member_table_body_text">
                        Project Manager
                      </td>
                      <td className="member_table_body_text">₹ 80,000 </td>
                      <td className="member_table_body_text">₹ 4000 </td>
                      <td className="member_table_body_text">₹ 1200 </td>
                      <td className="member_table_body_text">Vadodara, IN</td>
                      <td className="member_table_body_text">
                        <select name="City" className="select_role">
                          <option value="">Employee</option>
                          <option value="">city</option>
                          <option value="">city</option>
                          <option value="">city</option>
                        </select>
                      </td>
                      <td className="member_table_body_text">
                        <div className="toggle-switch">
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr className="member_table_body_row">
                      <td className="member_table_body_text">Vrusti Patel</td>
                      <td className="member_table_body_text">
                        Sr. Flutter Developer
                      </td>
                      <td className="member_table_body_text">₹ 80,000 </td>
                      <td className="member_table_body_text">₹ 4000 </td>
                      <td className="member_table_body_text">₹ 1200 </td>
                      <td className="member_table_body_text">Vadodara, IN</td>
                      <td className="member_table_body_text">
                        <select name="City" className="select_role">
                          <option value="">Employee</option>
                          <option value="">city</option>
                          <option value="">city</option>
                          <option value="">city</option>
                        </select>
                      </td>
                      <td className="member_table_body_text">
                        <div className="toggle-switch">
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </td>
                    </tr>
                    <tr className="member_table_body_row">
                      <td className="member_table_body_text">Abhik Patel</td>
                      <td className="member_table_body_text">
                        UX Designer
                      </td>
                      <td className="member_table_body_text">₹ 80,000 </td>
                      <td className="member_table_body_text">₹ 4000 </td>
                      <td className="member_table_body_text">₹ 1200 </td>
                      <td className="member_table_body_text">Vadodara, IN</td>
                      <td className="member_table_body_text">
                        <select name="City" className="select_role">
                          <option value="">Employee</option>
                          <option value="">city</option>
                          <option value="">city</option>
                          <option value="">city</option>
                        </select>
                      </td>
                      <td className="member_table_body_text">
                        <div className="toggle-switch">
                          <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>


          <div className="members_salary_incentive col-md-3">
            <h6>Salary analytics</h6>

            <div className="salary-description">
              <p><span>Monthly </span><span style={{ color: "#737376" }}>( 22 days )</span></p>
              <p style={{ color: "#737376" }}>₹ 3,44,000 </p>
            </div>
            <div className="salary-description">
              <p><span>Daily</span><span style={{ color: "#737376" }}>( 8 hours )  </span></p>
              <p style={{ color: "#737376" }}>₹ 15,600</p>
            </div>
            <div className="salary-description">
              <p><span>Hourly</span><span style={{ color: "#737376" }}></span></p>
              <p style={{ color: "#737376" }}>₹ 1950</p>
            </div>

            <hr className="mt_15 mb_30" />


            <div className="deparment_wise d-flex justify-content-between mb_5">
              <div>
                <h6>Department wise</h6>
              </div>

              <div class="custom-select-activity">
                <select>
                  <option value="0">Monthly</option>
                  <option value="1">Anually</option>
                  <option value="2">One</option>
                  <option value="3">Two</option>
                </select>
              </div>
            </div>

            <div className="salary-description">
              <p><span>Design</span></p>
              <p style={{ color: "#737376" }}>₹ 1,30,000 /m</p>
            </div>
            <div className="salary-description">
              <p><span>Mobile developer</span></p>
              <p style={{ color: "#737376" }}>₹ 2,15,000 /m</p>
            </div>
            <div className="salary-description">
              <p><span>Management</span></p>
              <p style={{ color: "#737376" }}>₹ 90,000 /m</p>
            </div>
            <div className="salary-description">
              <p><span>Web developer</span></p>
              <p style={{ color: "#737376" }}>₹ 80,000 /m</p>
            </div>
          </div>



        </div>
      </main>
    </div>
  );
}