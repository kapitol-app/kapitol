import React, {Component} from 'react';
import SearchComponent from './search';
import {Link} from 'react-router-dom';
import { fetchList } from '../../services/services'


import kapitol_logo from '../../images/kapitol_logo.png';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            memberList: []
        }
    }

    componentWillMount(){
        fetchList().then(memberList => {
            this.setState({
                memberList: memberList.data
            })
        })
    }

    render(){
        return(
            <div className="navigation-bar">
                <Link to="/"><img src={kapitol_logo} alt="kapitol_logo"/></Link>
                <div className="nav-search-container">
                    <SearchComponent action={this.props.action} memberList = {this.state.memberList} />
                </div>
            </div>
        )
    }
};

export default NavBar;



