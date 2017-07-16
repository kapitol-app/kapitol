import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SearchBox extends Component{
    render(){
        return(
            <div id="search-box">
                <ul id='search-options' className="no-padding no-margin text-left list-no-styles">
                    {this.props.searchResults.filter(word => {
                        if(word.includes(this.props.value)){
                            return word;
                        }
                    }).map(word =>{
                        return (
                            <Link key={word} to={`/${this.props.searchType}/${word}`}>
                                <li>{word}</li>
                            </Link>)
                    })}
                </ul>
            </div>
        )
    }
}

export default SearchBox;
