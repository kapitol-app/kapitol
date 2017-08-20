import React,{Component} from 'react';
import '../../../stylesheets/css/index.css';
import SearchComponent from '../../shared/search';
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
                    this.state.memberList ?
                        <div></div> :
                        <div className="loading">
                            <div className="page-mid loading-screen">
                                <div className="page-mid loading-icon">
                                    <span className="flag-star">&#9733;</span>
                                    <span className="flag-star">&#9733;</span>
                                    <span className="flag-star">&#9733;</span>
                                    <div className="flag-bar">&nbsp;</div>
                                    <div className="flag-bar">&nbsp;</div>
                                </div>
                            </div>
                        </div>
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
//
// const mapStateToProps = state => ({
//     memberList: state.home.memberListReceived,
//     keywordList: state.home.keywordListReceived
// });

// export default connect (mapStateToProps)(Home);

export default Home;
