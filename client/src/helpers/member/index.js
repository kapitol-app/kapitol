import React from "react";
import * as sharedHelpers from "../shared";

export const getPartyStateDistrict = (member) => {
    if (member.party === "republican") {
        if (member.district) {
            return (
                <h3 className="mp-party-district">
                    <div className="republican">R</div>
                    epublican, {sharedHelpers.capitalize(member.state)} {member.district} District
                </h3>
            )
        } else {
            return (
                <h3 className="mp-party-district">
                    <div className="republican">R</div>
                    epublican, {sharedHelpers.capitalize(member.state)}
                </h3>
            )
        }
    } else {
        if (member.district) {
            return (
                <h3 className="mp-party-district">
                    <div className="democrat">D</div>
                    emocrat, {sharedHelpers.capitalize(member.state)} {member.district} District
                </h3>
            )
        } else {
            return (
                <h3 className="mp-party-district">
                    <div className="democrat">D</div>
                    emocrat, {sharedHelpers.capitalize(member.state)}
                </h3>
            )
        }
    }
};
