import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";
import {useState} from 'react';
import FileBase64 from "react-file-base64";

function AddCircuit() {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [itinerary, setItinerary] = useState('');
    const [remainingTickets, setTickets] = useState('');
    // DEPARTURE DATE //TODO
    const [days, setDays] = useState('');
    // IMPLEMENT ADD COUNTRIES //TODO


    const handleChangeDescription = event => {
        setDescription(event.target.value);
    };
    const handleChangePrice = event => {
        setPrice(event.target.value);
    };
    const handleChangeItinerary = event => {
        setItinerary(event.target.value);
    };
    const handleChangeTickets = event => {
        setTickets(event.target.value);
    };
    const handleChangeDays = event => {
        setDays(event.target.value);
    };

    const uploadImages = (files) => {
        for (let file of files) {
            images.push(file.base64);
        }
    }

    const uploadCircuits = async () => {
        console.log("Circuit Files")
        console.log(description)
        console.log(price)
        console.log(itinerary)
        console.log(remainingTickets)
        console.log(days)
        console.log(images)
        const req = await fetch("http://localhost:8888/addCircuitApi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",
            body: JSON.stringify({description,price,itinerary,remainingTickets,days,images}),
        });

        if (req.ok) {
            const res = await req.json();
            console.log("uploaded files");
        }
    }


    return (
        <Form>
            <Form.Group className="mb-3" name="description" onChange={handleChangeDescription} value={description}>
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="description..." />
            </Form.Group>
            <Form.Group className="mb-3" name="price" onChange={handleChangePrice} value={price}>
                <Form.Label>Price</Form.Label>
                <Form.Control placeholder="100$" />
            </Form.Group>

            <label>Add Images</label>
            <FileBase64 multiple={true} onDone={uploadImages} />

            <Form.Group className="mb-3" name="itinerary" onChange={handleChangeItinerary} value={itinerary}>
                <Form.Label>Itinerary</Form.Label>
                <Form.Control placeholder="itinerary..." />
            </Form.Group>
            <Form.Group className="mb-3" name="tickets" onChange={handleChangeTickets} value={remainingTickets}>
                <Form.Label>Remaining Tickets:</Form.Label>
                <Form.Control placeholder="50" />
            </Form.Group>
            {/*<Form.Group className="mb-3" name="departureDate" onChange={handleChange} value={description}>*/}
            {/*    <Form.Label>Departure Date</Form.Label> //TODO*/}
            {/*    <Form.Control placeholder="" />*/}
            {/*</Form.Group>*/}
            <Form.Group className="mb-3" name="days" onChange={handleChangeDays} value={days}>
                <Form.Label>Days</Form.Label>
                <Form.Control placeholder="10" />
            </Form.Group>
            {/*//IMPLEMENT ADD COUNTRIES */} //TODO

            <br/>
            <br/>
            <br/>


            <Button variant="primary" onClick={uploadCircuits}>
                Submit
            </Button>
        </Form>
    );
}

export default AddCircuit;