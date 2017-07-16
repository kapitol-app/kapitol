import React from "react";

export const getPartyStateDistrict = (member) => {
    if (member.party === "republican") {
        if (member.district) {
            return (
                <h3 className="mp-party-district">
                    <div className="republican">R</div>
                    epublican, {member.state} {member.district} District
                </h3>
            )
        } else {
            return (
                <h3 className="mp-party-district">
                    <div className="republican">R</div>
                    epublican, {member.state}
                </h3>
            )
        }
    } else {
        if (member.district) {
            return (
                <h3 className="mp-party-district">
                    <div className="democrat">D</div>
                    emocrat, {member.state} {member.district} District
                </h3>
            )
        } else {
            return (
                <h3 className="mp-party-district">
                    <div className="democrat">D</div>
                    emocrat, {member.state}
                </h3>
            )
        }
    }
};