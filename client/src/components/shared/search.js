import React,{Component} from 'react';
import SearchBox from './searchbox';
import '../../stylesheets/css/index.css';
import '../../stylesheets/css/components/App.css'


class SearchComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            placeholderText: 'Enter a member name..',
            searchType: 'members',
            inputValue: '',
            keywordList: [{
                keyword: 'Gun control',
                icon: 'gun-control-icon.png'
            },{
                keyword: 'Birth control',
                icon: 'birth-control-icon.png'
            },{
                keyword: 'A.C.A',
                icon: 'aca-icon.png'
            },{
                keyword: 'Gun rights',
                icon: 'gun-rights-icon.png'
            }]
        };
        this.setPlaceholder = this.setPlaceholder.bind(this);
        this.updateInputValue = this.updateInputValue.bind(this);
    }

    /**
     * FUNCTION TO BE FIRED ON SELECT CHANGE
     * CHECKS TARGET VALUE AND SETS PLACEHOLDER AND SEARCH TYPE STATE
     */

    setPlaceholder(event){
        this.setState({
            inputValue: []
        });
        let target = event.target.value;
        if (target === 'members') {
            this.setState({
                searchType: target,
                placeholderText: 'Enter a member name...',
            })
        } else {
            this.setState({
                placeholderText: 'Enter a keyword..',
                searchType: target
            })
        }

        //CLEAR INPUT BAR
        document.getElementById('search-bar').value = '';
    }

    /**
     * FUNCTION TO BE FIRED ON INPUT CHANGE
     * CHECKS TARGET VALUE AND UPDATES INPUT VALUE STATE
     * USE THIS FUNCTION FOR ALL API VALUE CALLS
     */
    updateInputValue(event){
        //KEEP VARIABLE OF INPUT VALUE
        let target = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
        this.setState({
            inputValue: target
        });
    }


    render(){
        return(
            <div>
                <input id='search-bar' onChange={this.updateInputValue} type="text" placeholder={this.state.placeholderText} className="border-light-gray"/>
                {this.state.inputValue.length === 0 ? '':
                    <SearchBox
                    searchResults={ this.state.searchType === 'members' ? this.props.memberList : this.state.keywordList}
                    value={this.state.inputValue}
                    searchType={this.state.searchType}
                    updateMember = {this.props.action}
                    />
                }
                <div id="fp-selector" className="select-style">
                    <select onChange={this.setPlaceholder} className="dropdown" name="drop-down">
                        <option value="members">Members</option>
                        <option value="legislation">Legislation</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default SearchComponent;
