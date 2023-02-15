import React, { useState, useEffect } from "react";
import JoblyApi from "../api";
import JobCard from "./JobCard";
import SearchForm from "./SearchForm"
import { Button } from "reactstrap";

function JobList(){
    const [jobs, setJobs] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [noJobFound, setNoJobFound] = useState(false)

    useEffect(
      () => {
        async function GetJobs(title){
              let jobs = await JoblyApi.getAllJobs(title)
              jobs.length !== 0 ? setJobs(jobs) : setNoJobFound(true)
          }
          GetJobs(searchTerm)
      }, [searchTerm]
    )

    const getSearchTerm = (data) => {
        setSearchTerm(data.searchTerm)
    }
    
    const resetSearch = () => {
        setSearchTerm('')
        setNoJobFound('')
    }

    return (
        <div>
            <SearchForm getSearchTerm={getSearchTerm}/>
            {searchTerm && <Button onClick={resetSearch}>Reset Search</Button>}
            {noJobFound && <h3>Sorry there are no jobs that match.</h3>}
            {jobs.map( j => <JobCard job={j} key={j.id}/> )}
        </div>
    )
}

export default JobList