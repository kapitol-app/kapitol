import React from "react";

const MemberDetails = props => {
    return (
        <div className="mp-details-container">
            <div className="mp-image">
                <img src={props.picture}
                     alt="Congress member"/>
            </div>
            <div className="mp-details">
                <h1>{props.name}</h1>
                {props.partyStateDistrict}
                <ul>
                    <li className="mp-fb">
                        <a href={props.fbLink}
                           target="_blank"
                           rel="noopener noreferrer">
                            &nbsp;&nbsp; {props.fbUsername}
                        </a>
                    </li>
                    <li className="mp-twitter">
                        <a href={props.twitterLink}
                           target="_blank"
                           rel="noopener noreferrer">
                            &nbsp;&nbsp; {props.twitterUsername}
                        </a>
                    </li>
                    <li className="mp-instagram">
                        <a href={props.instagramLink}
                           target="_blank"
                           rel="noopener noreferrer">
                            &nbsp;&nbsp; {props.instagramUsername}
                        </a>
                    </li>
                </ul>
                <a className="mp-bio"
                   href={props.bio}
                   target="_blank"
                   rel="noopener noreferrer">
                    Read biography&nbsp;&nbsp;
                </a>
            </div>
        </div>
    );
};

export default MemberDetails;