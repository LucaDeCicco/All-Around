import {Container, Nav, Navbar} from "react-bootstrap";
import Logo from "./images/Logo.png";
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';



function NavBar() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <img src={Logo} width={80} height={64} alt={""}/>
                    &nbsp;
                    &nbsp;
                    <Navbar.Brand href="/">All Around</Navbar.Brand>
                    <Nav className="me-auto">
                    <NavLink style={{ textDecoration: 'none' }} to="/circuits"><Button variant="text" color={"warning"}><b>CIRCUITS</b></Button></NavLink>
                        {/* <Nav.Link href="/circuits">Circuits</Nav.Link> */}
                    <NavLink style={{ textDecoration: 'none' }} to="/resorts"><Button variant="text" color={"secondary"}><b>RESORTS</b></Button></NavLink>
                        {/* <Nav.Link href="/resorts">Resorts</Nav.Link> */}
                        {/*<Nav.Link href="#Features">Features</Nav.Link>*/}
                    <NavLink style={{ textDecoration: 'none' }} to="/hotels"><Button variant="text" color={"info"}><b>HOTELS</b></Button></NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default NavBar;