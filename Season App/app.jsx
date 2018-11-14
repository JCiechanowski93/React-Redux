import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.jsx';
import Spinner from './Spinner.jsx';

class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        const { errorMessage, lat } = this.state;
        if (errorMessage && !lat) {
            return <div>Error: {errorMessage}</div>;
        }
        if (!errorMessage && lat) {
            return <SeasonDisplay lat={lat} />;
        }
        return <Spinner message="Please accept location request" />;
    }


    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )
});