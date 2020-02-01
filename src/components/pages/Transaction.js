/** @format */

import React, { Component } from "react";
import "../../css/Dashboard.css";

class Transaction extends Component {
  state = {
    showContent: false
  };

  onToggleClick = () => {
    this.setState({ showContent: !this.state.showContent });
  };
  render() {
    const { id, name, phone } = this.props.trans;
    return (
      <div>
        <div>
          <table>
            <tr>
              <td>
                <span className="vw">VW</span>
                {name}
              </td>
              <td>${id}:1678</td>
              <td>{phone}</td>
              <td>{name}</td>
              <td>
                <div className="hello">
                  <div>
                    {" "}
                    <span
                      style={{
                        color: "green",
                        fontSize: "1em",
                        marginRight: "1rem"
                      }}>
                      <i class="fas fa-circle" />
                    </span>{" "}
                    pending{" "}
                  </div>
                </div>
              </td>
              <td>
                <i class="fas fa-angle-down" onClick={this.onToggleClick} />
              </td>
            </tr>
          </table>
        </div>

        <div className="hidden-items">
          {this.state.showContent ? <div>hello</div> : null}
        </div>
      </div>
    );
  }
}

export default Transaction;
