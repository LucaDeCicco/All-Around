import React from 'react';
import Card from "react-bootstrap/Card";
import ProfilePageVideo from "./ProfilePageVideo";
import Background from "C:/Codecool/repository/CV-Projects/All_Around/All-Around/my-app/src/images/skyBackground6.jpg";
// import Background from "/src/images/skyBackground6.jpg";

function Info() {

    return (
        <>
            <div style={{backgroundImage: `url(${Background})`, minHeight:"80vh", backgroundRepeat: "repeat-y", backgroundSize:"cover"}}>
                <br></br>
            <ProfilePageVideo />
            <div style={{textAlign: "center"}}>
                <Card style={{ width: '70%', margin:"auto", marginTop:"2em", marginBottom:"5em", backgroundColor:"rgb(206, 212, 218)" }}>
                    <Card.Body>
                        <Card.Title>About Us</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">info page</Card.Subtitle>
                        <br></br>
                        <Card.Text>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
                <br></br>
            </div>
        </>
    )
}

export default Info;