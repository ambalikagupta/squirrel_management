import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { mainListItems, secondaryListItems } from "./SideNav";
import Header from "./Header";
import { Icon } from "../../Utilities/Icon"


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 15px",
        ...theme.mixins.toolbar
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        background: "#F6F6F6",
        boxShadow: "unset",
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: "none",
    },
    title: {
        flexGrow: 1
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
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
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
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    fixedHeight: {
        height: 240
    },
}));

export default function Dashboard() {
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
            <AppBar
                className={clsx(classes.appBar, open && classes.appBarShift)}
            >
                <Toolbar className={classes.toolbar} style={{minHeight:"45px", paddingLeft:"4px"}}>
                    <img src={Icon.Closearrow} alt="" className={clsx(
                        classes.menuButton,
                        open && classes.menuButtonHidden
                    )} onClick={handleDrawerOpen} />
                    <Header />
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
                }}
                open={open}
            >
                <div className={classes.toolbarIcon} style={{minHeight:"45px"}}>
                    <h1 className="logo align-middle"><a href="/">SQUIRRELL</a></h1>
                    <IconButton onClick={handleDrawerClose}>
                        <img src={Icon.Openarrow} alt="" />
                    </IconButton>
                </div>
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content} style={{position:"relative"}}>
                <div className={classes.appBarSpacer} />
                <div className="madhouse_music mb_20 ml_20">
                    <div className="madhouse_top_first ml_10 mr_10">
                        <div><span className="letter_circle1">N</span></div>
                        <div className="pl_15">
                            <h6>Madhouse Music App</h6>
                            <p className="mb_35">Music mobile app to stream mixes, which has admin syste, vendor panel, user mobile app.</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <div className="madhouse_top_sec ml_10 mr_10">
                            <div><img src={require("../../assets/image/png/uyi.png").default} alt="" /></div>
                            <div className="pl_15"><h5>Uyi Omokaro</h5>
                                <small>Client from Lagos, Nigeria</small></div>
                        </div>
                        <div><img className="mr_10" src={require("../../assets/image/png/arrowright.png").default} alt="" /></div>
                    </div>

                    <hr className="ml_10 mt_20 mb_20" />

                    <div className="addicon_button ml_10 mb_10">
                        <button className="button1">Invoice <svg className="ml_60" xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                            <line x1="5.5" y1="0.5" x2="5.5" y2="11.5" stroke="black" />
                            <line x1="11" y1="6" y2="6" stroke="black" />
                        </svg></button>
                        <button className="button2">Documents <svg className="ml_40" xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                            <line x1="5.5" y1="0.5" x2="5.5" y2="11.5" stroke="black" />
                            <line x1="11" y1="6" y2="6" stroke="black" />
                        </svg></button>
                        <button className="button3">Meeting<svg className="ml_60" xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                            <line x1="5.5" y1="0.5" x2="5.5" y2="11.5" stroke="black" />
                            <line x1="11" y1="6" y2="6" stroke="black" />
                        </svg></button>
                    </div>
                    <hr className="ml_10 mt_20 mb_20" />

                    <div className="madhouse_bootom_section">
                        <p>Members and cost</p>

                        <div className="edit_box_header">
                            <div className="edit_report_header"><div><span className="pl_5 pr_5"><img src={require("../../assets/image/png/rushabpatel_two.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Rushabh Patel</span></div>
                                <div><span className="designation pl_5 pr_5">74hr . 30min</span><span className="designation pl_5 pr_5">$760</span></div></div>
                        </div>
                        <hr style={{marginTop:"12px",marginBottom:"12px"}} />
                        <div className="edit_box_header">
                            <div className="edit_report_header"><div><span className="pl_5 pr_5"><img src={require("../../assets/image/png/varunda.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Vrunda</span></div>
                            <div><span className="designation pl_5 pr_5">14hr . 11min</span><span className="designation pl_5 pr_5">$160</span></div></div>
                        </div>
                        <hr  style={{marginTop:"12px",marginBottom:"12px"}}/>
                        <div className="edit_box_header">
                            <div className="edit_report_header"><div><span className="pl_5 pr_5"><img src={require("../../assets/image/png/jaypatel.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Jay Patel</span></div>
                            <div><span className="designation pl_5 pr_5">41hr . 00min</span><span className="designation pl_5 pr_5">$560</span></div></div>
                        </div>
                        <hr  style={{marginTop:"12px",marginBottom:"12px"}}/>
                        <div className="edit_box_header">
                            <div className="edit_report_header"><div><span className="pl_5 pr_5"><img src={require("../../assets/image/png/abhik.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Abhik</span></div>
                            <div><span className="designation pl_5 pr_5">54hr . 15min</span><span className="designation pl_5 pr_5">$110</span></div></div>
                        </div>
                        <hr  style={{marginTop:"12px",marginBottom:"12px"}}/>
                        <div className="edit_box_header">
                            <div className="edit_report_header"><div><span className="pl_5 pr_5"><img src={require("../../assets/image/png/rutvik.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Rutvik</span></div>
                            <div><span className="designation pl_5 pr_5">63hr . 35min</span><span className="designation pl_5 pr_5">$150</span></div></div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}