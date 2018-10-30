import React, { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div>
        <h1 className="title-container__title">Find My Weather</h1>
        <p className="title-container__subtitle">
          Check out the weather of any place in the world
        </p>
      </div>
    );
  }
}

export default Title;
