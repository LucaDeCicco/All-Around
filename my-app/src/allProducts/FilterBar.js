import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Button from 'react-bootstrap/Button';

function FilterBar(props) {
    const {page} = useParams();
    const [circuitCountries, setCircuitCountries] = useState(null);
    const [titleOfDestination, setTitleOfDestination] = useState("Destination");
    const [titleOfType, setTitleOfType] = useState("Type");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            let request = await fetch("http://localhost:8888/util/filterCountries", {
                headers: {"Access-Control-Allow-Origin": "http://localhost:300"}
            })
            let result = await request.json();
            setCircuitCountries(result);
            setLoading(false)
        };
        fetcher();
    }, [loading])

    const updateCountryFilterCriteria =(e)=> {
        props.setCountryFilterCriteria(e.target.valueOf().innerHTML)
        setTitleOfDestination(e.target.valueOf().innerHTML)
    }

    const updateTypeFilterCriteria =(e)=> {
        props.setTypeFilterCriteria(e.target.valueOf().innerHTML)
        setTitleOfType(e.target.valueOf().innerHTML)
    }

    const removeFilters =()=> {
        window.location.replace("/holidays")
    }

    const applyFilters =()=> {
        if (props.filters===2 || props.filters===1) {
            props.setFilters(3);
        }
        else {
            props.setFilters(2);
        }
    }

    return (
        <Navbar style={{backgroundColor: "rgba(10,14,41,0.1)"}} expand="lg">
            <Container>
                <Navbar.Brand>Advanced Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title={titleOfType} id="basic-nav-dropdown">
                            <NavDropdown.Item key={"circuit"} onClick={updateTypeFilterCriteria}>Circuit</NavDropdown.Item>
                            <NavDropdown.Item key={"resort"} onClick={updateTypeFilterCriteria}>Resort</NavDropdown.Item>
                            <NavDropdown.Item key={"hotel"} onClick={updateTypeFilterCriteria}>Hotel</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={titleOfDestination} id="basic-nav-dropdown">
                            {circuitCountries ? (
                                    circuitCountries.map((country) => (
                                            <NavDropdown.Item key={country} onClick={updateCountryFilterCriteria}>{country}</NavDropdown.Item>
                                        ))
                                  ) : (
                                      <></>
                            )}
                        </NavDropdown>
                        <div style={{minWidth:"1em"}}></div>
                        <Button variant="success" onClick={applyFilters}>apply filters</Button>
                        <div style={{minWidth:"1em"}}></div>
                        {props.filters>1 ? (
                            <Button variant="light" onClick={removeFilters}>remove filters</Button>
                        ) : (
                            <></>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default FilterBar;