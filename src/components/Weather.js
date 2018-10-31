import React, { Component } from "react";

class Weather extends Component {
  render() {
    return (
      <div className="weather__info">
        {this.props.city &&
          this.props.country && (
            <p className="weather__key">
              <span className="weather__value">
                Location: {this.props.city}, {this.props.country}
              </span>
            </p>
          )}
        {this.props.temperature && (
          <p className="weather__key">
            <span className="weather__value">
              Temperature:
              {this.props.temperature} &#176;F
            </span>
          </p>
        )}
        {this.props.humidity && (
          <p className="weather__key">
            <span className="weather__value">
              Humidity:
              {this.props.humidity}
            </span>
          </p>
        )}
        {this.props.description && (
          <p className="weather__key">
            <span className="weather__value">
              Condition:
              {this.props.description}
            </span>
          </p>
        )}
        {this.props.error && (
          <p>
            <span className="weather__value">{this.props.error}</span>
          </p>
        )}
      </div>
    );
  }
}

export default Weather;
