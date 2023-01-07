import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import ResortCarousel from "./ResortCarousel";
import ResortDescription from "./ResortDescription";

function ResortPage() {
    const {id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user){
                let token = user.token
                let request = await fetch(`http://localhost:8888/getProductById/${id}`,{
                    headers: {Authorization: 'Bearer ' + token}
                })
                let result = await request.json();
                setProduct(result);
                setLoading(false)
            }
        };
        fetcher();
    }, [loading])

    if (product){
                return (
                    <div style={{textAlign:"center"}}>
                        <ResortCarousel data={product}/>
                        <ResortDescription data={product}/>
                    </div>
                );
    }
}

export default ResortPage;