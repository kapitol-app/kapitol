import React,{Component} from 'react';
import '../../../stylesheets/css/index.css';
import SearchComponent from '../../shared/search';
import FooterComponent from '../../shared/footer';

let kapitol_logo = require('../../../images/kapitol_logo.png');


class Home extends Component{

    componentDidMount(){
        document.title = "Home | Kapitol"
    }

    render(){
        return(
            <div id='fp-container'>
                <div className="page-mid">
                    <img src={kapitol_logo} alt="Kapitol logo"/>
                    <div id="fp-search">
                        <SearchComponent/>
                    </div>
                </div>
                <FooterComponent/>
            </div>

        )
    }
}


export default Home;
