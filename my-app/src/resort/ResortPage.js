import React from "react";
import ResortCarousel from "./ResortCarousel";
import Description from "./ResortDescription";
import {useParams} from "react-router-dom";

function ResortPage() {

    const {id} = useParams();
    return (
        <>
            <ResortCarousel data={id}/>
            <Description data={id}/>
        </>
    );
}

export default ResortPage;