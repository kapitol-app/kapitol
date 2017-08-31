import React, {Component} from 'react';
import NavBar from '../../shared/navbar';
import FooterComponent from '../../shared/footer';
import legislation from '../../../files/legislation.json';
import {capitalize_words} from '../../../helpers/shared/index';

class Legislation extends Component{

    constructor(props){
        super(props);
        this.state = {
            session: '115th',
            keyword: '',
            k_definition: '',
            keyword_icon: '',
        }
    }

    componentWillMount(){
        this.setState({
            keyword: this.props.match.params.keyword.toLowerCase()
        });
    }

    componentDidMount(){
        document.title = "Legislation | Kapitol";

        switch (this.state.keyword) {
            case 'gun control':
                this.setState({
                   k_definition: 'gun control definition',
                    keyword_icon: 'gun-control-icon.png'
                });
                break;
            case 'gun rights':
                this.setState({
                    k_definition: 'Gun Rights include the right to keep and bear arms, to use firearms in self-defense, and to produce and sell firearms and ammunition. ',
                    keyword_icon: 'gun-rights-icon.png'
                });
                break;
            case 'birth control':
                this.setState({
                    k_definition: 'birth control definition',
                    keyword_icon: 'birth-control-icon.png'
                })
        }
    }

    render(){
        return(
            <div>
                <NavBar/>
                <div className="legi-header">
                    <h2>{this.state.session} Congressional Voting</h2>
                    <img id="keyword-image" src={
                        !this.state.keyword_icon ? '' : require(`../../../images/${this.state.keyword_icon}`)
                    } alt={this.state.keyword}/>
                    <h2>{capitalize_words(this.state.keyword)}</h2>
                    <h4 id="keyword-definition">{this.state.k_definition}</h4>
                </div>
            </div>
        );
    }
};

export default Legislation;
