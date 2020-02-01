/** @format */

import React, { Component } from "react";

import { connect } from "react-redux";
import { getUsers } from "../../redux/actions/transAction";
import chart from "../../images/chart.png";

import Transaction from "./Transaction";
import "../../css/Dashboard.css";

class Dashboard extends Component {
  state = {
    showContent: false
  };

  onToggleClick = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  componentDidMount() {
    console.log("users", this.props);
    this.props.getUsers();
  }
  render() {
    return (
      <div className="container-trans">
        <div className="section-one-transaction">
          <div className="section-one-transaction-items">
            <div style={{ marginRight: "1rem" }}>
              <div>Daily Trasaction volume</div>
              <div>
                {!this.props.trans.users[0] ? null : (
                  <div>
                    {/* <span>&#8358;</span> */}
                    {this.props.trans.users[0].id}000
                  </div>
                )}
              </div>
            </div>
            <img className="image-chart" src={chart} alt="" />
          </div>

          <div className="section-one-transaction-items">
            <div style={{ marginRight: "1rem" }}>
              <div>Daily Trasaction volume</div>
              <div>
                {!this.props.trans.users[0] ? null : (
                  <div>
                    <span>&#8358;</span>
                    {this.props.trans.users[0].id}000
                  </div>
                )}
              </div>
            </div>
            <img className="image-chart" src={chart} alt="" />
          </div>

          <div className="section-one-transaction-items">
            <div style={{ marginRight: "1rem" }}>
              <div>Daily Trasaction volume</div>
              <div>
                {!this.props.trans.users[0] ? null : (
                  <div>
                    {/* <span>&#8358;</span> */}
                    {this.props.trans.users[0].id}000
                  </div>
                )}
              </div>
            </div>
            <img className="image-chart" src={chart} alt="" />
          </div>

          <div className="section-one-transaction-items">
            <div style={{ marginRight: "1rem" }}>
              <div>Daily Trasaction volume</div>
              <div>
                {!this.props.trans.users[0] ? null : (
                  <div>
                    <span>&#8358;</span>
                    {this.props.trans.users[0].id}000
                  </div>
                )}
              </div>
            </div>
            <img className="image-chart" src={chart} alt="" />
          </div>
        </div>

        <div className="section-two">
          <div className="section-two-items">
            <img style={{ maxWidth: "100%" }} src={chart} alt="img" />
          </div>
          <div className="section-two-items">
            <img style={{ maxWidth: "100%" }} src={chart} alt="img" />
          </div>
        </div>

        <h1 style={{ marginTop: "2rem", marginBottom: "2rem" }}>Payments</h1>

        <div className="section-three">
          <div className="section-three-items">
            showing 20 > out of 500 payment
          </div>

          <div className="section-three-items">
            <input placeholder="search payment" />
            <span>show</span>
          </div>
          <div className="section-three-items">
            <div className="item-toggle">
              <div>
                All{" "}
                <span
                  style={{ marginLeft: "6rem" }}
                  onClick={this.onToggleClick}>
                  <i class="fas fa-angle-down" />
                </span>{" "}
              </div>
              <div>
                {this.state.showContent ? (
                  <div>
                    <div>Reconciled</div>
                    <div>Un-reconcilled</div>
                    <div>Settled</div>
                    <div>Unsettled</div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* table */}
        <div>
          <table>
            <tr>
              <th>Item Type</th>
              <th>Price</th>
              <th>Transaction No</th>
              <th>Names</th>
              <th></th>
            </tr>
          </table>
          {this.props.trans.users.map((item) => (
            <Transaction trans={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  trans: state.trans
});

export default connect(mapStateToProps, { getUsers })(Dashboard);
