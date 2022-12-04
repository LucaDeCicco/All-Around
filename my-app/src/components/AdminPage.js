import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
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


    if (!checkIfAdmin()){
        return (
            <>
                <b>You don't have the admin role! <EmojiEmotionsIcon/></b>
            </>
        )
    }


    return (
        <>
            <b>Admin Page</b>
            {/*<br/>*/}
            {/*<NavLink to={"/addCircuit"}>Add Circuit</NavLink>*/}
            <br/>
            <a href={"/addCircuit"}>Add Circuit</a><br></br>
            <button onClick={sendEmail}>Send Email!</button>
        </>
    )
}

export default AdminPage;