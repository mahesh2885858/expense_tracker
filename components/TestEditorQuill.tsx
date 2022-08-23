import React, { useState } from 'react';
import dynamic from 'next/dynamic';


import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote', "code", "code-block"],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'color': [] }, { 'background': [] }],
        ['link', 'image'],
        ['clean']
    ],
}
function TextQuillEditor() {
    const [value, setValue] = useState('');

    return <ReactQuill theme="snow" value={value} modules={modules} onChange={setValue} />;
}
export default TextQuillEditor