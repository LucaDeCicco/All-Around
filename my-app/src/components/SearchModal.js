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
            <Button variant="secondary" onClick={handleShow} style={{backgroundColor:"transparent",  border:"none", padding:"0"}}>
                <SearchIcon></SearchIcon>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Search />
                </Modal.Body>
            </Modal>
        </>
    );
}

export default SearchModal;