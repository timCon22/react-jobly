import React, { useContext, useState } from "react";
import UserContext from "./Context";
import ApplyButton from "./AppButton";

function JobCard({job}){

    const { currUser, jobApp } = useContext(UserContext)

    const [ response, setResponse ] = useState(false)

    const apply  = async () => {
        let success = await jobApp(currUser.username, job.id)
        success === true ? setResponse(true) : setResponse(success)
    }

    return (
        <div className="card">
            <h4>{job.title}</h4>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity ? job.equity : 'N/A'}</p>
            {response === true || currUser?.applications?.includes(job.id) ? (
                <ApplyButton success={true}/>
            ) : (
                <ApplyButton success={false} apply={apply}/>
            )}
        </div>
    )
}

export default JobCard