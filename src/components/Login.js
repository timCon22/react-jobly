import React from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import "./Form.css"


function Login({setTokenAfterLogin}){
    
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = async (data, e) => {
        setTokenAfterLogin(data, data.username)
        navigate('/')
    }

    return (
        <div className="card">
            <div className="form-card-body">
                <h1>Welcome back</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" id="username" autoComplete="username" className="form-control" {...register("username", {required: true})}/>
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" id="password" autoComplete="password" className="form-control" {...register("password", {required: true})}/>
                    <input className="btn btn-primary" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Login