import React from "react";

const MainInfo = ({
  loading,
  city,
  country,
  date,
  weatherIcon,
  weatherDesc,
  celsiusOn,
  feelsLikeTemp,
  feelsLikeTempF,
  highTemp,
  highTempF,
  lowTemp,
  lowTempF,
  humidity,
  windSpeed,
  visibility,
}) => (
  <div class="MainInfo">
    <div class="Location">
      <h3 id="locationCity">
        {" "}
        {loading ? (
          <h3>Loading...</h3>
        ) : (
          <h3>
            {city}, {country}
          </h3>
        )}
      </h3>
      <h4 id="locationTime">{date}</h4>
    </div>

    <div class="weatherIcon">
      <figure id="iconDescription">
        <img src={weatherIcon} alt="weather icon" />
        <figcaption id="weather-caption">{weatherDesc} </figcaption>
      </figure>
      <div>
        <h2 id="maintemp">
          {" "}
          {loading ? (
            <h2>Data</h2>
          ) : celsiusOn ? (
            <span>{feelsLikeTemp}°</span>
          ) : (
            <span> {feelsLikeTempF}° </span>
          )}{" "}
          {celsiusOn ? <span>C</span> : <span>F</span>}
        </h2>
      </div>
      <div>
        <h2 id="hilotemp">
          {loading ? (
            <span>Data</span>
          ) : celsiusOn ? (
            <span>
              {highTemp}° / {lowTemp}°{" "}
            </span>
          ) : (
            <span>
              {highTempF}° / {lowTempF}°{" "}
            </span>
          )}
        </h2>
      </div>
    </div>
    <br></br>
    <hr />
    <table class="WeatherData">
      <tr class="data">
        <td>{loading ? <td>Data</td> : <td>{humidity}%</td>}</td>
        <td>{loading ? <td>Data</td> : <td>{windSpeed}km</td>}</td>
        <td id="hilotemps">
          {loading ? (
            <td>Data</td>
          ) : celsiusOn ? (
            <td>
              {highTemp}° / {lowTemp}°{" "}
            </td>
          ) : (
            <td>
              {highTempF}° / {lowTempF}°{" "}
            </td>
          )}
        </td>
        <td>{loading ? <td>Data</td> : <td>{visibility}m</td>}</td>
      </tr>
      <tr class="attribute">
        <td>Humidity</td>
        <td>Wind speed</td>
        <td>Hi/Lo Temp</td>
        <td>Visibility</td>
      </tr>
    </table>
  </div>
);

export default MainInfo;
