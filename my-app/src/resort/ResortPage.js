import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ResortCarousel from "./ResortCarousel";
import ResortDescription from "./ResortDescription";

function ResortPage() {
    const {id} = useParams();


    const [resorts, setResorts] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            let request = await fetch("http://localhost:8888/allMemResortProducts")
            let result = await request.json();

            setResorts(result);
            setLoading(false)
        };

        fetcher();
    }, [loading])


    if (resorts){
        for (let resort of resorts) {
            if (resort.id===parseInt(id)){
                return (
                    <>
                        <ResortCarousel data={resort}/>
                        <ResortDescription data={resort}/>
                    </>
                );
            }
        }

    }

}

export default ResortPage;