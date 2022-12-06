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

function ResortDescription({data}) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card style={{ width: '70%', margin:"auto", marginTop:"5em", marginBottom:"5em" }}>
            <Card.Body>
                <Card.Title>{data.country}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{data.productType}</Card.Subtitle>
                <Card.Text>
                    {data.description}
                </Card.Text>
                {/*<Card.Link href="#">View itinerary</Card.Link>*/}
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
                            {/*<Button variant="primary">Understood</Button>*/}
                        </Modal.Footer>
                    </Modal>
                </>
                {/*<Card.Link href="#">Pay</Card.Link>*/}
                <Button variant={"success"} style={{marginLeft:"2em"}}>Book</Button>
            </Card.Body>
        </Card>
    );
}

export default ResortDescription;