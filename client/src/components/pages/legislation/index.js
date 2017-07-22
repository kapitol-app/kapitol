import React, {Component} from 'react';
import NavBar from '../../shared/navbar';
import FooterComponent from '../../shared/footer';
import legislation from '../../../files/legislation.json';

class Legislation extends Component{

    componentDidMount(){
        document.title = "Legislation | Kapitol"
    }

    render(){
        const topic = this.props.match.params.keyword;
        const recentBills = legislation[0][topic]["recent_bills"];
        const recentBillsKeys = Object.keys(recentBills[0]);

        const RecentBillList = (props) => {
            const currentBillKey =  recentBillsKeys[0];
            return (
                <tr>
                    <td>{currentBillKey}</td>
                    <td>{props.recentBill[currentBillKey].stage}</td>
                    <td>{props.recentBill[currentBillKey].sponsorship_party}</td>
                    <td>{props.recentBill[currentBillKey].results.pass}</td>
                </tr>
            );
        };

        return(
            <div>
                <div>
                    <NavBar/>
                    <h1>115th Congressional Voting</h1>
                    <h1>{topic}</h1>
                    <p>{legislation[0][topic]["description"]}</p>
                </div>
                <table>
                    <tr>
                        <th>Recent Bills</th>
                        <th>Details</th>
                        <th>Projection</th>
                        <th>Results</th>
                    </tr>
                    <tr>
                        <td>Recent bills put forth in Congress rela;ng to Gun Rights. Click on the bill name to run it through our predic;on algorithms, seen below.</td>
                        <td>Bill details, including bill placement in Congress and bill sponsoring party </td>
                        <td>Kapitol algorithm predic;on for bill passage </td>
                        <td>Bill results updated in real ;me. Results vary out of 100 or 435 depending on chamber</td>
                    </tr>
                    {
                        recentBills.map((bill,index) => {
                            return (
                                <RecentBillList key={index} billkeys={recentBillsKeys[index]} recentBill={bill}/>
                            );
                        })
                    }
                </table>
                <FooterComponent />
            </div>
        );
    }
};

export default Legislation;
