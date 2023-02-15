import React, { useContext } from "react";
import "./NavBar.css"
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap"
import UserContext from "./components/Context";


const NavBar = ({ logoutUser }) => {
    const { storedValue, currUser} = useContext(UserContext)

    return (
        <div>
            <Navbar expand="md">
                    <NavLink exact to="/" className="navbar-brand">
                        <h1>Jobly</h1>
                    </NavLink>
            { storedValue && currUser ? (
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/companies">Companies</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/jobs">Jobs</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/profile">Profile</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={logoutUser} to="/">Logout {currUser.username}</NavLink>
                        </NavItem>
                    </Nav>
            ) : (
                <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink to="/login">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/signup">Signup</NavLink>
                        </NavItem>
                </Nav>
            )}
        </Navbar>
        </div>
    )
}

export default NavBar