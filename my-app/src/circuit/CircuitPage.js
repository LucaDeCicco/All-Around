import React from "react";
import CircuitCarousel from "./CircuitCarousel";
import CircuitDescription from "./CircuitDescription";
import {useParams} from "react-router-dom";

function CircuitPage() {

    const {id} = useParams();
        return (
            <>
                <CircuitCarousel data={id}/>
                <CircuitDescription data={id}/>
            </>
        );
}

export default CircuitPage;