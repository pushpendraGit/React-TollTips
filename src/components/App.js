import React, { Component } from "react";

import TollTip from "./TollTip";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      bottom: false,
      left: false,
      right: true,
    };
  }

  myFunction = () => {
    var x = document.getElementById("myDIV");

    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  handleTop = () => {
    this.setState({
      top: true,
      bottom: false,
      left: false,
      right: false,
    });
  };

  handleBottom = () => {
    this.setState({
      top: false,
      bottom: true,
      left: false,
      right: false,
    });
  };

  handleLeft = () => {
    this.setState({
      top: false,
      bottom: false,
      left: true,
      right: false,
    });
  };

  handleRight = () => {
    this.setState({
      top: false,
      bottom: false,
      left: false,
      right: true,
    });
  };
  render() {
    console.log("This state is", this.state);
    const { top, left, right, bottom } = this.state;

    return (
      <div>
        <div className="header">
          <h1> Click On Button 👉 </h1> 

          <div className="dropDown">
            <button onClick={this.myFunction} className="btn back">
              Click Me
            </button>
            <ul id="myDIV">
              <li className="ele" onClick={this.handleTop}>
                Top
              </li>
              <li className="ele" onClick={this.handleBottom}>
                Bottom
              </li>
              <li className="ele" onClick={this.handleLeft}>
                Left
              </li>
              <li className="ele" onClick={this.handleRight}>
                Right
              </li>
            </ul>
          </div>
        </div>

        <div className="main">
          {top && <TollTip content="This is top" addClass="top" />}
          {bottom && <TollTip content="This is bottom" addClass="bottom" />}
          {left && <TollTip content="This is left" addClass="left" />}
          {right && <TollTip content="This is right" addClass="right" />}
        </div>
      </div>
    );
  }
}

export default App;
