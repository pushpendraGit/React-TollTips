import React, { Component } from "react";

class TollTip extends Component {
  render() {

    const { addClass, content } = this.props;
    return (
      <div>
        <div className="tooltip">
          <div className="btn">
            <span>Atom</span>
            <div className="dot"></div>
            <div className={addClass}>
              <h3>{content}</h3>

              <i></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TollTip;
