import React, {useEffect, useState} from "react";
import CircuitCarousel from "./CircuitCarousel";
import CircuitDescription from "./CircuitDescription";
import {useParams} from "react-router-dom";

function CircuitPage() {
    const {id} = useParams();


    const [circuits, setCircuits] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user){
                let token = user.token
                let request = await fetch("http://localhost:8888/allMemCircuitProducts",{
                    headers: {Authorization: 'Bearer ' + token}
                })
                let result = await request.json();
                setCircuits(result);
                setLoading(false)
            }
        };

        fetcher();
    }, [loading])


        if (circuits){
            for (let circuit of circuits) {
                if (circuit.id===parseInt(id)){
                    return (
                        <div style={{textAlign:"center"}}>
                            <CircuitCarousel data={circuit}/>
                            <CircuitDescription data={circuit}/>
                        </div>
                    );
                }
            }

        }

}

export default CircuitPage;