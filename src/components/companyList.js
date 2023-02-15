import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import JoblyApi from "../api";
import CompanyCard from "./CompanyCard";
import { Button } from "reactstrap";
import SearchForm from "./SearchForm"

function CompanyList(){
    const [companies, setCompanies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [noCompFound, setNoCompFound] = useState(false)

    useEffect(
      () => {
        async function GetCompanies(name){
              let companies = await JoblyApi.getAllCompanies(name)
              companies.length !== 0 ? setCompanies(companies) : setNoCompFound(true)
          }
          GetCompanies(searchTerm)
      }, [searchTerm]
    )

    const getSearchTerm = (data) => {
        setSearchTerm(data.searchTerm)
    }
    
    const resetSearch = () => {
        setSearchTerm('')
        setNoCompFound('')
    }

    return (
        <div>
            <SearchForm getSearchTerm={getSearchTerm}/>
            {searchTerm && <Button onClick={resetSearch}>resetSearch</Button>}
            {noCompFound && <h3>Sorry there are no companies that match.</h3>}
            {companies.map(c => (
                <div className="card">
                    <Link to={`company/${c.handle}`}>
                        <CompanyCard company={c}/>
                    </Link>
                </div>
                )
            )}
        </div>
    )
}

export default CompanyList