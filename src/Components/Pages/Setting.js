import React from "react";
import Button from "react-bootstrap/Button";
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
import Form from "react-bootstrap/Form";
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

export default function Projectsetting() {
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
        <div className="setting_header">
          <h2>Settings</h2>
          <hr style={{ background: "#E1E3E9" }} className="mt_25 mb_25" />
        </div>
        <div className="d-flex">
          <div className="wolfsoft_div pl_10 pt_10 ">
            <img
              src={require("../../assets/image/png/wolfsoft.png").default}
              alt=""
            />
          </div>
          <div className=" setting_right_section ml_10">
            <p>WOLF SOFT Pvt. Ltd.</p>
            <p>
              Mobile app development, UIUX Design, Interaction design, IT
              Project development, Web app development,
            </p>
            <span>IT Services and IT Consulting . Vadodara, Gujarat</span>
          </div>
          </div>
          <hr />
          <div className="overview_section">
          <p className="overview">Overview</p>
          <img
          src={require("../../assets/image/png/years_experience.png").default}
          alt="" />
          </div>
          <div className="company_details mt_20">
          <p className="mb_5">Website</p>
          <span className="link">https://wolfsoft.in</span>
          </div>
          <div className="company_details mt_25">
          <p className="mb_5">Phone</p>
          <span>+91 9549990169,  +91 774388438883</span>
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
          <p>Rushabh Patel  <span>( View Profile )</span></p>
          </div>

      </main>
    </div>
  );
}
