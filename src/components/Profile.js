import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "./Context";
import { useNavigate } from "react-router-dom"
import "./Form.css"

function Profile({editProfile}){

    const { currUser } = useContext(UserContext)
    const [response, setResponse] = useState(false)
    const navigate = useNavigate()
    console.log(currUser)

    const { register, handleSubmit, reset } = useForm({
            defaultValues: {
                firstName: `${currUser.firstName}`,
                lastName: `${currUser.lastName}`,
                email: `${currUser.email}`
            }
    })


    const onSubmit = async (data, e) => {
        let success = await editProfile(data)
        if(success === true){
            setResponse(true)
            alert(`Success, changes were made to your account ${currUser.username}!`)
            navigate("/")
        } else {
            setResponse(success)
            reset()
        }
    }

    return (
        <div>
            <div className="card">
            <div className="card-body">
                <form className="form" onSubmit={handleSubmit(onSubmit)} action="/">
                    <label htmlFor="Fname"><b>First Name</b></label>
                    <input type="text" id="Fname" className="form-control" placeholder={currUser.firstName} {...register("firstName", {required: false})}/>
                    <label htmlFor="Lname"><b>Last Name</b></label>
                    <input type="text" id="Lname" className="form-control" placeholder={currUser.lastName} {...register("lastName", {required: false})}/>
                    <label htmlFor="email"><b>Email</b></label>
                    <input type="email" id="email" className="form-control" placeholder={currUser.email} {...register("email", {required: false})}/>
                    <h4>Any Changes made will reflect that on your current profile!</h4>
                    <input className="btn btn-danger" type="submit"/>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Profile