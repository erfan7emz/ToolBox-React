import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getCompanies} from '../services/company';
import Pagination from './pagination';
import { paginate } from '../utils/paginate';
import { getSection } from '../services/section';
import ListGroup from './listGroup'
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';

class Tool extends Component {
    state = {   
        companies: [],
        section: [],
        currentPage: 1,
        pageSize: 4,
        currentGroup: null,
        search: ''
    } 

    componentDidMount() {
        const section = [{ name: 'All'}, ...getSection()]
        
        this.setState({ companies: getCompanies(), section });
    }

    handlePageChange = page => {
        this.setState({
            currentPage: page
        });
    }

    handleSectionSelect = section => {
        this.setState({
            currentGroup: section,
            currentPage: 1,
            search: ''
        });
    }

    handleSearch = query => {
        this.setState({
            search: query,
            currentGroup: null,
            currentPage: 1
        })
    }

    render() { 
        let filtered = this.state.companies;

        if(this.state.search) {
            filtered = this.state.companies.filter(c => c.name.toLowerCase().startsWith(this.state.search.toLowerCase()));
        } else if (this.state.currentGroup && this.state.currentGroup._id) {
            filtered = this.state.companies.filter(c => c.section === this.state.currentGroup.name);
        }

        const tools = paginate(filtered, this.state.currentPage, this.state.pageSize);

        const count = filtered.length;

        return (
        <div className='row'>
            <div className='col-3'>
                <ListGroup currentGroup={this.state.currentGroup} items={this.state.section} onItemSelect={this.handleSectionSelect}/>
            </div>
            <div className="col">
                <SearchBar value={this.state.search} onChange={this.handleSearch} />
                <p>Showing {count} companies</p>
                {tools.map(company => (
                            <div key={company._id} className="card" style={{width: '20rem', height: '20rem',display: 'inline-block'}}>
                                <img src="../images/Slack_logo_new.png" className="card-img-top" alt="company logo"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{company.name}</h5>
                                    <p className="card-text">{company.description}</p>
                                    <Link to={`/tool/${company._id}`} className="btn btn-primary">Go somewhere</Link>
                                </div>
                            </div>
                ))}
                <Pagination itemsCount={count} currentPage={this.state.currentPage} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
            </div>
        </div>);
    }
}
 
export default Tool;