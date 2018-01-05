import React, {Component} from 'react';
import './Weather.css';
import 'open-weather-icons/dist/css/open-weather-icons.css';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: {
        main: {},
        temp: null,
        name: null,
        icon: null,
      }
    }
  }

   componentDidMount() {
    var options = {
      enableHighAccuracy: true,
      timeout: 100000,
      maximumAge: 0
    };

    const success = (pos) => {
      var lat = pos.coords.latitude.toFixed(2);
      var lon = pos.coords.longitude.toFixed(2);
      var weather = {...this.state.weather};

      var URL = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon + "&units=metric&appid=4def1e3b863c46218b6dc8afb5451a24";
      console.log('got location');

      fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        weather = {
          main: data.main,
          temp: data.main.temp.toFixed(1) + " ºC",
          name: data.name,
          icon: "owi owi-2x owi-" + data.weather[0].icon,
        };
        this.setState({ weather })
        console.log(this.state.weather.temp);
      })
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  render() {
    return (
    <div className='weather-flex'>
      <div className="weather-layout">
        <div className="flex-top">
          <i className={this.state.weather.icon}></i>
          <p className='temp'>{this.state.weather.temp}</p>
        </div>
        <p className='weather-name'>{this.state.weather.name}</p>
      </div>
    </div>)
  }
}

export default Weather;
