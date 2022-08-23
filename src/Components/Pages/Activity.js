import React, { useState, useEffect, useRef } from "react";
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
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import Typography from '@mui/material/Typography';
import Modal from "react-bootstrap/Modal";
import TextEditor from "../RteEditor/TextEditor";
import { Icon } from "../../Utilities/Icon"



const drawerWidth = 260;

const Accordion = ({ children }) => {
    let rfVal = useRef(null);

    useEffect(() => {
        handleClick();
    }, []);

    const handleClick = () => {
        const acc = rfVal.children;
        for (let i = 0; i < acc.length; i++) {
            let a = acc[i];
            a.children[0].onclick = () => a.classList.toggle("active");
        }
    };

    return <div ref={a => (rfVal = a)}>{children}</div>;
};

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

export default function Activity() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <img  src={Icon.Closearrow} alt="" className={clsx(
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
                <div className="activity_header">
                    <h2>Activity</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-center align-items-center">
                            <svg className="mr_15 ml_5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 2.75C1 2.28587 1.18437 1.84075 1.51256 1.51256C1.84075 1.18437 2.28587 1 2.75 1H4.5C4.96413 1 5.40925 1.18437 5.73744 1.51256C6.06563 1.84075 6.25 2.28587 6.25 2.75V4.5C6.25 4.96413 6.06563 5.40925 5.73744 5.73744C5.40925 6.06563 4.96413 6.25 4.5 6.25H2.75C2.28587 6.25 1.84075 6.06563 1.51256 5.73744C1.18437 5.40925 1 4.96413 1 4.5V2.75ZM9.75 2.75C9.75 2.28587 9.93437 1.84075 10.2626 1.51256C10.5908 1.18437 11.0359 1 11.5 1H13.25C13.7141 1 14.1592 1.18437 14.4874 1.51256C14.8156 1.84075 15 2.28587 15 2.75V4.5C15 4.96413 14.8156 5.40925 14.4874 5.73744C14.1592 6.06563 13.7141 6.25 13.25 6.25H11.5C11.0359 6.25 10.5908 6.06563 10.2626 5.73744C9.93437 5.40925 9.75 4.96413 9.75 4.5V2.75ZM1 11.5C1 11.0359 1.18437 10.5908 1.51256 10.2626C1.84075 9.93437 2.28587 9.75 2.75 9.75H4.5C4.96413 9.75 5.40925 9.93437 5.73744 10.2626C6.06563 10.5908 6.25 11.0359 6.25 11.5V13.25C6.25 13.7141 6.06563 14.1592 5.73744 14.4874C5.40925 14.8156 4.96413 15 4.5 15H2.75C2.28587 15 1.84075 14.8156 1.51256 14.4874C1.18437 14.1592 1 13.7141 1 13.25V11.5ZM9.75 11.5C9.75 11.0359 9.93437 10.5908 10.2626 10.2626C10.5908 9.93437 11.0359 9.75 11.5 9.75H13.25C13.7141 9.75 14.1592 9.93437 14.4874 10.2626C14.8156 10.5908 15 11.0359 15 11.5V13.25C15 13.7141 14.8156 14.1592 14.4874 14.4874C14.1592 14.8156 13.7141 15 13.25 15H11.5C11.0359 15 10.5908 14.8156 10.2626 14.4874C9.93437 14.1592 9.75 13.7141 9.75 13.25V11.5Z" stroke="#151417" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <svg className="mr_15 ml_5" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 7L13 7M3 7C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5L1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 0.999999 3 0.999999L13 1C13.5304 1 14.0391 1.21071 14.4142 1.58579C14.7893 1.96086 15 2.46957 15 3L15 5C15 5.53043 14.7893 6.03914 14.4142 6.41421C14.0391 6.78929 13.5304 7 13 7M3 7C2.46957 7 1.96086 7.21071 1.58579 7.58579C1.21071 7.96086 1 8.46957 1 9L1 11C1 11.5304 1.21071 12.0391 1.58579 12.4142C1.96086 12.7893 2.46957 13 3 13M13 7C13.5304 7 14.0391 7.21071 14.4142 7.58579C14.7893 7.96086 15 8.46957 15 9L15 11C15 11.5304 14.7893 12.0391 14.4142 12.4142C14.0391 12.7893 13.5304 13 13 13M3 13L13 13M3 13C2.46957 13 1.96086 13.2107 1.58579 13.5858C1.21071 13.9609 0.999999 14.4696 0.999999 15L0.999999 17C0.999999 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19L13 19C13.5304 19 14.0391 18.7893 14.4142 18.4142C14.7893 18.0391 15 17.5304 15 17L15 15C15 14.4696 14.7893 13.9609 14.4142 13.5858C14.0391 13.2107 13.5304 13 13 13" stroke="#737376" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div class="custom-select-activity" style={{ width: "148px" }}>
                            <select>
                                <option value="0">Filter by member</option>
                                <option value="1">None</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>
                        </div>
                        <div class="custom-select-activity" style={{ width: "148px" }}>
                            <select>
                                <option value="0">Filter by Date</option>
                                <option value="1">None</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="activity_button mt_10 mb_10">
                    <div>
                        <button className="button1">10 June 2022</button>
                    </div>
                    <div>
                        <button className="button2">28hrs  40mins</button>
                    </div>
                </div>

                <div>
                    <Accordion>
                        <div className="accor">
                            <div className="activity_accordion_header"><Typography><span className="time pl_15 pr_15">6:45pm</span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/profilepic.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Rushabh Patel</span><span className="designation pl_5 pr_5">CEO & Sr. UIUX Designer</span></Typography>
                                <Typography><span className="mr_10"> <Button onClick={handleShow} className="edit_button" startIcon={<EditIcon />}>
                                    Edit
                                </Button></span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/clock.png").default} alt="" /></span><span className="designation pl_5 pr_5">7hrs 40 mins</span></Typography></div>
                            <div className="body mt_15">- Changes in APIs as per developer comment == DONE <br />
                                - Update APIs in artist details to solve bug == DONE <br />
                                - Changes in home mix module in admin panel == DONE <br />
                                - Add comments in controllers for better understand == IN PROGRESS <br /></div>
                        </div>

                        <div className="accor">
                            <div className="activity_accordion_header"><Typography><span className="time pl_15 pr_15">6:32pm</span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/jprofile.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Jay Patel</span><span className="designation pl_5 pr_5">Sr. UIUX Designer</span></Typography>
                                <Typography><span className="mr_10"> <Button onClick={handleShow} className="edit_button" startIcon={<EditIcon />}>
                                    Edit
                                </Button></span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/clock.png").default} alt="" /></span><span className="designation pl_5 pr_5">7hrs 40 mins</span></Typography></div>
                            <div className="body mt_15">- Changes in APIs as per developer comment == DONE <br />
                                - Update APIs in artist details to solve bug == DONE <br />
                                - Changes in home mix module in admin panel == DONE <br />
                                - Add comments in controllers for better understand == IN PROGRESS <br /></div>
                        </div>
                    </Accordion>
                </div>


                <div className="activity_button mt_10 mb_10">
                    <div>
                        <button className="button1">9 June 2022</button>
                    </div>
                    <div>
                        <button className="button2">13hrs  10mins</button>
                    </div>
                </div>


                <div>
                    <Accordion>
                        <div className="accor">
                            <div className="activity_accordion_header"><Typography><span className="time pl_15 pr_15">6:45pm</span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/profilepic.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Rushabh Patel</span><span className="designation pl_5 pr_5">CEO & Sr. UIUX Designer</span></Typography>
                                <Typography><span className="mr_10"> <Button onClick={handleShow} className="edit_button" startIcon={<EditIcon />}>
                                    Edit
                                </Button></span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/clock.png").default} alt="" /></span><span className="designation pl_5 pr_5">7hrs 40 mins</span></Typography></div>
                            <div className="body mt_15">- Changes in APIs as per developer comment == DONE <br />
                                - Update APIs in artist details to solve bug == DONE <br />
                                - Changes in home mix module in admin panel == DONE <br />
                                - Add comments in controllers for better understand == IN PROGRESS <br /></div>
                        </div>

                        <div className="accor">
                            <div className="activity_accordion_header"><Typography><span className="time pl_15 pr_15">6:32pm</span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/jprofile.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Jay Patel</span><span className="designation pl_5 pr_5">Sr. UIUX Designer</span></Typography>
                                <Typography><span className="mr_10"> <Button onClick={handleShow} className="edit_button" startIcon={<EditIcon />}>
                                    Edit
                                </Button></span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/clock.png").default} alt="" /></span><span className="designation pl_5 pr_5">7hrs 40 mins</span></Typography></div>
                            <div className="body mt_15">- Changes in APIs as per developer comment == DONE <br />
                                - Update APIs in artist details to solve bug == DONE <br />
                                - Changes in home mix module in admin panel == DONE <br />
                                - Add comments in controllers for better understand == IN PROGRESS <br /></div>
                        </div>

                        <div className="accor">
                            <div className="activity_accordion_header"><Typography><span className="time pl_15 pr_15">6:32pm</span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/aprofile.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Abhik Patel</span><span className="designation pl_5 pr_5">Wireframe designer</span></Typography>
                                <Typography><span className="mr_10"> <Button onClick={handleShow} className="edit_button" startIcon={<EditIcon />}>
                                    Edit
                                </Button></span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/clock.png").default} alt="" /></span><span className="designation pl_5 pr_5">7hrs 40 mins</span></Typography></div>
                            <div className="body mt_15">- Changes in APIs as per developer comment == DONE <br />
                                - Update APIs in artist details to solve bug == DONE <br />
                                - Changes in home mix module in admin panel == DONE <br />
                                - Add comments in controllers for better understand == IN PROGRESS <br /></div>
                        </div>


                        <div className="accor">
                            <div className="activity_accordion_header"><Typography><span className="time pl_15 pr_15">6:32pm</span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/rprofile.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Rutvik Jolapara</span><span className="designation pl_5 pr_5">Project Manager</span></Typography>
                                <Typography><span className="mr_10"> <Button onClick={handleShow} className="edit_button" startIcon={<EditIcon />}>
                                    Edit
                                </Button></span><span className="pl_5 pr_5"><img src={require("../../assets/image/png/clock.png").default} alt="" /></span><span className="designation pl_5 pr_5">7hrs 40 mins</span></Typography></div>
                            <div className="body mt_15">- Changes in APIs as per developer comment == DONE <br />
                                - Update APIs in artist details to solve bug == DONE <br />
                                - Changes in home mix module in admin panel == DONE <br />
                                - Add comments in controllers for better understand == IN PROGRESS <br /></div>
                        </div>
                    </Accordion>
                </div>

            </main>
            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title className="modal_title">Edit Report</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="edit_box_header">
                        <div className="edit_report_header mb_10"><Typography><span className="pl_5 pr_5"><img src={require("../../assets/image/png/profilepic.png").default} alt="" /></span><span className="profilename pl_5 pr_5">Rushabh Patel</span><span className="designation pl_5 pr_5">CEO & Sr. UIUX Designer</span></Typography>
                            <Typography><span className="pl_5 pr_5"><img src={require("../../assets/image/png/clock.png").default} alt="" /></span><span className="designation pl_5 pr_5">Last edited on 14 may by <b>Rushabh patel</b> 2022 at 6:15 Pm</span></Typography></div>
                    </div>
                    <TextEditor />
                </Modal.Body>
                <Modal.Footer className="modal_footer">
                    <div className="d-flex justify-content-center align-items-center">
                         <span className="hours_worked">Hours Worked</span>
                        <div className="time_zone d-flex justify-content-center align-items-center ml_10">
                           <span>7</span>  <span style={{color :"#8B8B8B", paddingLeft:"10px", borderRight: "1px solid #E2E2E2",paddingRight:"15px"}}>Hrs</span>
                           <span style={{paddingLeft:"15px"}}>40</span>  <span style={{color :"#8B8B8B",paddingLeft:"10px"}}>Mins</span>
                        </div>
                    </div>   
                    <button className="editor_save_button" onClick={handleClose}>
                        Save
                    </button>
                </Modal.Footer>
            </Modal>
        </div>

    );
}
