import React from 'react';
import './App.css';
import Forecast5Days from "./Forecast5Days/Forecast5Days";

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Forecast5Days />
            </div>
        );
    }

}

export default App;
