import React from "react";

const FiveDayForecast = ({
  celsiusOn,
  day1,
  day1img,
  day1temp,
  day2,
  day2img,
  day2temp,
  day3,
  day3img,
  day3temp,
  day4,
  day4img,
  day4temp,
  day5,
  day5img,
  day5temp,
}) => (
  <div id="d2">
    <div id="d2sContainer">
      <div className="d2s">
        <h4>{day1}</h4>
        <img src={day1img}></img>
        <h4 className="d2stemp">
          {celsiusOn ? (
            <h4> {day1temp} </h4>
          ) : (
            <h4> {Math.round(day1temp * 1.8 + 32)}</h4>
          )}
        </h4>{" "}
      </div>
      <div className="d2s">
        <h4>{day2}</h4>
        <img src={day2img}></img>
        <h4 className="d2stemp">
          {celsiusOn ? (
            <h4> {day2temp} </h4>
          ) : (
            <h4> {Math.round(day2temp * 1.8 + 32)}</h4>
          )}
        </h4>
      </div>
      <div className="d2s">
        <h4>{day3}</h4>
        <img src={day3img}></img>
        <h4 className="d2stemp">
          {celsiusOn ? (
            <h4> {day3temp} </h4>
          ) : (
            <h4> {Math.round(day3temp * 1.8 + 32)}</h4>
          )}
        </h4>
      </div>
      <div className="d2s">
        <h4>{day4}</h4>
        <img src={day4img}></img>
        <h4 className="d2stemp">
          {celsiusOn ? (
            <h4> {day4temp} </h4>
          ) : (
            <h4> {Math.round(day4temp * 1.8 + 32)}</h4>
          )}
        </h4>
      </div>
      <div className="d2s">
        <h4>{day5}</h4>
        <img src={day5img}></img>
        <h4 className="d2stemp">
          {celsiusOn ? (
            <h4> {day5temp} </h4>
          ) : (
            <h4> {Math.round(day5temp * 1.8 + 32)}</h4>
          )}
        </h4>
      </div>
    </div>
  </div>
);

export default FiveDayForecast;
