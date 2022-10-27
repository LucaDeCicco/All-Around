import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useEffect} from "react";
import {useState} from 'react';
import FileBase64 from "react-file-base64";

import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import FormControl from "@mui/material/FormControl";

function AddHotel() {
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

    useEffect(() => {
        const fetcher = async () => {
            let request = await fetch("http://localhost:8888/util/countries")
            let result = await request.json();

            setAllCountries(result);
            setLoading(false)
        };

        fetcher();
    }, [loading])


    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [images, setImages] = useState([]);
    const [location, setLocation] = useState('');
    const [country, setCountry] = useState('');
    const [url, setUrl] = useState('');


    const handleChangeDescription = event => {
        setDescription(event.target.value);
    };
    const handleChangePrice = event => {
        setPrice(event.target.value);
    };
    const handleChangeLocation = event => {
        setLocation(event.target.value);
    };
    const handleChangeUrl = event => {
        setUrl(event.target.value);
    };
    const uploadImages = (files) => {
        for (let file of files) {
            images.push(file.base64);
        }
    }
    const handleChangeSelectedCountries = (event) => {
        setCountry(event.target.value);
    };

    const uploadHotels = async () => {
        const req = await fetch("http://localhost:8888/addHotelApi", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            mode: "no-cors",
            body: JSON.stringify({description,price,images,country,location,url}),
        });

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

                <Form.Group className="mb-3" name="location" onChange={handleChangeLocation} value={location}>
                    <Form.Label>Location</Form.Label>
                    <Form.Control placeholder="location..." />
                </Form.Group>

                <br/>
                <Form.Group className="mb-3" name="url" onChange={handleChangeUrl} value={url}>
                    <Form.Label>URL</Form.Label>
                    <Form.Control placeholder="url..." />
                </Form.Group>
                <br/>

                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                    <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        value={country}
                        onChange={handleChangeSelectedCountries}
                        input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected}
                        MenuProps={MenuProps}
                    >
                        {allCountries.map((iterationCountry) => (
                            <MenuItem key={iterationCountry} value={iterationCountry}>
                                <Checkbox checked={country.indexOf(iterationCountry) > -1} />
                                <ListItemText primary={iterationCountry} />
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <br/>
                <br/>
                <br/>


                <Button variant="primary" onClick={uploadHotels}>
                    Submit
                </Button>
            </Form>
        );
    }

}

export default AddHotel;