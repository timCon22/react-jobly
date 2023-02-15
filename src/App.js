import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar';
import JoblyApi from './api';
import UserContext from './components/Context';
import useLocalStorage from './hooks/useLocalStorage'
import 'bootstrap/dist/css/bootstrap.css'


function App() {

  const [storedValue, setStoredValue] = useLocalStorage()
  const [applications, setApplications] = useState()
  const [currUser, setUser] = useState()


  useEffect( () => {
       async function getUserByUsername(username) {
          JoblyApi.token = storedValue.token
          let user = await JoblyApi.getUserByUsername(username)
          setUser(user)
          let apps = user.applications
          setApplications([ ...apps ])
      }
      storedValue ? getUserByUsername(storedValue.username) : console.log("Logged out")
    }, [storedValue]
  )

  async function setTokenAfterRegister(data, username){
    let response = await JoblyApi.registerUser(data)
    if(response.token){
        setStoredValue({ token: response.token, username: username })
        return true
    } else {
      return response
    }
  }

  async function setTokenAfterLogin(data, username){
    let response = await JoblyApi.loginUser(data)
    if(response.token){
      setStoredValue({ token: response.token, username: username })
      return true
    } else {
      return response
    }
  }

  const logoutUser = () => {
    setStoredValue(null)
  }

  const editProfile = async (data) => {
      let response = await JoblyApi.patchUser(storedValue.username, data)
      if (response.user){
        setStoredValue({ token: storedValue.token, username: response.user.username })
        return true

      } else {
        return response
      }
  }

  const jobApp = async (username, jobId) => {
      let response = await JoblyApi.applyToJob(username, jobId)
      return response.applied ? true : false
  }

  return (
    
    <div className="App">
      <UserContext.Provider value={{ storedValue, currUser, jobApp, applications }}>
        <BrowserRouter>      
            <NavBar logoutUser={logoutUser}/>
            <Routes editProfile={editProfile} setTokenAfterRegister={setTokenAfterRegister} setTokenAfterLogin={setTokenAfterLogin}/>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
