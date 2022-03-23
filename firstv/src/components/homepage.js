import  React from 'react';
import cycling from '../Icons/new icons/cycling.png';
import hiking from '../Icons/new icons/hiking.png';
import indoorrunning from '../Icons/new icons/indoorrunning.png';
import marathoning from '../Icons/new icons/marathoning.png';
import mountain from '../Icons/new icons/mountain.png';
import running from '../Icons/new icons/running.png';
import skateboarding from '../Icons/new icons/skateboarding.png';
import skiing from '../Icons/new icons/skiing.png';
import weight from '../Icons/new icons/weight.png';

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
	Link
} from "react-router-dom";




export class Mainpage extends React.Component
{
  constructor(props)
  {
      super(props);
      //const current = new Date();
      this.state={
          loading: true,
          celsiusOn: true,
          date: null,

          city: null,
          country: null,
          humidity: null,
          windSpeed: null,
          windDirection: null,
          sport1 :null,
          sport2 :null,
          sport3 :null,

          weatherIcon: null,
          weatherDesc: null,
          feelsLikeTemp: null,
          highTemp: null,
          lowTemp: null,
          
          visibility: null

      };
  }



  async componentDidMount() {
      const url = "https://api.openweathermap.org/data/2.5/weather?zip=W8,GB&appid=5afc51e761e2e7eaa9e64dada883952c";
      const response = await fetch(url);
      const data = await response.json();
      var d = new Date();
      var date = d.toUTCString();
      console.log(data);
      

      this.setState({date: date});
      this.setState({city: data.name});
      this.setState({country: data.sys.country});
      this.setState({humidity: data.main.humidity});
      this.setState({windSpeed: data.wind.speed});

      this.setState({weatherIcon: ("http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png")});
      this.setState({weatherDesc: data.weather[0].main});
      this.setState({feelsLikeTemp: Math.round(data.main.feels_like-273.15)}); // IN CELSIUS
      this.setState({highTemp: Math.round(data.main.temp_max-273.15)}); // IN CELSIUS
      this.setState({lowTemp: Math.round(data.main.temp_min-273.15)}); // IN CELSIUS

      this.setState({feelsLikeTempF: Math.round((data.main.feels_like*1.8)-459.67)}); // IN FAHRENHEIT
      this.setState({highTempF: Math.round((data.main.temp_max*1.8)-459.67)}); // IN FAHRENHEIT
      this.setState({lowTempF: Math.round((data.main.temp_min*1.8)-459.67)}); // IN FAHRENHEIT
      
      
     if(data.main.feels_like>293.15 && data.main.feels_like<303.15)
      {
         this.setState({sport1: marathoning});
         this.setState({sport2: hiking});
         this.setState({sport3: cycling});
      }
      else if(data.main.feels_like>278.15 && data.main.feels_like<293.15)
      {
         this.setState({sport1: weight});
         this.setState({sport2: skateboarding});
         this.setState({sport3: running});
      }
      else if(data.main.feels_like>268.15 && data.main.feels_like<278.15)
      {
         this.setState({sport1: indoorrunning});
         this.setState({sport2: skiing});
         this.setState({sport3: indoorrunning});
      }

      console.log(data);
      console.log("Weather icon:", this.state.weatherIcon);

      this.setState({visibility: data.visibility});
      this.setState({loading: false});


  }

  handleClick() {
      if (this.state.celsiusOn) {
         console.log("Celsius! (changed to fahrenheit)");
        this.setState({celsiusOn: false}); // change to fahrenheit            

      } else {
        console.log("Fahrenheit! (changed to celsius)");
        this.setState({celsiusOn: true}); // change to celsius
      }
  }
    
    render(){
        return(
            <div id="container">
                <h1>Tempthlete</h1>
				<Link to="Postcode" className='links'>Postcode</Link>
                <button onClick={this.handleClick.bind(this)}>Celsius/Fahrenheit</button>
                <br></br>
                <div class = "MainInfo">
                    <div class="Location">
                        <h3 id = "locationCity"> {this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.city}, {this.state.country}</h3>}</h3>
                        <h4 id = "locationTime">{this.state.date}</h4>
                    </div>
                    
                    <div class="weatherIcon">
                        <figure id="iconDescription">
                            <img src={this.state.weatherIcon} alt="weather icon"/> 
                            <figcaption id="weather-caption">{this.state.weatherDesc} </figcaption>
                        </figure>
                        <div>
                           <h2 id="maintemp"> {this.state.loading ? <h2>Data</h2> : <span>{this.state.feelsLikeTemp}° </span>} {this.state.celsiusOn ? <span>C</span> : <span>F</span>}</h2> 
                        </div>
                        <div>
                        <h2 id='hilotemp'>{this.state.loading ? <span>Data</span> : <span>{this.state.lowTemp}° / {this.state.highTemp}°</span>}</h2> 
                        </div>
                    </div>    
                    <br></br>
                    <hr />
                    <table class="WeatherData">
                       
                        <tr class = "data">
                            <td>{this.state.loading ? <td>Data</td> : <td>{this.state.humidity}%</td>}</td>
                            <td>{this.state.loading ? <td>Data</td> : <td>{this.state.windSpeed}km</td>}</td>
							<td id='hilotemps'>{this.state.loading ? <td>Data</td> : <td>{this.state.highTemp}° / {this.state.lowTemp}°</td>}</td>
							<td>{this.state.loading ? <td>Data</td> : <td>{this.state.visibility}m</td>}</td>
                        </tr> 
                        <tr class = "attribute">
                            <td>Humidity</td>
                            <td>Wind speed</td>
							<td>Hi/Lo Temp</td>
							<td>Visibility</td>
                        </tr>
                    </table>
                </div>
                
                <div id="d2">
                    <div id="d2sContainer">
                        <div className='d2s'><h4>Day1</h4><img src='http://openweathermap.org/img/w/01n.png'></img> <h4>Space</h4></div>
                        <div className='d2s'><h4>Day2</h4><img src='http://openweathermap.org/img/w/01n.png'></img> <h4>Space</h4></div>
                        <div className='d2s'><h4>Day3</h4><img src='http://openweathermap.org/img/w/01n.png'></img> <h4>Space</h4></div>
                        <div className='d2s'><h4>Day4</h4><img src='http://openweathermap.org/img/w/01n.png'></img> <h4>Space</h4></div>
                        <div className='d2s'><h4>Day5</h4><img src='http://openweathermap.org/img/w/01n.png'></img> <h4>Space</h4></div>
                    </div>
                </div>

                <div id="clear"></div>

				<div id="d3">
                    <h3>Perfect weather for:</h3>
					<table>
                        <tr>
                           <td id="perfect"><img src={this.state.sport1} width={75} height={75} alt="No sports recommended"></img></td> 
                           <td id="perfect"><img src={this.state.sport2} width={75} height={75} alt="No sports recommended"></img></td>
                           <td id="perfect"><img src={this.state.sport3} width={75} height={75} alt="No sports recommended"></img></td>
                        </tr>
                    </table>
					</div>
				</div>
        );
    };
}
export default Mainpage;
