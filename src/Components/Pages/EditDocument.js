import React, { useState } from "react";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import "../../assets/css/fonts.css"
import {Container} from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Icon } from "../../Utilities/Icon"



export default function EditDocument() {
    const [show, setShow] = useState('')

    return (
        <div className="edit_document_main">
            <main>
            <div className="document_header">
                <div className="d-flex justify-content-center align-items-center"><img className="arrowimg" src={Icon.Backarrow} alt=""/>
                    <h2>Enter document title here <img className="pl_5" src={require("../../assets/image/png/nfteditpic.png").default} alt="" /> <br /> <span className="text-muted">Creating new document</span></h2></div>
                    <div className="d-flex flex-wrap justify-content-center">
                        <div className="document_button mt_10 mb_10">
                            <div>
                                <button className="button1"><svg className="mr_10" xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 12 13" fill="none">
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
                <ReactQuill className="editdocuments"
                            theme="snow"
                            style={{
                                height: "85vh",
                                marginTop: '5px',
                                display: 'flex',
                                flexDirection: 'column'
                            }}

                            value={show}

                            modules={{
                                toolbar: [
                                    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                    ['link','blockquote',"code-block","image"],
                                    ['blockquote',"code-block"],
                                    [{ 'header': '1'}, {'header': '2'}],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'font': [] },{size: []}],
                                    [{ 'color': [] }, { 'background': [] }],
                                    ['clean'],
                                    [{'align': []}],
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
        </div>

    );
}
