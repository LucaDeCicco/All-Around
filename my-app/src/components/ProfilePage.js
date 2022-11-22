import React, {useEffect, useState} from 'react';

function ProfilePage() {
    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentUserRoles, setCurrentUserRoles] = useState([]);



    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setCurrentUser(user);
            setCurrentUserRoles(user.roles)
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
        <>
            <b>Profile Page</b>
        </>
    )
}

export default ProfilePage;