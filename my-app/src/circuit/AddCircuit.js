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
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";

function AddCircuit() {

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };


    const [allCountries, setAllCountries] = useState(null);
    const [loading, setLoading] = useState(false);

    let headers = new Headers();



    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    // headers.append('Access-Control-Allow-Credentials', 'true');



    useEffect(() => {

        const fetcher = async () => {
            let request = await fetch("http://localhost:8888/util/countries", {
                // mode: "no-cors", /*daca pun asta vine null*/
                // method: "GET",
                headers: {"Access-Control-Allow-Origin": "http://localhost:300"}

            })
            let result = await request.json();

            setAllCountries(result);
            setLoading(false)
        };

        fetcher();
    }, [loading])


    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [itinerary, setItinerary] = useState('');
    const [remainingTickets, setTickets] = useState('');
    const [departureDate, setDepartureDate] = useState(null);
    const [days, setDays] = useState('');
    const [countries, setSelectedCountries] = useState([]);


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
    const handleChangeSelectedCountries = (event) => {
        const {
            target: { value },
        } = event;
        setSelectedCountries(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const uploadCircuits = async () => {
        console.log("INAINTE DE FETCH")
        const req = await fetch("http://localhost:8888/add-circuit", {
            method: "POST",
            headers: {"Access-Control-Allow-Origin": "http://localhost:300"},
            // headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "http://localhost:300" },
            // mode: "no-cors",
            body: JSON.stringify({description,price,itinerary,remainingTickets,days,images,countries, departureDate}),
        });
        console.log("CONTROL")
        console.log(req)
        if (req.ok) {
            const res = await req.json();
            console.log("uploaded files");
        }
    }
    if (allCountries){
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
                        // value = {(() => {
                        //     let dates = "ceva";
                        //     if (departureDate.length>0){
                        //         dates = "";
                        //         for (const departureDateElement of departureDate) {
                        //             dates+=departureDateElement.toString();
                        //             console.log("DATES")
                        //             console.log(dates)
                        //         }
                        //     }
                        //     return dates;
                        // })()}
                        value={departureDate}
                        // multiple
                        onChange={(newValue) => {
                            setDepartureDate(newValue);
                            // departureDate.push(newValue)
                            console.log(departureDate)
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
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={countries}
                        onChange={handleChangeSelectedCountries}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                        MenuProps={MenuProps}
                    >
                        {allCountries.map((country) => (
                            <MenuItem key={country} value={country}>
                                <Checkbox checked={countries.indexOf(country) > -1} />
                                <ListItemText primary={country} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

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