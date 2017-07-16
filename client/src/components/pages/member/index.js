import React, {Component} from "react";
import NavBar from "../../shared/navbar";
import MemberDetails from "./member-details";
import MemberData from "../../../services/api";
import FooterComponent from "../../shared/footer";
import * as SharedHelpers from "../../../helpers/shared";
import * as MemberHelpers from "../../../helpers/member";
import "../../../stylesheets/css/index.css";

class MemberPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        const memberData = MemberData.fetchMember(this.props.match.params);
        this.setState({
            memberData,
            currentMember: this.props.match.params
        });
    }

    componentDidMount() {
        document.title = "Members | Kapitol"
    }

    render() {

        const member = this.state.memberData.memberBasics;
        const socialMedia = this.state.memberData.memberBasics.socialMedia;

        if (!member) {
            return <div/>
        } else {
            return (
                <div className="mp-container">
                    <NavBar/>
                    <MemberDetails
                        picture={member.picture}
                        name={SharedHelpers.capitalize(member.name)}
                        partyStateDistrict={MemberHelpers.getPartyStateDistrict(member)}
                        fbLink={socialMedia.facebook.link}
                        fbUsername={socialMedia.facebook.username}
                        twitterLink={socialMedia.twitter.link}
                        twitterUsername={socialMedia.twitter.username}
                        instagramLink={socialMedia.instagram.link}
                        instagramUsername={socialMedia.instagram.username}
                        bio={member.bio}
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

export default MemberPage;
