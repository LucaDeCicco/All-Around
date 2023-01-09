import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import axios from "axios";
function AdminPage() {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentUserRoles, setCurrentUserRoles] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setCurrentUser(user);
            setCurrentUserRoles(user.roles)
        }
    }, []);

    const checkIfAdmin = () => {
        for (const currentUserRole of currentUserRoles) {
            if (currentUserRole === "ROLE_ADMIN"){
                return true
            }
        }
        return false
    }

    const sendEmail = async () => {
        let response = await axios.post("http://localhost:8888/util/sendMail");
    }

    const goToAddCircuit = () => {
        window.location.replace("/addCircuit")
    }

    const goToAddResort = () => {
        window.location.replace("/addResort")
    }

    const goToAddHotel = () => {
        window.location.replace("/addHotel")
    }

    if (!checkIfAdmin()){
        return (
            <>
                <b>You don't have the admin role! <EmojiEmotionsIcon/></b>
            </>
        )
    }

    return (
        <>
            <div style={{textAlign:"center"}}>
                <h1>Admin Page</h1>
                <br/>
                <br/>
                <div style={{textAlign:"center"}}>
                    <Button onClick={goToAddCircuit}>Add Circuit!</Button>
                    <div style={{minWidth:"2em", display:"inline-block"}}></div>
                    <Button onClick={goToAddResort}>Add Resort!</Button>
                    <div style={{minWidth:"2em", display:"inline-block"}}></div>
                    <Button onClick={goToAddHotel}>AddHotel!</Button>
                </div>
                <br/>
                <Button variant={"warning"} onClick={sendEmail}>Send Email!</Button>
            </div>
        </>
    )
}

export default AdminPage;