/** @format */

import React, { Component } from "react";
// import { Link } from "react-router-dom";

import "../../css/Sidebar.css";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: true
    };
  }
  onToggleClick = () => {
    this.setState({ showContent: !this.state.showContent });
  };

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-des">
          <div className="sidebar-item">
            <div className="generate-invoice">GENERATE INVOICE</div>
            <div className="sidebar-item-content">
              <div className="sidebar-share">Main</div>
              <div className="sidebar-share-link">
                <div className="sidebar-share-link-first">
                  <i class="fab fa-first-order" />
                </div>
                <div>Overview</div>
              </div>
            </div>
            <div className="sidebar-item-content">
              <div className="sidebar-share">Payments</div>
              <div className="sidebar-share-link">
                <div className="sidebar-share-link-first">
                  <i class="fab fa-first-order" />
                </div>
                <div>All payments</div>
              </div>
              <div className="sidebar-share-link">
                <div className="sidebar-share-link-first">
                  <i class="fab fa-first-order" />
                </div>
                <div>Reconcilled payments</div>
              </div>
              <div className="sidebar-share-link">
                <div className="sidebar-share-link-first">
                  <i class="fab fa-first-order" />
                </div>
                <div>Un-Reconcilled payments</div>
              </div>
              <div className="sidebar-share-link">
                <div className="sidebar-share-link-first">
                  <i class="fab fa-first-order" />
                </div>
                <div>Manual Settlement</div>
              </div>
            </div>
            <div className="sidebar-item-content">
              <div className="sidebar-share">Orders</div>
              <div className="sidebar-share-link">
                <div className="sidebar-share-link-first">
                  <i class="fab fa-first-order" />
                </div>
                <div>All Orders</div>
              </div>

              <div className="sidebar-share-link">
                <div className="sidebar-share-link-first">
                  <i class="fab fa-first-order" />
                </div>
                <div>Pending Orders</div>
              </div>

              <div className="sidebar-share-link">
                <div className="sidebar-share-link-first">
                  <i class="fab fa-first-order" />
                </div>
                <div>Reconcilled Orders</div>
              </div>
            </div>
            <div className="sidebar-item-content">
              <div className="sidebar-share-link">
                <div className="sidebar-share-link-first">
                  <i class="fab fa-first-order" />
                </div>
                <div>Merchant Profile</div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar-mob">
          <div className="sidebar-mob-item">
            {this.state.showContent ? (
              <div className="sidebar-mob-item-content">
                <div className="generate-invoice">GENERATE INVOICE</div>
                <div className="sidebar-item-content">
                  <div className="sidebar-share">Main</div>
                  <div className="sidebar-share-link">
                    <div className="sidebar-share-link-first">
                      <i class="fab fa-first-order" />
                    </div>
                    <div>Overview</div>
                  </div>
                </div>
                <div className="sidebar-item-content">
                  <div className="sidebar-share">Payments</div>
                  <div className="sidebar-share-link">
                    <div className="sidebar-share-link-first">
                      <i class="fab fa-first-order" />
                    </div>
                    <div>All payments</div>
                  </div>
                  <div className="sidebar-share-link">
                    <div className="sidebar-share-link-first">
                      <i class="fab fa-first-order" />
                    </div>
                    <div>Reconcilled payments</div>
                  </div>
                  <div className="sidebar-share-link">
                    <div className="sidebar-share-link-first">
                      <i class="fab fa-first-order" />
                    </div>
                    <div>Un-Reconcilled payments</div>
                  </div>
                  <div className="sidebar-share-link">
                    <div className="sidebar-share-link-first">
                      <i class="fab fa-first-order" />
                    </div>
                    <div>Manual Settlement</div>
                  </div>
                </div>
                <div className="sidebar-item-content">
                  <div className="sidebar-share">Orders</div>
                  <div className="sidebar-share-link">
                    <div className="sidebar-share-link-first">
                      <i class="fab fa-first-order" />
                    </div>
                    <div>All Orders</div>
                  </div>

                  <div className="sidebar-share-link">
                    <div className="sidebar-share-link-first">
                      <i class="fab fa-first-order" />
                    </div>
                    <div>Pending Orders</div>
                  </div>

                  <div className="sidebar-share-link">
                    <div className="sidebar-share-link-first">
                      <i class="fab fa-first-order" />
                    </div>
                    <div>Reconcilled Orders</div>
                  </div>
                </div>
                <div className="sidebar-item-content">
                  <div className="sidebar-share-link">
                    <div className="sidebar-share-link-first">
                      <i class="fab fa-first-order" />
                    </div>
                    <div>Merchant Profile</div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          <div onClick={this.onToggleClick} className="click">
            <i class="fas fa-bars" style={{ fontSize: "1.5em" }} />
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
