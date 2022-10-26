import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useEffect} from "react";
import {useState} from 'react';
import FileBase64 from "react-file-base64";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MultipleSelectCheckmarks from "../components/MultipleSelect";

function AddCircuit() {

    const [countries, setCountries] = useState(null);
    const [loading, setLoading] = useState(false);

    console.log("CEVA")
    useEffect(() => {
        const fetcher = async () => {
            console.log("FETCH")
            let request = await fetch("http://localhost:8888/util/countries")
            let result = await request.json();
            console.log("RESULT OF FETCH")
            console.log(result)

            setCountries(result);
            setLoading(false)
        };

        fetcher();
    }, [loading])


    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [itinerary, setItinerary] = useState('');
    const [remainingTickets, setTickets] = useState('');
    // DEPARTURE DATE //TODO
    const [value, setValue] = useState(null);


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
    if (countries){
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
                <br/>
                <br/>

                <Form.Group className="mb-3" name="itinerary" onChange={handleChangeItinerary} value={itinerary}>
                    <Form.Label>Itinerary</Form.Label>
                    <Form.Control placeholder="itinerary..." />
                </Form.Group>
                <Form.Group className="mb-3" name="tickets" onChange={handleChangeTickets} value={remainingTickets}>
                    <Form.Label>Remaining Tickets:</Form.Label>
                    <Form.Control placeholder="50" />
                </Form.Group>

                <label>Departure Date</label><br/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Basic example"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
                <br/>
                <br/>

                <Form.Group className="mb-3" name="days" onChange={handleChangeDays} value={days}>
                    <Form.Label>Days</Form.Label>
                    <Form.Control placeholder="10" />
                </Form.Group>
                {/*//IMPLEMENT ADD COUNTRIES */} //TODO
                <MultipleSelectCheckmarks data={countries}/>

                <br/>
                <br/>
                <br/>


                <Button variant="primary" onClick={uploadCircuits}>
                    Submit
                </Button>
            </Form>
        );
    }

}

export default AddCircuit;