// import {useParams} from "react-router-dom";
// function ResortDescription({data}) {
//     const {id} = useParams();
//     return (
//         <>
//             <div>DESCRIERE Resort{id}</div>
//         </>
//     )
// }
// export default ResortDescription;

import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function HotelDescription({data}) {
    const goWebsite = () => {
        window.location.href = data.url
    }

    const payment = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            let token = user.token
            axios
                .get(`http://localhost:8888/pay/${data.id}`, {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
                .then((r) => {
                    console.log(r);
                    window.location.href = r.data;
                });
        } else {
            console.log("user not find")
        }

    };

    return (
        <Card style={{ width: '70%', margin:"auto", marginTop:"5em", marginBottom:"5em" }}>
            <Card.Body>
                <Card.Title>{data.country}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.productType}</Card.Subtitle>
                <Card.Text>
                    {data.description}
                </Card.Text>
                <Button variant={"primary"} style={{marginLeft:"2em"}} onClick={goWebsite}>Website</Button>
                <Button variant={"success"} style={{marginLeft:"2em"}} onClick={payment}>Book</Button>
            </Card.Body>
        </Card>
    );
}

export default HotelDescription;