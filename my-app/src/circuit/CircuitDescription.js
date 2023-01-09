import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";

function CircuitDescription({data}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let countriesData = data.countries
    let countries = ""

    for (const country of countriesData) {
        countries += country
        countries += " "
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
                    window.location.href = r.data;
                });
        }
    };

    return (
        <Card style={{ width: '70%', margin:"auto", marginTop:"5em", marginBottom:"5em" }}>
            <Card.Body>
                <Card.Title>{countries}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.productType}</Card.Subtitle>
                <Card.Text>
                    {data.description}
                </Card.Text>
                <>
                    <Button variant="primary" onClick={handleShow} style={{marginRight:"2em"}}>
                        View itinerary
                    </Button>

                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Itinerary</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {data.itinerary}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                <Button variant={"success"} style={{marginLeft:"2em"}} onClick={payment}>Book</Button>
            </Card.Body>
        </Card>
    );
}

export default CircuitDescription;