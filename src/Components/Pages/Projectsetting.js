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
            style={{ position: "absolute", top: "25px" }}
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
        <div className="projectsetting_header">
          <h2>Project Settings</h2>
          <hr />
        </div>
        

        <Form>
        <div className="d-flex justify-content-start align-item-center topfield" >
          <Form.Group className="mb-3 textbox" controlId="formBasicEmail">
            <Form.Label>Project Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3 textbox" controlId="formBasicPassword">
            <Form.Label>Project Budget</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          </div>
          <Form.Group className="mb-3 textarea" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Project description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
       

        <div className="d-flex justify-content-start align-item-center datepickerrow">

        <div className="">
          <Form.Label>Start Date</Form.Label>
          <div className="datepicker">
              <Form.Group controlId="dob">
                <Form.Control
                  className="border-0"
                  type="date"
                  name="dob"
                  placeholder="Today"
                />
              </Form.Group>
          </div>
          </div>

          <div className="">
          <Form.Label>Start Date</Form.Label>
          <div className="datepicker">
            <div className="">
              <Form.Group controlId="dob">
                <Form.Control
                  className="border-0"
                  type="date"
                  name="dob"
                  placeholder="Today"
                />
              </Form.Group>
            </div>
          </div>
          </div>
       
          <div className="col-md-2">
          <Form.Label>Start Date</Form.Label>
              <Form.Group>
                <Form.Control
                  className="border-0"
                  type="text"
                  name="dob"
                  placeholder="Today"
                />
              </Form.Group>
          </div>
        
         
        </div>
        <div className="btnsave"><button >save</button></div>
        </Form>
      </main>
    </div>
    
  );
}
