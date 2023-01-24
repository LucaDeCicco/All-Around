import React, {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import profileBackground from "C:/Codecool/repository/CV-Projects/All_Around/All-Around/my-app/src/images/profileBackground.jpg";
// import profileBackground from "/src/images/profileBackground.jpg";


function ProfilePage() {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [username, setUsername] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [currentUserRoles, setCurrentUserRoles] = useState([]);


    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setCurrentUser(user);
            setCurrentUserRoles(user.roles)
            setEmail(user.email)
            setUsername(user.username)
        }
    }, []);

    if (currentUser===undefined){
        return (
            <>
                <b>You need to logIn!</b>
            </>
        )
    }

    return (
        <div style={{textAlign:"center", backgroundImage: `url(${profileBackground})`, minHeight:"80vh", backgroundRepeat: "repeat-y", backgroundSize:"contain"}}>
            <Card style={{ width: '60%',height:"80vh", margin:"auto", marginBottom:"5em", marginLeft:"40%" }}>
                <Card.Body>
                    <br></br>
                    <Card.Title><h3>Hello, {username}</h3></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">about you</Card.Subtitle>
                    <br></br>
                    <Card.Text>
                        <h5>Your email is : </h5>{email}
                    </Card.Text>
                    <a href={"/changeForgotPassword"} style={{color:"green", textDecoration:"none"}}>Change your password here !</a>
                </Card.Body>
                <Button variant={"secondary"} style={{width:"5em", marginLeft:"47%"}}>Log out</Button>
                <br></br>
            </Card>
        </div>
    )
}

export default ProfilePage;