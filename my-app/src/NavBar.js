import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from "./images/Logo.png";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import ProfileDrawer from "./components/ProfileDrawer";
import {useEffect, useState} from "react";
import * as React from "react";


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
            {/*<Navbar style={{backgroundColor:'#B7C8B5'}}>*/}
            <Navbar bg='dark'>
                <Container>
                    <img src={Logo} width={80} height={64} alt={""}/>
                    &nbsp;
                    &nbsp;
                    <Navbar.Brand href="/">All Around</Navbar.Brand>
                    <Nav className="me-auto">
                    <NavLink style={{ textDecoration: 'none' }} to="/circuits"><Button variant="text" color={"warning"}><b>CIRCUITS</b></Button></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to="/resorts"><Button variant="text" color={"secondary"}><b>RESORTS</b></Button></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to="/hotels"><Button variant="text" color={"info"}><b>HOTELS</b></Button></NavLink>
                    </Nav>
                    <ProfileDrawer/>
                    {currentUser ? (
                        <b style={{color:"white"}}>{currentUser.username}</b>
                    ) : (
                        <a href={"/login"} style={{textDecoration: "none"}}><b style={{color:"white"}}>Login</b></a>
                    )}
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default NavBar;