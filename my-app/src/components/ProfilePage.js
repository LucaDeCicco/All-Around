import React, {useEffect, useState} from 'react';
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import profileBackground from "C:/Codecool/repository/ADVANCED/weekpair2/el-proyecte-grande-sprint-2-java-LucaDeCicco/my-app/src/images/profileBackground.jpg";


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

    // const checkIfAdmin = () => {
    //     for (const currentUserRole of currentUserRoles) {
    //         if (currentUserRole === "ROLE_ADMIN"){
    //             return true
    //         }
    //     }
    //     return false
    // }

    if (currentUser===undefined){
        return (
            <>
                <b>You need to logIn!</b>
            </>
        )
    }


    return (


        <div style={{textAlign:"center", backgroundImage: `url(${profileBackground})`, minHeight:"80vh", backgroundRepeat: "repeat-y", backgroundSize:"contain"}}>
            {/*<h1><b>Profile Page</b></h1>*/}
            {/*<br></br>*/}
            {/*<br></br>*/}

            <Card style={{ width: '60%',height:"80vh", margin:"auto", marginBottom:"5em", marginLeft:"40%" }}>
                <Card.Body>
                    <br></br>
                    <Card.Title><h3>Hello, {username}</h3></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">about you</Card.Subtitle>
                    <br></br>
                    <Card.Text>
                        <h5>Your email is : </h5>{email}
                        {/*{data.description}*/}
                    </Card.Text>
                    {/*<Card.Link href="#">Card Link</Card.Link>*/}
                    {/*<Card.Link href="/changeForgotPassword"><p style={{color:"green"}}>Change your password here !</p></Card.Link>*/}
                    <a href={"/changeForgotPassword"} style={{color:"green", textDecoration:"none"}}>Change your password here !</a>
                </Card.Body>
                <Button variant={"secondary"} style={{width:"5em", marginLeft:"47%"}}>Log out</Button>
                <br></br>
            </Card>
        </div>
    )
}

export default ProfilePage;