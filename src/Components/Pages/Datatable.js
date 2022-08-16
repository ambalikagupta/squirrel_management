import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { mainListItems, secondaryListItems } from "../Dashboard/SideNav";
import Header from "../Dashboard/Header";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";

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
    background: "#F6F6F6",
    boxShadow: "unset",
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
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <img
            src={require("../../assets/image/png/sidenav.png").default}
            alt=""
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
            onClick={handleDrawerOpen}
          />
          <Header />
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
              src={require("../../assets/image/png/sidenav.png").default}
              alt=""
            />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <div className="documents_header mb_10">
          <h2>Members</h2>
          <div className="d-flex justify-content-center align-items-center header_select_selection">
            <div class="custom-select-documents" style={{ width: "148px" }}>
              <select>
                <option value="0">By region</option>
                <option value="1">None</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>
            <div class="custom-select-documents" style={{ width: "148px" }}>
              <select>
                <option value="0">By Designerion</option>
                <option value="1">None</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>
            <div class="custom-select-documents" style={{ width: "148px" }}>
              <select>
                <option value="0">By Role</option>
                <option value="1">None</option>
                <option value="2">One</option>
                <option value="3">Two</option>
              </select>
            </div>
          </div>
        </div>
        <div >
        <hr />
          <div className="d-flex full_member_div">
          <p>Full Members (14)</p> 
         <p>Invited (2)</p>
          </div>
          <form class="form-inline d-flex justify-content-start align-items-center ">
          <div className="member_search ">
          <form class="form-inline d-flex justify-content-start align-items-center">
          <img  src={require("../../assets/image/png/search.png").default} pl_5/>
          <input
            class="form-control mr-sm-2 border-0 ml_5 pl_35"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
          </div>
          <div className=" rightside_div pl_10">
          <i class="fa fa-user icon"></i>
          <input type="text" id="fname" name="fname" placeholder="Invite by email" className="invite_member"
          />
          <select name="City" className="select_member">
          <option value="">Member</option>
          <option value="">city</option>
          <option value="">city</option>
          <option value="">city</option>
        </select>
        <button className="btn_invite">Invite</button>
          </div>
          </form>
        </div>
        <div className="consultation_card_box mt_20">
          <div class="table-responsive">
            <table class="table datatable_table">
              <thead>
                <tr className="consultation_table_head">
                  <th className="consultation_table_head_text">Full Name</th>
                  <th className="consultation_table_head_text">Designation</th>
                  <th className="consultation_table_head_text">Monthly</th>
                  <th className="consultation_table_head_text">Daily</th>
                  <th className="consultation_table_head_text">Hourly</th>
                  <th className="consultation_table_head_text">Region</th>
                  <th className="consultation_table_head_text">Role</th>
                  <th className="consultation_table_head_text">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="datatable_table_body_row">
                  <td className="datatable_table_body_text">Rushabh Patel</td>
                  <td className="datatable_table_body_text">
                    CEO & Sr. UIUX Designer
                  </td>
                  <td className="datatable_table_body_text">₹ 80,000 </td>
                  <td className="datatable_table_body_text">₹ 4000 </td>
                  <td className="datatable_table_body_text">₹ 1200 </td>
                  <td className="datatable_table_body_text">Vadodara, IN</td>
                  <td className="datatable_table_body_text">
                    <select name="City" className="select_role">
                      <option value="">Admin</option>
                      <option value="">city</option>
                      <option value="">city</option>
                      <option value="">city</option>
                    </select>
                  </td>
                  <td className="datatable_table_body_text">
                    <div className="toggle-switch">
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </td>
                </tr>

                <tr className="consultation_table_body_row">
                  <td className="datatable_table_body_text">Rushabh Patel</td>
                  <td className="datatable_table_body_text">
                    CEO & Sr. UIUX Designer
                  </td>
                  <td className="datatable_table_body_text">₹ 80,000 </td>
                  <td className="datatable_table_body_text">₹ 4000 </td>
                  <td className="datatable_table_body_text">₹ 1200 </td>
                  <td className="datatable_table_body_text">Vadodara, IN</td>
                  <td className="datatable_table_body_text">
                    <select name="City" className="select_role">
                      <option value="">Project Manag</option>
                      <option value="">city</option>
                      <option value="">city</option>
                      <option value="">city</option>
                    </select>
                  </td>
                  <td className="datatable_table_body_text">
                    <div className="toggle-switch">
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr className="consultation_table_body_row">
                  <td className="datatable_table_body_text">Rushabh Patel</td>
                  <td className="datatable_table_body_text">
                    CEO & Sr. UIUX Designer
                  </td>
                  <td className="datatable_table_body_text">₹ 80,000 </td>
                  <td className="datatable_table_body_text">₹ 4000 </td>
                  <td className="datatable_table_body_text">₹ 1200 </td>
                  <td className="datatable_table_body_text">Vadodara, IN</td>
                  <td className="datatable_table_body_text">
                    <select name="City" className="select_role">
                      <option value="">Employee</option>
                      <option value="">city</option>
                      <option value="">city</option>
                      <option value="">city</option>
                    </select>
                  </td>
                  <td className="datatable_table_body_text">
                    <div className="toggle-switch">
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr className="consultation_table_body_row">
                  <td className="datatable_table_body_text">Rushabh Patel</td>
                  <td className="datatable_table_body_text">
                    CEO & Sr. UIUX Designer
                  </td>
                  <td className="datatable_table_body_text">₹ 80,000 </td>
                  <td className="datatable_table_body_text">₹ 4000 </td>
                  <td className="datatable_table_body_text">₹ 1200 </td>
                  <td className="datatable_table_body_text">Vadodara, IN</td>
                  <td className="datatable_table_body_text">
                    <select name="City" className="select_role">
                      <option value="">Employee</option>
                      <option value="">city</option>
                      <option value="">city</option>
                      <option value="">city</option>
                    </select>
                  </td>
                  <td className="datatable_table_body_text">
                    <div className="toggle-switch">
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr className="consultation_table_body_row">
                  <td className="datatable_table_body_text">Rushabh Patel</td>
                  <td className="datatable_table_body_text">
                    CEO & Sr. UIUX Designer
                  </td>
                  <td className="datatable_table_body_text">₹ 80,000 </td>
                  <td className="datatable_table_body_text">₹ 4000 </td>
                  <td className="datatable_table_body_text">₹ 1200 </td>
                  <td className="datatable_table_body_text">Vadodara, IN</td>
                  <td className="datatable_table_body_text">
                    <select name="City" className="select_role">
                      <option value="">Employee</option>
                      <option value="">city</option>
                      <option value="">city</option>
                      <option value="">city</option>
                    </select>
                  </td>
                  <td className="datatable_table_body_text">
                    <div className="toggle-switch">
                      <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                      </label>
                    </div>
                  </td>
                </tr>
                <tr className="consultation_table_body_row">
                  <td className="datatable_table_body_text">Rushabh Patel</td>
                  <td className="datatable_table_body_text">
                    CEO & Sr. UIUX Designer
                  </td>
                  <td className="datatable_table_body_text">₹ 80,000 </td>
                  <td className="datatable_table_body_text">₹ 4000 </td>
                  <td className="datatable_table_body_text">₹ 1200 </td>
                  <td className="datatable_table_body_text">Vadodara, IN</td>
                  <td className="datatable_table_body_text">
                    <select name="City" className="select_role">
                      <option value="">Employee</option>
                      <option value="">city</option>
                      <option value="">city</option>
                      <option value="">city</option>
                    </select>
                  </td>
                  <td className="datatable_table_body_text">
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
      </main>
    </div>
  );
}
