import React, { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
//  npm install react-file-base64
import FileBase64 from "react-file-base64";

function AddImage() {
    const [poze, setPoze] = useState([]);

    // useEffect(() => {                  //TODO
    //     const loadImagesFromDB = async () => {
    //         const req = await fetch("/path/to/images/json"); //  responds with {images: ["img", "img", "etc"] }
    //         if (req.ok) {
    //             const res = await req.json();
    //             setPoze(res.images);
    //         }
    //     };
    //
    //     loadImagesFromDB();
    // });                                //TODO

    const upload = async (files) => {
        console.log("files")
        console.log(files)
        const req = await fetch("http://localhost:8888/addImageApi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",
            body: JSON.stringify({ images: files.map((f) => f.base64) }),
        });

        if (req.ok) {
            const res = await req.json();
            console.log("uploaded files");
        }
    };

    return (
        <>
            {/*{poze.length ? poze.map((p, i) => <img src={p} key={i} />) : null}*/}
            <FileBase64 multiple={true} onDone={upload} />
        </>
    );
};

export default AddImage;

// createRoot(document.getElementById("root")).render(<App />);