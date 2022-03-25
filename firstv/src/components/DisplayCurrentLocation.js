import React from "react";

const DisplayCurrentLocation = ({ city, country }) => (
  <div id="d1">
    <h2>
      Your current location is: <br />
      {city}, {country}
    </h2>
  </div>
);

export default DisplayCurrentLocation;
