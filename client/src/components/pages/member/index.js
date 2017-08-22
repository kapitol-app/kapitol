import React, {Component} from "react";
import NavBar from "../../shared/navbar";
import MemberDetails from "./member-details";
import {Chart, Bar} from 'react-chartjs-2';
import MemberTable from './member-table';
import {fetchMember} from '../../../services/services';
import LoadingComponent from '../../shared/loading-icon';
import * as sharedHelpers from "../../../helpers/shared";
import FooterComponent from '../../shared/footer';
import "../../../stylesheets/css/index.css";

class MemberPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            member: []
        }
    }

    /**
     * UPDATE MEMBER HANDLER ON MEMBER PAGE NAVIGATION
     * @param data
     */
  updateMemberHandler = data => {
        this.setState({
            member: []
        });
        setTimeout(() =>{
            this.setState({
                member:data
            })
        }, 500)
  };

    componentWillMount() {
        Chart.defaults.global.legend.display = false;
        Chart.defaults.global.animationSteps = 160;
        Chart.defaults.global.responsive = true;
    }


  componentDidMount() {
      document.title = "Members | Kapitol";
      fetchMember(this.props.match.params.id).then(data =>{
          this.setState({
              member: data
          })
      });
  }

  render() {
      let colors = sharedHelpers.sortColor([.8, -.8, .3, .9, -.9]);
      if (!this.state.member.length) {
          return (
              <LoadingComponent/>
          )
      } else {
          return (
              <div className="mp-container">
                  <NavBar action={this.updateMemberHandler}/>
                  <MemberDetails memberInfo={this.state.member}/>
                  <div className="mp-table">
                      <MemberTable className="mp-table"/>
                  </div>
                  <div className="mp-issues">
                      <div className="issues-description">
                          <h3>Member Voting Patterns</h3>
                          <p>The graph below illustrates this member's voting pattern on the keywords shown in the table above. Each keyword is scored between 1 to -1, with 1 considered "highly progressive" and -1 considered 'highly conservative'. Interested in seeing the code behind these values?
                              <a href=""> Click here</a></p>
                      </div>
                      <Bar data={{
                          labels:['Gun Control', 'Birth Control', 'HealthCare', 'Gun Rights', 'Immigration'],
                          datasets:[
                              {
                                  data:[.8, -.8, .3, .9, -.9],
                                  backgroundColor: colors
                              }]
                            }}
                           width={100}
                           height={45}
                      />
                  </div>
                  <div id ='member-footer'>
                      <FooterComponent/>
                  </div>
              </div>
          );
      }
  }
}

export default MemberPage;
