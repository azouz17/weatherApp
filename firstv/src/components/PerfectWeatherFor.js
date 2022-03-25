import React from "react";

const PerfectWeatherFor = ({ sport1, sport2, sport3 }) => (
  <div id="d3">
    <h3>Perfect weather for:</h3>
    <table>
      <tr>
        <td id="perfect">
          <img
            src={sport1}
            width={75}
            height={75}
            alt="No sports recommended"
          ></img>
        </td>
        <td id="perfect">
          <img
            src={sport2}
            width={75}
            height={75}
            alt="No sports recommended"
          ></img>
        </td>
        <td id="perfect">
          <img
            src={sport3}
            width={75}
            height={75}
            alt="No sports recommended"
          ></img>
        </td>
      </tr>
    </table>
  </div>
);

export default PerfectWeatherFor;
