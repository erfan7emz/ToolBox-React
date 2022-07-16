import React, { Component } from 'react'
import { getCompanies } from '../services/company';

class List extends Component {
    state = { 
        companies: getCompanies()
     } 
    render() { 
        return <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Section</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {this.state.companies.map(company => (
                <tr key={company._id + '1'}>
                    <td>{company.name}</td>
                    <td>{company.section}</td>
                    <td>{company.description}</td>
                </tr>))}
            </tbody>
        </table>;
    }
}
 
export default List;