import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useEffect, useState} from "react";

function FilterBar(props) {
    const [circuitCountries, setCirtcuitCountries] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetcher = async () => {
            let request = await fetch("http://localhost:8888/util/circuitCountries", {
                headers: {"Access-Control-Allow-Origin": "http://localhost:300"}
            })
            let result = await request.json();
            setCirtcuitCountries(result);
            setLoading(false)
        };
        fetcher();
    }, [loading])

    const updateCountryFilterCriteria =(e)=> {
        props.setCountryFilterCriteria(e.target.valueOf().innerHTML)
    }

    return (
        <Navbar style={{backgroundColor: "rgba(10,14,41,0.1)"}} expand="lg">
            <Container>
                <Navbar.Brand>Advanced Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Destination" id="basic-nav-dropdown">
                            {circuitCountries ? (
                                    circuitCountries.map((country) => (
                                            <NavDropdown.Item key={country} onClick={updateCountryFilterCriteria}>{country}</NavDropdown.Item>
                                        ))
                                  ) : (
                                      <></>
                            )}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default FilterBar;