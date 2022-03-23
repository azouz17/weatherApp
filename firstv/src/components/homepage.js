import  React from 'react';
import baseball from'../Icons/baseball.png';
import basketball from'../Icons/basketball.png';
import beachvolley from'../Icons/beachvolley.png';
import icehokey from'../Icons/icehokey.png';
import soccer from'../Icons/soccer.png';
import rowing from'../Icons/rowing.png';
import tennis from'../Icons/tennis.png';
import sailing from'../Icons/sailing.png';
import skiing from'../Icons/skiing.png';
import tabletennis from'../Icons/tabletennis.png';
import volleyball from'../Icons/volleyball.png';
import weightlifting from'../Icons/weightlifting.png';
import yachting from'../Icons/yachting.png';
import snowboarding from'../Icons/snowboarding.png';
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
      this.setState({sport1: baseball});
      this.setState({sport2: volleyball});
      this.setState({sport3: tabletennis});
      if(data.main.feels_like>303.15 && data.main.feels_like<313.15)
      {
         this.setState({sport1: beachvolley});
         this.setState({sport2: yachting});
         this.setState({sport3: sailing});
      }
      else if(data.main.feels_like>293.15 && data.main.feels_like<303.15)
      {
         this.setState({sport1: soccer});
         this.setState({sport2: rowing});
         this.setState({sport3: basketball});
      }
      else if(data.main.feels_like>278.15 && data.main.feels_like<293.15)
      {
         this.setState({sport1: weightlifting});
         this.setState({sport2: tennis});
         this.setState({sport3: basketball});
      }
      else if(data.main.feels_like>268.15 && data.main.feels_like<278.15)
      {
         this.setState({sport1: icehokey});
         this.setState({sport2: skiing});
         this.setState({sport3: snowboarding});
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

                <div id="d1">
                    <h3 id="cityheader"> {this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.city}, {this.state.country}</h3>}</h3>
                    <h4>{this.state.date}</h4>
                    <table>
                        <tr>
						<div class="weatherIconDiv">
                            <img src={this.state.weatherIcon} alt="weather icon"/>
						</div>
                            <td>Temperature</td>
                        </tr>
                        <tr>
                            <td>{this.state.weatherDesc}</td> 
                            <td id='maintemp'> {this.state.loading ? <td>Data</td> : this.state.celsiusOn ? <td>{this.state.feelsLikeTemp}°</td> : <td> {this.state.feelsLikeTempF}° </td>} {this.state.celsiusOn ? <td>Celsius</td> : <td>Fahrenheit</td>}</td>
                        </tr>
                    </table>
                    <br></br>
                    <hr />
                    <table id="d1otherinfo">
                        <tr>
                            <td>Humidity</td>
                            <td>Wind speed</td>
							<td>Hi/Lo Temp</td>
							<td>Visibility</td>
                        </tr>
                        <tr>
                            <td>{this.state.loading ? <td>Data</td> : <td>{this.state.humidity}%</td>}</td>
                            <td>{this.state.loading ? <td>Data</td> : <td>{this.state.windSpeed}km</td>}</td>
							<td id='hilotemps'>{this.state.loading ? <td>Data</td> : <td>{this.state.highTemp}° / {this.state.lowTemp}°</td>}</td>
							<td>{this.state.loading ? <td>Data</td> : <td>{this.state.visibility}m</td>}</td>
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
