import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CompanyList from "./components/companyList";
import JobList from "./components/jobList";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import CompanyDetails from "./components/companyDetail";


function Routers({ setTokenAfterLogin, setTokenAfterRegister, editProfile }){

    return (
        <Routes>
            <Route
                exact
                path="/"
                element={
                    <Home/>
                }
            />
            <Route
                exact
                path="/companies"
                element={
                    <CompanyList/>
                }
            />
            <Route
                exact
                path="/companies/company/:handle"
                element={
                    <CompanyDetails/>
                }
            />
            <Route
                exact
                path="/jobs"
                element={
                    <JobList/>
                }
            />
            <Route
                exact
                path="/login"
                element={
                    <Login setTokenAfterLogin={setTokenAfterLogin}/>
                }
            />
            <Route
                exact
                path="/signup"
                element={
                    <Signup setTokenAfterRegister={setTokenAfterRegister}/>
                }
            />
            <Route
                exact
                path="/profile"
                element={
                    <Profile editProfile={editProfile}/>
                }
            />
        </Routes>
    )
}

export default Routers