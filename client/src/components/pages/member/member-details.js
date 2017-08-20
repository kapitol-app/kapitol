import React from "react";

const MemberDetails = props => {
    let member = props.memberInfo[0]; //all member information saved as member
    return (
        <div className="full-width">
            { !member ?
                <div>Loading</div> :
                <div className="mp-details-container">
                    <div className="mp-image">
                        <img src={'https://theunitedstates.io/images/congress/450x550/' + member.memberId + '.jpg'}
                             alt="Congress member"/>
                    </div>
                    <div className="mp-details">
                        <h1><span className="title">{member.roles[0].title}</span> {member.firstName} {member.middleName} {member.lastName}</h1>
                        {(function(){
                            switch(member.currentParty) {
                                case 'D':
                                    return <div className="mp-info"><span className="democrat">D</span>emocrat<span>, {member.roles[0].state} {member.roles[0].district ? <span>(D-{member.roles[0].district})</span> : ''}</span></div>;
                                case 'R':
                                    return <div className="mp-info"><span className="republican">R</span>epublican<span>, {member.roles[0].state} {member.roles[0].district ? <span>(D-{member.roles[0].district})</span> : ''}</span></div>;
                                default:
                                    return <div className="mp-info"><span className="independent">I</span>ndependent<span>, {member.roles[0].state} {member.roles[0].district ? <span>(D-{member.roles[0].district})</span> : ''}</span></div>
                            }
                        })()}
                        <ul>
                            <li className="mp-fb">
                                <a href={'https://www.facebook.com/' + member.facebookAccount}
                                   target="_blank">
                                    &nbsp;/{member.facebookAccount}
                                </a>
                            </li>
                            <li className="mp-twitter">
                                <a href={'https://www.twitter.com/' + member.twitterAccount}
                                   target="_blank">
                                    &nbsp;/{member.twitterAccount}
                                </a>
                            </li>
                            <li className="mp-instagram">
                                <a href={'https://www.youtube.com/' + member.youtubeAccount}
                                   target="_blank">
                                    &nbsp; /{member.youtubeAccount}
                                </a>
                            </li>
                        </ul>
                        <a className="mp-bio"
                           href={'http://bioguide.congress.gov/scripts/biodisplay.pl?index=' + member.memberId}
                           target="_blank"
                           rel="noopener noreferrer">
                            Read biography&nbsp;&nbsp;
                        </a>
                    </div>
                </div>
            }
        </div>
    );
};

export default MemberDetails;