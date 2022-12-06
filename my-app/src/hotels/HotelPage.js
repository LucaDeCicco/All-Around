import React, {useEffect, useState} from "react";

import {useParams} from "react-router-dom";
import HotelCarousel from "./HotelCarousel";
import HotelDescription from "./HotelDescription";

function HotelPage() {
    const {id} = useParams();


    const [hotels, setHotels] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user){
                let token = user.token
                let request = await fetch("http://localhost:8888/allMemHotelProducts",{
                    headers: {Authorization: 'Bearer ' + token}
                })
                let result = await request.json();
                setHotels(result);
                setLoading(false)
            }
        };

        fetcher();
    }, [loading])


    if (hotels){
        for (let hotel of hotels) {
            if (hotel.id===parseInt(id)){
                return (
                    <div style={{textAlign:"center"}}>
                        <HotelCarousel data={hotel}/>
                        <HotelDescription data={hotel}/>
                    </div>
                );
            }
        }

    }

}

export default HotelPage;