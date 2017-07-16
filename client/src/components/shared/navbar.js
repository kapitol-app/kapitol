import React, {Component} from 'react';
import SearchComponent from './search';
import {Link} from 'react-router-dom';

import kapitol_logo from '../../images/kapitol_logo.png';

class NavBar extends Component{
    render(){
        return(
            <div className="navigation-bar">
                <Link to="/"><img src={kapitol_logo} alt="kapitol_logo"/></Link>
                <div className="nav-search-container">
                    <SearchComponent/>
                </div>
            </div>
        )
    }
};

export default NavBar;
