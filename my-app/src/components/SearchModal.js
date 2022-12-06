import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SearchIcon from '@mui/icons-material/Search';
import Search from "./Search";


function SearchModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="secondary" onClick={handleShow}>
                <SearchIcon></SearchIcon>
            </Button>

            <Modal show={show} onHide={handleClose}>
                {/*<Modal.Header closeButton>*/}
                {/*    <Modal.Title>Modal heading</Modal.Title>*/}
                {/*</Modal.Header>*/}
                {/*<Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>*/}
                <Modal.Body>
                    <Search />
                </Modal.Body>
                {/*<Modal.Footer>*/}
                {/*    <Button variant="secondary" onClick={handleClose}>*/}
                {/*        Close*/}
                {/*    </Button>*/}
                {/*    <Button variant="primary" onClick={handleClose}>*/}
                {/*        Save Changes*/}
                {/*    </Button>*/}
                {/*</Modal.Footer>*/}
            </Modal>
        </>
    );
}

export default SearchModal;