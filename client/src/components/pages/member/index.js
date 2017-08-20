import React, {Component} from "react";
import NavBar from "../../shared/navbar";
import MemberDetails from "./member-details";
import {Chart, Bar} from 'react-chartjs-2';
import MemberTable from './member-table';
import {fetchMember} from '../../../services/services';
import * as sharedHelpers from "../../../helpers/shared";
import "../../../stylesheets/css/index.css";

class MemberPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            member: []
        }
    }

  componentWillMount() {
      fetchMember(this.props.match.params.id).then(data =>{
         this.setState({
             member: data
         })
      });
      Chart.defaults.global.legend.display = false;
      Chart.defaults.global.animationSteps = 160;
  }

  updateMemberHandler = (data) => {
        this.setState({
            member: data
        });
  };


  componentDidMount() {
      document.title = "Members | Kapitol"
  }

  render() {
      let colors = sharedHelpers.sortColor([.8, -.8, .3, .9, -.9]);
      if (!this.state.member) {
          return (
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
          )
      } else {
          return (
              <div className="mp-container">
                  <NavBar action={this.updateMemberHandler}/>
                  <MemberDetails memberInfo={this.state.member}/>
                  <div className="mp-table">
                      <MemberTable/>
                  </div>
                  <div className="mp-issues">
                      <Bar data={{
                          labels:['Gun Control', 'Birth Control', 'HealthCare', 'Gun Rights', 'Immigration'],
                          datasets:[
                              {
                                  label: 'Keywords',
                                  data:[.8, -.8, .3, .9, -.9],
                                  backgroundColor: colors
                              }]
                            }}
                           width={100}
                           height={45}
                      />
                  </div>
              </div>
          );
      }
  }
}

export default MemberPage;
