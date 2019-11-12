import React, {Component} from 'react';
import Forecast1Day from "./Forecast1Day/Forecast1Day";
import "./Forecast5Day.css"

class Forecast5Days extends Component {
    constructor(props) {
        super(props);
        this.state = {
          forecast: []
        };
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/evyros/react-weather-app/forecast")
            .then(res => res.json())
            .then(forecast => {
                this.setState({forecast});
            });
    }

    render() {
        return (
            <div className="weather-5-days">
                {this.state.forecast.map(weather => {
                   return <div>
                       <Forecast1Day
                           day={weather.day}
                           src={weather.icon}
                           temp={weather.temperature + '°'}
                           cond={weather.description}/>
                   </div>
                })}
            </div>
        );
    }
}

export default Forecast5Days;