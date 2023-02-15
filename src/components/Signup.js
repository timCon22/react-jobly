import React from "react";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import "./Form.css"


function Signup({setTokenAfterRegister}){

    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = async (data, e) => {
        setTokenAfterRegister(data, data.username)
        navigate('/')
    }

    return (
        <div className="card">
            <div className="card-body">
                <h1>Sign up!</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)} action="/">
                    <label htmlFor="username"><b>Username</b></label>
                    <input type="text" id="username" autoComplete="username" className="form-control" {...register("username", {required: true})}/>
                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" id="password" autoComplete="password" className="form-control" {...register("password", {required: true})}/>
                    <label htmlFor="Fname"><b>First Name</b></label>
                    <input type="text" id="Fname" className="form-control" {...register("firstName", {required: true})}/>
                    <label htmlFor="Lname"><b>Last Name</b></label>
                    <input type="text" id="Lname" className="form-control" {...register("lastName", {required: true})}/>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" id="email" className="form-control" {...register("email", {required: true})}/>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default Signup