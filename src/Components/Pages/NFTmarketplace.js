import React, { useState, useCallback } from "react";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import { Container } from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import Modal from 'react-bootstrap/Modal';
import { Snackbar } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownRoundedIcon from "@material-ui/icons/KeyboardArrowDownRounded";
import clsx from "clsx";
import { Icon } from "../../Utilities/Icon"


export default function NFTmarketplace() {
    const [open, setOpen] = useState(false);
    const [showToggle1, setShowToggle1] = useState('');
    const [showToggle2, setShowToggle2] = useState('');
    const [showToggle3, setShowToggle3] = useState('');

    const handleClick = () => {
        setOpen(true);
        navigator.clipboard.writeText(window.location.toString());
    };

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const useStyles = makeStyles((theme) => ({
        openY: {
          transform: "scaleY(-1)"
        },
        closeY: {
          transform: "scaleY(1)"
        }
      }));
      const classes = useStyles();
    

    const [show, setShow] = useState(`<p><br></p><h2><strong>Proposal for Development of NFT Market Place like Opensea.io</strong></h2><p><br></p><p><br></p><p><strong>Client : Uyi Omokaro, Director og 2group&nbsp;</strong></p><p><br></p><p>Brief about project</p><p>NFT Market place like opensea.io, which allows NFT creators to sell their NFT’s on marketplace.</p><p><br></p><p><br></p><p><br></p><p><a href="Features of an NFT marketplace app like OpenSea." rel="noopener noreferrer" target="_blank">Features of an NFT marketplace app like OpenSea.</a></p><p><br></p><p><br></p><p><br></p><p>The first and foremost step is to set up an Ethereum wallet in order to access applications dealing with NFT marketplaces. Users can use various wallet facilities like Trezor One, Metamask, Exodus, etc., to open their Ethereum wallets.&nbsp;</p><p>Once the users have initiated your Ethereum account, they can connect the same with the NFT platform you are planning to use.&nbsp;</p><p>Only after doing this, the user would be allowed to set up the NFT platform profile.&nbsp;</p><p>An NFT marketplace app like OpenSea provides users with various features such as My Profile, Transfer, Sell, Account Settings, W-ETH Station, etc. in the user profile section.&nbsp;</p><p>The next feature you can have in your NFT app development like OpenSea is the Community feature. In this feature, the user can explore various Blogs, FAQs, leave behind their suggestions or ask for help.&nbsp;</p><p>Moving forward, the registered users can browse NFT and collectibles in various categories such as Domain names, Artforms, Virtual worlds, Trading cards, Sports, Collectibles, Utility, Videos, and a lot more.&nbsp;</p>`)

    return (
        <div>
            <main>
                <div className="document_header">
                    <div className="d-flex justify-content-center align-items-center"><img src={Icon.Backarrow} alt="" />
                        <h2>NFT Marketplace Proposal <img className="pl_5" src={require("../../assets/image/png/nfteditpic.png").default} alt="" /><br /> <span className="text-muted">Last Updated <span className="text-muted2">15 June 2022 </span> by <span className="text-muted2">Rushabh patel</span> </span></h2></div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="document_button mt_10 mb_10">
                            <div>
                                <button onClick={handleShow} className="button1"><svg className="mr_10" xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
                                    <path d="M9.5 5.09844C9.92641 5.09845 10.3427 4.96866 10.6936 4.72632C11.0444 4.48398 11.3132 4.14057 11.4641 3.74177C11.615 3.34297 11.641 2.90767 11.5385 2.49376C11.436 2.07985 11.21 1.70694 10.8904 1.42463C10.5709 1.14231 10.1729 0.963968 9.74955 0.913311C9.32616 0.862654 8.89738 0.942085 8.52024 1.14104C8.14309 1.34 7.83544 1.64905 7.63821 2.0271C7.44098 2.40515 7.36351 2.83429 7.4161 3.25744L3.9581 4.98644C3.66146 4.70039 3.28722 4.50793 2.88198 4.43305C2.47675 4.35817 2.05844 4.40417 1.67917 4.56532C1.29989 4.72647 0.976413 4.99565 0.749025 5.33933C0.521636 5.68301 0.400391 6.086 0.400391 6.49809C0.400391 6.91018 0.521636 7.31317 0.749025 7.65684C0.976413 8.00052 1.29989 8.2697 1.67917 8.43086C2.05844 8.59201 2.47675 8.63801 2.88198 8.56313C3.28722 8.48825 3.66146 8.29579 3.9581 8.00974L7.4161 9.73874C7.35485 10.2303 7.46934 10.7277 7.73935 11.143C8.00935 11.5583 8.41748 11.8648 8.8916 12.0083C9.36573 12.1519 9.87532 12.1231 10.3303 11.9273C10.7853 11.7314 11.1564 11.381 11.3781 10.938C11.5997 10.4949 11.6576 9.98784 11.5415 9.50626C11.4254 9.02469 11.1428 8.59966 10.7437 8.30629C10.3445 8.01291 9.8545 7.87009 9.36023 7.90306C8.86596 7.93602 8.39926 8.14266 8.0426 8.48644L4.5846 6.75744C4.60578 6.58542 4.60578 6.41146 4.5846 6.23944L8.0426 4.51044C8.4192 4.87444 8.933 5.09844 9.5 5.09844Z" fill="#242529" />
                                </svg>Share</button>
                            </div>
                            <div>
                                <button className="button2">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Container fluid>
                    <ReactQuill className="shadow-sm"
                        theme="snow"
                        style={{
                            height: "85vh",
                            marginTop: '1rem',
                            display: 'flex',
                            flexDirection: 'column'
                        }}

                        value={show}

                        modules={{
                            toolbar: [
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                ['link', 'blockquote', "code-block", "image"],
                                ['blockquote', "code-block"],
                                [{ 'header': '1' }, { 'header': '2' }],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'font': [] }, { size: [] }],
                                [{ 'color': [] }, { 'background': [] }],
                                ['clean'],
                                [{ 'align': [] }],
                            ],
                        }}
                        formats={[
                            'header', 'font', 'size',
                            'bold', 'italic', 'underline', 'strike', 'blockquote', 'color', 'background',
                            'list', 'bullet', 'indent', 'link', 'video', 'image', "code-block", "align"
                        ]}
                        onChange={(val) => {
                            setShow(val)
                        }}
                    />
                </Container>

            </main>

            <Modal show={showModal} onHide={handleClose} size="md">
                <Modal.Header closeButton>
                    <Modal.Title className="modal_title">Share this document</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal_body_toggle mt_10 mb_10">
                        <div>
                            <h6 className="link_text"><img className="pl_5 pr_5" src={require("../../assets/image/png/frame.png").default} alt="" /> Public Link</h6>
                        </div>

                        <div className="toggle-switch">
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round" onClick={() => setShowToggle1(!showToggle1)}></span>
                            </label>
                        </div>
                    </div>
                    {
                        showToggle1 ? <div className="copy_link_buttton ml_10 mr_10 mt_15 mb_15"><button class="btn" onClick={handleClick}>Copy  Public Link <img className="pl_5" src={require("../../assets/image/png/copylink.png").default} alt="" /></button> <Snackbar
                            message="Copied to clibboard"
                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                            autoHideDuration={2000}
                            onClose={() => setOpen(false)}
                            open={open}
                        /></div> : null
                    }

                    <div className="modal_body_toggle mt_20 mb_10">
                        <div>
                            <h6 className="link_text"><img className="pl_5 pr_5" src={require("../../assets/image/png/frame.png").default} alt="" /> Private link</h6>
                        </div>

                        <div className="toggle-switch">
                            <label class="switch">
                                <input type="checkbox" />
                                <span class="slider round" onClick={() => setShowToggle2(!showToggle2)}></span>
                            </label>
                        </div>
                    </div>
                    {
                        showToggle2 ? <div className="copy_link_buttton ml_10 mr_10 mt_15"><button class="btn" onClick={handleClick}>Copy Private Link <img className="pl_5" src={require("../../assets/image/png/copylink.png").default} alt="" /></button><Snackbar
                            message="Copied to clibboard"
                            anchorOrigin={{ vertical: "top", horizontal: "center" }}
                            autoHideDuration={2000}
                            onClose={() => setOpen(false)}
                            open={open}
                        /></div> : null
                    }


                    <div className="modal_body_toggle mt_20 mb_10">
                        <div>
                            <h6 className="link_text"><img className="pl_5 pr_5" src={require("../../assets/image/png/frame.png").default} alt="" /> Download Document</h6>
                        </div>

                        <div className="">
                            <a href="#" className="download_pdf">Download PDF</a>
                        </div>
                    </div>

                    <div className="modal_body_toggle">
                        <p className="text-muted mt_10 ml_15">SHARE WITH</p>
                    </div>

                    <div className="modal_body_toggle mb_10">
                        <div>
                            <h6 className="link_text" onClick={() => setShowToggle3(!showToggle3)} ><img className="pl_10 pr_10" src={require("../../assets/image/png/folder.png").default} alt="" />Madhouse Music app <KeyboardArrowDownRoundedIcon
          className={clsx(!showToggle3 && classes.closeY, showToggle3 && classes.openY)}
        /></h6>
                        </div>

                        <div className="profile_pic">
                            <a href="#"><img className="" src={require("../../assets/image/png/profile.png").default} alt="" /><img className="" src={require("../../assets/image/png/profile2.png").default} alt="" /><img className="" src={require("../../assets/image/png/profilepic.png").default} alt="" /></a>
                        </div>
                    </div>
                </Modal.Body>
                {
                        showToggle3 ?
                        <>
                        <div className="pb_20 pt_20 pl_20 pr_20" style={{background: "#F6F6F6", borderRadius: "0px 0px 10px 10px"}}>
                        <div className="modal_body_bottom_toggle">
                            <div>
                                <p className="text-muted">4 People</p>
                            </div>

                            <div class="custom-select-activity">
                            <select>
                                <option value="0">Edit all</option>
                                <option value="1">View</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>
                          </div>
                        </div>

                    <div className="edit_box_header">
                        <div className="edit_report_header mt_20">
                            <div className="">
                                <span className="pl_5 pr_5"><img src={require("../../assets/image/png/pic1.png").default} alt="" /></span>
                                <span className="profilename pl_5 pr_5">Aakib Khilji </span>
                                <span className="designation pl_5 pr_5">( Flutter Developer )</span>
                            </div>
                          
                            <div class="custom-select-activity">
                            <select>
                                <option value="0">Edit</option>
                                <option value="1">View</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>                               
                            </div>
                        </div>

                        <div className="edit_report_header mt_15">
                            <div className="">
                                <span className="pl_5 pr_5"><img src={require("../../assets/image/png/pic2.png").default} alt="" /></span>
                                <span className="profilename pl_5 pr_5">Rutvik Jolapara  </span>
                                <span className="designation pl_5 pr_5">( Project Manager )</span>
                            </div>
                          
                            <div class="custom-select-activity">
                            <select>
                                <option value="0">View</option>
                                <option value="1">View</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>                               
                            </div>
                        </div>

                        <div className="edit_report_header mt_15">
                            <div className="">
                                <span className="pl_5 pr_5"><img src={require("../../assets/image/png/pic3.png").default} alt="" /></span>
                                <span className="profilename pl_5 pr_5">Chirag Chauhan </span>
                                <span className="designation pl_5 pr_5">( Sr. Php developer )</span>
                            </div>
                          
                            <div class="custom-select-activity">
                            <select>
                                <option value="0">Edit</option>
                                <option value="1">View</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>                               
                            </div>
                        </div>

                        <div className="edit_report_header mt_15">
                            <div className="">
                                <span className="pl_5 pr_5"><img src={require("../../assets/image/png/pic4.png").default} alt="" /></span>
                                <span className="profilename pl_5 pr_5">Tushar Katariya </span>
                                <span className="designation pl_5 pr_5">( Sr. React developer )</span>
                            </div>
                          
                            <div class="custom-select-activity">
                            <select>
                                <option value="0">View</option>
                                <option value="1">View</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>                               
                            </div>
                        </div>
                    </div>
                    </div> 
                    <div className="edit_report_header pb_20 pt_20 pl_20 pr_20">
                            <div className="">
                                <span className="pl_5 pr_5"><img src={require("../../assets/image/png/pic1.png").default} alt="" /></span>
                                <span className="profilename_client pl_5 pr_5">Uyi Omokaro ( Client )</span>
                            </div>
                          
                            <div class="custom-select-activity">
                            <select>
                                <option value="0">No access</option>
                                <option value="1">View</option>
                                <option value="2">One</option>
                                <option value="3">Two</option>
                            </select>                               
                            </div>
                        </div>
                    </>  
                        : null
                    }
            </Modal>

        </div>

    );
}
