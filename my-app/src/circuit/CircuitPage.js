import React, {Component} from "react";
import CircuitCarousel from "./CircuitCarousel";
import Description from "./Description";
import {useParams} from "react-router-dom";

function CircuitPage() {

    const {id} = useParams();
    console.log("carousel")
    console.log(id)
        return (
            <>
                <CircuitCarousel data={id}/>
                <Description data={id}/>
            </>
        );
}

export default CircuitPage;