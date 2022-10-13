import {Container, Nav, Navbar} from "react-bootstrap";


function NavBar() {
    return (
        <>
            <Navbar bg="success" variant="dark">
                <Container>
                    <Navbar.Brand href="/">All Around</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/circuits">Circuits</Nav.Link>
                        <Nav.Link href="/resorts">Resorts</Nav.Link>
                        <Nav.Link href="#Features">Features</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
}

export default NavBar;