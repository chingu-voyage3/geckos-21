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
        tempUnint: null,
        name: null,
        icon: null,
        button: null,
      }
    }
  }

  componentWillMount() {
    let weather = {...this.state.weather}
    weather.temp = 'loading weather...';
    this.setState({weather});
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
      // console.log('got location');

      fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        weather = {
          main: data.main,
          temp: data.main.temp.toFixed(1),
          tempUnint: ' ºC',
          name: data.name,
          icon: "owi owi-2x owi-" + data.weather[0].icon,
          button: 'ºF',
          btn: 'btn'
        };
        this.setState({ weather });
        // console.log(this.state.weather.temp);
      });
    };

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  toggleTemperatureUnit = () => {
    let weather = {...this.state.weather};
    if(this.state.weather.tempUnint === ' ºC') {
      weather.temp = (weather.temp * 1.8 + 32).toFixed(1);
      weather.tempUnint = ' ºF';
      weather.button = ' ºC';
      this.setState({weather});
    } else if ( this.state.weather.tempUnint === ' ºF') {
      weather.temp = ((weather.temp - 32) / 1.8).toFixed(1);
      weather.tempUnint = ' ºC';
      weather.button = ' ºF';
      this.setState({weather});
    }
  }

  render() {
    return (
    <div className='weather-wrapper'>
      <div className="weather-layout">
        <div className="flex-top">
          <i className={this.state.weather.icon}></i>
          <p className='temp'>{this.state.weather.temp}{this.state.weather.tempUnint}</p>
          <button onClick={this.toggleTemperatureUnit} className={this.state.weather.btn}>{this.state.weather.button}</button>
        </div>
        <p className='weather-name'>{this.state.weather.name}</p>
      </div>
    </div>)
  }
}

export default Weather;
