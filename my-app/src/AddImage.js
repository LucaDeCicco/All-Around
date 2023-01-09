import React, { StrictMode, useState, useEffect } from "react";
import FileBase64 from "react-file-base64";

function AddImage() {
    const [poze, setPoze] = useState([]);

    const upload = async (files) => {
        const req = await fetch("http://localhost:8888/addImageApi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",
            body: JSON.stringify({ images: files.map((f) => f.base64) }),
        });

        if (req.ok) {
            const res = await req.json();
        }
    };

    return (
        <>
            <FileBase64 multiple={true} onDone={upload} />
        </>
    );
};

export default AddImage;
