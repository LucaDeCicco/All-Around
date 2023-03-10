import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from "./images/Logo.png";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import ProfileDrawer from "./components/ProfileDrawer";
import {useEffect, useState} from "react";
import * as React from "react";
import SearchModal from "./components/SearchModal";


function NavBar() {
    const [currentUser, setCurrentUser] = useState(undefined);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    return (
        <>
            <Navbar style={{background: 'linear-gradient(to right, lightblue, pink)'}}>
                <Container>
                    <img src={Logo} width={80} height={64} alt={""}/>
                    &nbsp;
                    &nbsp;
                    <Navbar.Brand href="/">All Around</Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink style={{ textDecoration: 'none' }} to="/holidays"><Button variant="text"><b style={{color:'white'}}>Holidays</b></Button></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/circuits"><Button variant="text"><b style={{color:'#c07e27'}}>CIRCUITS</b></Button></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/resorts"><Button variant="text" color={"secondary"}><b style={{color:'#c07e27'}}>RESORTS</b></Button></NavLink>
                        <NavLink style={{ textDecoration: 'none' }} to="/hotels"><Button variant="text" color={"info"}><b style={{color:'#c07e27'}}>HOTELS</b></Button></NavLink>
                    </Nav>
                    <SearchModal />
                    <div style={{minWidth:"5em"}}></div>
                    <ProfileDrawer/>
                    {currentUser ? (
                        <b style={{color:"black", marginLeft:"1em"}}>{currentUser.username}</b>
                    ) : (
                        <a href={"/login"} style={{textDecoration: "none", marginLeft:"1em"}}><b style={{color:"black"}}>Login</b></a>
                    )}
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;