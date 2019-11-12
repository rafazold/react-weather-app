import React, {Component} from 'react';
import "./Forecast1Day.css"



class Forecast1Day extends Component {
    render() {
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        return (
            <div className="weather-module">
                <h3 className="weather-day">{weekDays[this.props.day]}</h3>
                <img src={this.props.src} alt="weather" className="weather-icon" />
                <div className="weather-details">
                    <span className="weather-temp">{this.props.temp}</span>
                    <span className="weather-cond">{this.props.cond}</span>
                </div>
            </div>
        );
    }
}

export default Forecast1Day;