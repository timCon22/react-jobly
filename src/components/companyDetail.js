import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import JoblyApi from "../api";
import JobCard from "./JobCard";

function CompanyDetails(){

    const { handle } = useParams() 
    const [companyHandle, setCompanyHandle] = useState([])
    const [jobs, setJobs] = useState([])

    useEffect(
      () => {
        async function GetCompany(handle){
              let company = await JoblyApi.getCompany(handle)
              setCompanyHandle(company)
              setJobs(company.jobs)
            }

            GetCompany(handle)
    }, [handle])

    return (
        <div>
            <h1>{companyHandle.name}</h1>
            {jobs.map(j => (
                    <JobCard job={j} key={j}/>
                )
            )}
        </div>
    )
}

export default CompanyDetails