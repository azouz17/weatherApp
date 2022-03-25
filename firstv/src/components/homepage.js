import React from "react";
import cycling from "../Icons/new icons/cycling.png";
import hiking from "../Icons/new icons/hiking.png";
import indoorrunning from "../Icons/new icons/indoorrunning.png";
import marathoning from "../Icons/new icons/marathoning.png";
import mountain from "../Icons/new icons/mountain.png";
import running from "../Icons/new icons/running.png";
import skateboarding from "../Icons/new icons/skateboarding.png";
import skiing from "../Icons/new icons/skiing.png";
import weight from "../Icons/new icons/weight.png";
import { LocationContext } from "../contexts/locationContext";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import PerfectWeatherFor from "./PerfectWeatherFor";
import FiveDayForecast from "./FiveDayForecast";
import MainInfo from "./MainInfo";

class Mainpage extends React.Component {
  static contextType = LocationContext;

  constructor(props) {
    super(props);
    //const current = new Date();
    this.state = {
      loading: true,
      celsiusOn: true,
      date: null,

      city: null,
      country: null,
      humidity: null,
      windSpeed: null,
      windDirection: null,
      sport1: null,
      sport2: null,
      sport3: null,
      weatherIcon: null,
      weatherDesc: null,
      feelsLikeTemp: null,
      highTemp: null,
      lowTemp: null,
      visibility: null,

      day1: null,
      day1temp: null,
      day1img: null,

      day2: null,
      day2temp: null,
      day2img: null,

      day3: null,
      day3temp: null,
      day3img: null,

      day4: null,
      day4temp: null,
      day4img: null,

      day5: null,
      day5temp: null,
      day5adimg: null,
    };
  }

  async componentDidMount() {
    var { location } = this.context;

    var url = `https://api.openweathermap.org/data/2.5/forecast?zip=${location},GB&appid=5afc51e761e2e7eaa9e64dada883952c`;
    const response = await fetch(url);
    const data = await response.json();
    var d = new Date();
    var date = d.toUTCString();
    console.log(data);

    this.setState({ date: date });
    this.setState({ city: data.city.name });
    this.setState({ country: data.city.country });
    this.setState({ humidity: data.list[0].main.humidity });
    this.setState({ windSpeed: data.list[0].wind.speed });

    this.setState({
      weatherIcon:
        "http://openweathermap.org/img/wn/" +
        data.list[0].weather[0].icon +
        "@2x.png",
    });
    this.setState({ weatherDesc: data.list[0].weather[0].main });
    this.setState({
      feelsLikeTemp: Math.round(data.list[0].main.feels_like - 273.15),
    }); // IN CELSIUS
    this.setState({
      highTemp: Math.round(data.list[0].main.temp_max - 273.15),
    }); // IN CELSIUS
    this.setState({ lowTemp: Math.round(data.list[0].main.temp_min - 273.15) }); // IN CELSIUS

    this.setState({
      feelsLikeTempF: Math.round(data.list[0].main.feels_like * 1.8 - 459.67),
    }); // IN FAHRENHEIT
    this.setState({
      highTempF: Math.round(data.list[0].main.temp_max * 1.8 - 459.67),
    }); // IN FAHRENHEIT
    this.setState({
      lowTempF: Math.round(data.list[0].main.temp_min * 1.8 - 459.67),
    }); // IN FAHRENHEIT

    if (
      data.list[0].main.feels_like > 293.15 &&
      data.list[0].main.feels_like < 303.15
    ) {
      this.setState({ sport1: marathoning });
      this.setState({ sport2: hiking });
      this.setState({ sport3: cycling });
    } else if (
      data.list[0].main.feels_like > 278.15 &&
      data.list[0].main.feels_like < 293.15
    ) {
      this.setState({ sport1: weight });
      this.setState({ sport2: skateboarding });
      this.setState({ sport3: running });
    } else if (
      data.list[0].main.feels_like > 268.15 &&
      data.list[0].main.feels_like < 278.15
    ) {
      this.setState({ sport1: indoorrunning });
      this.setState({ sport2: skiing });
      this.setState({ sport3: indoorrunning });
    }

    this.setState({ visibility: data.list[0].visibility });
    this.setState({ loading: false });

    //Getting and displaying the text for the upcoming five days of the week
    var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //Function to get the correct integer for the index of the days array
    function CheckDay(day) {
      if (day + d.getDay() > 6) {
        return day + d.getDay() - 7;
      } else {
        return day + d.getDay();
      }
    }
    var weekdays = [];
    for (let i = 0; i < 5; i++) {
      weekdays.push(weekday[CheckDay(i)]);
    }
    console.log(weekdays);

    this.setState({ day1: weekdays[0] });
    this.setState({
      day1temp: Math.round(data.list[0].main.feels_like - 273.15),
    });
    this.setState({
      day1img:
        "http://openweathermap.org/img/wn/" +
        data.list[0].weather[0].icon +
        "@2x.png",
    });

    this.setState({ day2: weekdays[1] });
    this.setState({
      day2temp: Math.round(data.list[1].main.feels_like - 273.15),
    });
    this.setState({
      day2img:
        "http://openweathermap.org/img/wn/" +
        data.list[1].weather[0].icon +
        "@2x.png",
    });

    this.setState({ day3: weekdays[2] });
    this.setState({
      day3temp: Math.round(data.list[2].main.feels_like - 273.15),
    });
    this.setState({
      day3img:
        "http://openweathermap.org/img/wn/" +
        data.list[2].weather[0].icon +
        "@2x.png",
    });

    this.setState({ day4: weekdays[3] });
    this.setState({
      day4temp: Math.round(data.list[3].main.feels_like - 273.15),
    });
    this.setState({
      day4img:
        "http://openweathermap.org/img/wn/" +
        data.list[3].weather[0].icon +
        "@2x.png",
    });

    this.setState({ day5: weekdays[4] });
    this.setState({
      day5temp: Math.round(data.list[4].main.feels_like - 273.15),
    });
    this.setState({
      day5img:
        "http://openweathermap.org/img/wn/" +
        data.list[4].weather[0].icon +
        "@2x.png",
    });
  }

  handleClick() {
    if (this.state.celsiusOn) {
      console.log("Celsius! (changed to fahrenheit)");
      this.setState({ celsiusOn: false }); // change to fahrenheit
    } else {
      console.log("Fahrenheit! (changed to celsius)");
      this.setState({ celsiusOn: true }); // change to celsius
    }
  }

  render() {
    return (
      <div id="container">
        <h1>Tempthlete</h1>
        <nav>
          <div id="links">
            <Link
              to={`/Postcode?city=${this.state.city}&country=${this.state.country}`}
            >
              Postcode
            </Link>
          </div>
          <button
            id="celsiusfahrenheitbtn"
            onClick={this.handleClick.bind(this)}
          >
            Celsius/Fahrenheit
          </button>
        </nav>

        <br></br>
        <MainInfo
          loading={this.state.loading}
          city={this.state.city}
          date={this.state.date}
          weatherIcon={this.state.weatherIcon}
          weatherDesc={this.state.weatherDesc}
          celsiusOn={this.state.celsiusOn}
          feelsLikeTemp={this.state.feelsLikeTemp}
          feelsLikeTempF={this.state.feelsLikeTempF}
          highTemp={this.state.highTemp}
          highTempF={this.state.highTempF}
          lowTemp={this.state.lowTemp}
          lowTempF={this.state.lowTempF}
          humidity={this.state.humidity}
          windSpeed={this.state.windSpeed}
          visibility={this.state.visibility}
        />

        <FiveDayForecast
          celsiusOn={this.state.celsiusOn}
          day1={this.state.day1}
          day1temp={this.state.day1temp}
          day1img={this.state.day1img}
          day2={this.state.day2}
          day2temp={this.state.day2temp}
          day2img={this.state.day2img}
          day3={this.state.day3}
          day3temp={this.state.day3temp}
          day3img={this.state.day3img}
          day4={this.state.day4}
          day4temp={this.state.day4temp}
          day4img={this.state.day4img}
          day5={this.state.day5}
          day5temp={this.state.day5temp}
          day5img={this.state.day5img}
        />

        <div id="clear"></div>

        <PerfectWeatherFor
          sport1={this.state.sport1}
          sport2={this.state.sport2}
          sport3={this.state.sport3}
        />
      </div>
    );
  }
}

export default Mainpage;
