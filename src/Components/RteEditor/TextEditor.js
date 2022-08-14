import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {

    const [show, setShow] = useState(`- Changes in APIs as per developer comment == DONE <br>- Update APIs in artist details to solve bug == DONE <br>- Changes in home mix module in admin panel == DONE <br>- Add comments in controllers for better understand == IN PROGRESS <br>`)

    return (
        <>
            <Container fluid>
                <ReactQuill className="shadow-sm"
                            theme="snow"
                            style={{
                                height: 350,
                                marginTop: '1rem',
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
        </>
    );
};

export default TextEditor;