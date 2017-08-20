import React from 'react';

let gc_icon = require('../../../images/gun-control-icon.png');
let bc_icon = require('../../../images/birth-control-icon.png');
let aca_icon = require('../../../images/aca-icon.png');
let gr_icon = require('../../../images/gun-rights-icon.png');

const MemberTable = props => {
    return(
        <table>
            <tr id="header">
                <th id='keyword' className="align">
                    Keyword
                </th>
                <th className="align">
                    For
                </th>
                <th className="align right-border">
                    Against
                </th>
                <th className="s-table-width">
                    House Avg. For
                    <span className="table-description">Average House of Rep. voting for keyword type legislation</span>
                </th>
                <th className="s-table-width right-border">
                    House Avg. Against
                    <span className="table-description">Average House of Rep. voting against keyword type legislation</span>
                </th>
                <th>
                    Party Alignment Avg.
                    <span className="table-description">Percentage of votes aligned with party voting patterns</span>
                </th>
            </tr>
            <tr className="table-row">
                <td id="gun-control">
                    <span className="keyword-icon"><img src={gc_icon} alt=""/></span>Gun Control
                    <div className="arrow_box">
                        <p className="box-title">Gun Control</p>
                        <p className="box-desc">Gun Rights include the right to keep and bear arms, to use firearms in self-defense, and to produce and sell firearms and ammunition. </p>
                    </div>
                </td>
                <td className="table-data">21<span className="percent">%</span></td>
                <td className="right-border table-data">96<span className="percent">%</span></td>
                <td className="table-data">21<span className="percent">%</span></td>
                <td className="right-border table-data">96<span className="percent">%</span></td>
                <td className="table-data">85<span className="percent">%</span></td>
            </tr>
            <tr className="table-row">
                <td id="birth-control">
                    <span className="keyword-icon"><img src={bc_icon} alt=""/></span>Birth Control
                    <div className="arrow_box">
                        <p className="box-title">Birth Control</p>
                        <p className="box-desc">Gun Rights include the right to keep and bear arms, to use firearms in self-defense, and to produce and sell firearms and ammunition. </p>
                    </div>
                </td>
                <td className="table-data">88<span className="percent">%</span></td>
                <td className="right-border table-data">10<span className="percent">%</span></td>
                <td className="table-data">88<span className="percent">%</span></td>
                <td className="right-border table-data">10<span className="percent">%</span></td>
                <td className="table-data">95<span className="percent">%</span></td>
            </tr>
            <tr className="table-row">
                <td id="gun-rights">
                    <span className="keyword-icon"><img src={gr_icon} alt=""/></span>Gun Rights
                    <div className="arrow_box">
                        <p className="box-title">Gun Rights</p>
                        <p className="box-desc">Gun Rights include the right to keep and bear arms, to use firearms in self-defense, and to produce and sell firearms and ammunition. </p>
                    </div>
                </td>
                <td className="table-data">10<span className="percent">%</span></td>
                <td className="right-border table-data">85<span className="percent">%</span></td>
                <td className="table-data">10<span className="percent">%</span></td>
                <td className="right-border table-data">85<span className="percent">%</span></td>
                <td className="table-data">23<span className="percent">%</span></td>
            </tr>
            <tr className="table-row">
                <td id="health-care">
                    <span className="keyword-icon"><img src={aca_icon} alt=""/></span>Health Care
                    <div className="arrow_box">
                        <p className="box-title">Health Care</p>
                        <p className="box-desc">Gun Rights include the right to keep and bear arms, to use firearms in self-defense, and to produce and sell firearms and ammunition. </p>
                    </div>
                </td>
                <td className="table-data">21%</td>
                <td className="right-border table-data">96%</td>
                <td className="table-data">21%</td>
                <td className="right-border table-data">96%</td>
                <td className="table-data">85%</td>
            </tr>
        </table>
    )
}

export default MemberTable;

