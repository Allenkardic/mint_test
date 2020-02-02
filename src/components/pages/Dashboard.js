/** @format */

import React, { Component } from "react";

import { connect } from "react-redux";
import { getUsers } from "../../redux/actions/transAction";
import chart from "../../images/chart.png";
import dashboard from "../../images/dashboard.PNG";

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
            <img
              style={{ width: "800px", maxWidth: "100%", height: "100%" }}
              src={dashboard}
              alt="img"
            />
          </div>
          <div className="section-two-items">
            <div
              style={{
                border: "1px solid whitesmoke",
                padding: "1rem",
                height: "50%"
              }}>
              <div style={{ marginBottom: "0.8rem" }}>Order</div>
              <hr style={{ marginBottom: "0.8rem" }} />
              <div style={{ marginBottom: "0.8rem" }}>
                {" "}
                Pending: <span style={{ color: "gold" }}>20</span>
              </div>
              <div style={{ marginBottom: "0.8rem" }}>
                {" "}
                Reconciled Order: <span style={{ color: "green" }}>20</span>
              </div>
              <div style={{ marginBottom: "0.8rem" }}>
                {" "}
                Total Order: <span style={{ color: "blue" }}>20</span>
              </div>
            </div>
            <div
              style={{
                border: "1px solid whitesmoke",
                height: "50%",
                padding: "1rem"
              }}>
              <div style={{ marginBottom: "0.8rem" }}>Order</div>
              <hr style={{ marginBottom: "0.8rem" }} />
              <div style={{ marginBottom: "0.8rem" }}>
                Pending: <span style={{ color: "gold" }}>20</span>
              </div>
              <div style={{ marginBottom: "0.8rem" }}>
                Reconciled Order: <span style={{ color: "green" }}>20</span>
              </div>
              <div style={{ marginBottom: "0.8rem" }}>
                Total Order: <span style={{ color: "blue" }}>20</span>
              </div>
            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "2rem", marginBottom: "2rem" }}>Payments</h1>

        <div className="section-three">
          <div className="section-three-items">
            showing 20 > out of 500 payment
          </div>

          <div className="section-three-items">
            <i style={{ paddingTop: "0.4rem" }} class="fas fa-search" />
            <input
              className="section-three-input"
              placeholder="search payment"
            />
          </div>
          <div className="section-three-items">
            <span>show</span>
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
