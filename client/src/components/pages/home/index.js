import React,{Component} from 'react';
import '../../../stylesheets/css/index.css';
import SearchComponent from '../../shared/search';
import LoadingComponent from '../../shared/loading-icon';
import FooterComponent from '../../shared/footer';
import { fetchList } from '../../../services/services';


let kapitol_logo = require('../../../images/kapitol_logo.png');


class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            memberList: []
        }
    }

    componentWillMount(){
    }

    componentDidMount(){
        document.title = "Home | Kapitol";
        fetchList().then(memberList => {
            this.setState({
                memberList: memberList.data
            })
        });
    }

    render(){
        return(
            <div id='fp-container'>
                {
                    this.state.memberList.length > 1 ?
                        '' :
                        <LoadingComponent/>
                }
                <div className="page-mid">
                    <img src={kapitol_logo} alt="Kapitol logo"/>
                    <div id="fp-search">
                        <SearchComponent memberList = {this.state.memberList}/>
                    </div>
                </div>
                <FooterComponent/>
            </div>

        )
    }
}

export default Home;
