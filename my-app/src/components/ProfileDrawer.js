import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {useEffect, useState} from "react";
import InfoIcon from '@mui/icons-material/Info';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';


export default function ProfileDrawer() {

    const [currentUser, setCurrentUser] = useState(undefined);
    const [currentUserRoles, setCurrentUserRoles] = useState([]);



    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            setCurrentUser(user);
            setCurrentUserRoles(user.roles)
        }
    }, []);

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const logout = () => {
        localStorage.removeItem("user");
        window.location.replace("/login");
    };

    const login = () => {
        window.location.replace("/login");
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const checkIfAdmin = () => {
        for (const currentUserRole of currentUserRoles) {
            if (currentUserRole === "ROLE_ADMIN"){
                return true
            }
        }
        return false
    }


    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {currentUser ? (
                    <ListItem key={"logout"} disablePadding>
                        <ListItemButton onClick={logout}>
                            <ListItemIcon>
                                <LogoutIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Logout"} />
                        </ListItemButton>
                    </ListItem>
                ) : (
                    <ListItem key={"login"} disablePadding>
                        <ListItemButton onClick={login}>
                            <ListItemIcon>
                                <LoginIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Login"} />
                        </ListItemButton>
                    </ListItem>
                )}

                <Divider />
                {checkIfAdmin() ? (
                    <ListItem>
                        <ListItemButton>
                            <PersonIcon style={{marginRight:"1em"}}/>
                            <ListItemText primary={"Profile"} />
                        </ListItemButton>
                    </ListItem>
                ):(<></>)}

                <Divider />
                <ListItem>
                    <ListItemButton>
                        <InfoIcon style={{marginRight:"1em"}}/>
                        <ListItemText primary={"About Us"} />
                    </ListItemButton>
                </ListItem>

                <Divider />
                {checkIfAdmin() ? (
                    <ListItem>
                        <ListItemButton>
                            <AdminPanelSettingsIcon style={{marginRight:"1em"}}/>
                            <ListItemText primary={"Admin Panel"} />
                        </ListItemButton>
                    </ListItem>
                ):(<></>)}
            </List>

        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><PersonIcon/></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}

                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}