import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from "react";
import {useState} from 'react';
import FileBase64 from "react-file-base64";

function AddCircuit() {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    // ADD IMAGES //TODO
    const [itinerary, setItinerary] = useState('');
    const [remainingTickets, setTickets] = useState('');
    // DEPARTURE DATE //TODO
    const [days, setDays] = useState('');
    // IMPLEMENT ADD COUNTRIES //TODO

    const handleChangeDescription = event => {
        setDescription(event.target.value);
        console.log('description:', description);
    };
    const handleChangePrice = event => {
        setPrice(event.target.value);
        console.log('price:', price);
    };
    const handleChangeItinerary = event => {
        setItinerary(event.target.value);
        console.log('itinerary:', itinerary);
    };
    const handleChangeTickets = event => {
        setTickets(event.target.value);
        console.log('tickets:', remainingTickets);
    };
    const handleChangeDays = event => {
        setDays(event.target.value);
        console.log('days:', days);
    };

    const uploadCircuits = async () => {
        console.log("Circuit Files")
        console.log(description)
        console.log(price)
        console.log(itinerary)
        console.log(remainingTickets)
        console.log(days)
        const req = await fetch("http://localhost:8888/addCircuitApi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",
            body: JSON.stringify({description,price,itinerary,remainingTickets,days}),
        });

        if (req.ok) {
            const res = await req.json();
            console.log("uploaded files");
        }
    }

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
        <Form>
            <Form.Group className="mb-3" name="description" onChange={handleChangeDescription} value={description}>
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder="description..." />
            </Form.Group>
            <Form.Group className="mb-3" name="price" onChange={handleChangePrice} value={price}>
                <Form.Label>Price</Form.Label>
                <Form.Control placeholder="100$" />
            </Form.Group>

            {/*<label>Add Images</label>*/}
            {/*<FileBase64 multiple={true} onDone={upload} />*/} //TODO

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