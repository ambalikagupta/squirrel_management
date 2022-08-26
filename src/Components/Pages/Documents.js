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
import Header from "../Dashboard/Header";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import { Icon } from "../../Utilities/Icon"


const drawerWidth = 260;

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

export default function Documents() {
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
                <Toolbar className={classes.toolbar}>
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
                <div className={classes.toolbarIcon}>
                    <h1 className="logo"><a href="/">SQUIRRELL</a></h1>
                    <IconButton onClick={handleDrawerClose}>
                        <img src={Icon.Openarrow} alt="" />
                    </IconButton>
                </div>
                <Divider />
                <List>{mainListItems}</List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <div className="documents_header">
                
                    <h2>Documents</h2>
                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                        <div class="custom-select-documents" style={{ width: "148px" }}>
                            <select>
                                <option value="0">Owned by anyone</option>
                                <option value="1">None</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>
                        </div>
                        <div className="search_document">
                            <form class="d-flex justify-content-between align-items-center document_search mr_15">
                                <input
                                    class="form-control input_field ml_5 pl_35"
                                    type="search"
                                    placeholder="Search Document"
                                    aria-label="Search"
                                    style={{border:"none"}}
                                />
                                 <img src={require("../../assets/image/png/search.png").default} className="payout_search"></img>
                            </form>
                        </div>
                    </div>
                
                </div>
               
                <div class="cards_documents">
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents1.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents2.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents3.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents4.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents5.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents1.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents2.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents3.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents3.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 mb_10">
                        <div class="card">
                            <div class="card-block">
                                <img src={require("../../assets/image/png/documents3.png").default} alt="" />
                                <div className="documents_text">
                                    <h6><span className="scope_work">Scope of work V1.</span><p className="pt_5">14 Oct 2021</p></h6><span >&#10247;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}