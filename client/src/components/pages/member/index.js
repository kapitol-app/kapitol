import React, {Component} from "react";
import { connect } from 'react-redux';
import NavBar from "../../shared/navbar";
import MemberDetails from "./member-details";
import FooterComponent from "../../shared/footer";
import * as sharedHelpers from "../../../helpers/shared";
import * as memberHelpers from "../../../helpers/member";
import * as getRequests from '../../../actions/getRequests';
import "../../../stylesheets/css/index.css";

class MemberPage extends Component {

  componentWillMount() {
      this.props.dispatch(getRequests.fetchMember(this.props.match.params.id));
  }

  componentDidMount() {
      document.title = "Members | Kapitol"
  }

  render() {
      {
          console.log(this.props.member);
      }

      if (!this.props.member) {
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
                  <NavBar/>
                  <MemberDetails
                      memberInfo={this.props.member}
                  />
                  <div className="mp-table">
                      member table data
                  </div>
                  <div className="mp-issues">
                      member stance on issues
                  </div>
                  <FooterComponent/>
              </div>
          );
      }
  }
}

const mapStateToProps = state => ({
  member: state.member.currentMember
});

export default connect(mapStateToProps)(MemberPage);
