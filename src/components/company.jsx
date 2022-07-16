import React from 'react'
import { useParams } from "react-router-dom";
import { getCompanies } from '../services/company';

const companies = getCompanies();

function renderCompanyName(id) {
    return companies.find(x => x._id === id).name;
}

function renderCompanyDescription(id) {
    return companies.find(x => x._id === id).description;
}

const Company = (props) => {
    const { id } = useParams();
    return(
        <div className="card" style={{width: '35rem', height: '35rem',display: 'inline-block'}}>
            <img src="../images/Slack_logo_new.png" className="card-img-top" alt="company logo"></img>
            <div className="card-body">
                <h2 className="card-title">{renderCompanyName(id)}</h2>
                <p className="card-text">{renderCompanyDescription(id)}</p>
            </div>
        </div>
    )
}
export default Company;