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
import { Icon } from "../../Utilities/Icon"

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
                        src={Icon.Closearrow}
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
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div className="projectsetting_header">
                    <h2>Project Settings</h2>
                    <hr style={{ background: "#E1E3E9" }} className="mt_25 mb_25" />
                </div>


                <Form className="form_group">
                    <div className="topfield" >
                        <Form.Group className="col-md-4 mb-3 textbox">
                            <Form.Label>Project Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Project Name" />
                        </Form.Group>

                        <Form.Group className=" col-md-4 mb-3 textbox">
                            <Form.Label>Project Budget</Form.Label>
                            <Form.Control type="" placeholder="INR" />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3 col-md-8 textarea" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Project description</Form.Label>
                        <Form.Control as="textarea" placeholder="Enter project description " rows={3} />
                    </Form.Group>


                    <div className="datepickerrow">
                        <div className="col-md-3">
                            <Form.Label>Start Date</Form.Label>
                                <Form.Group controlId="dob">
                                    <Form.Control
                                        type="date"
                                        name="dob"
                                        placeholder=""
                                    />
                                </Form.Group>
                        </div>

                        <div className="col-md-3">
                            <Form.Label>End Date</Form.Label>
                                <Form.Group controlId="dob">
                                    <Form.Control
                                        type="date"
                                        name="dob"
                                        placeholder=""
                                    />
                                </Form.Group>
                        </div>

                        <div className="col-md-2">
                            <Form.Label>Total Working Days</Form.Label>
                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="dob"
                                    placeholder="Days"
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