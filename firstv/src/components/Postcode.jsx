import React, { useState } from "react";
import styles from "./style.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  useLocation,
} from "react-router-dom";
import LocationSearchBar from "./LocationSearchBar";
import DisplayCurrentLocation from "./DisplayCurrentLocation";

const Post = (props) => {
  const search = new URLSearchParams(useLocation().search);
  const city = search.get("city");
  const country = search.get("country");

  return (
    <div id="container">
      <h1>Tempthlete</h1>
      <div id="links">
        <Link to="/">Home</Link>
      </div>

      <div id="d2postcode">
        <h1>Change postcode</h1>
        <h4>
          You can change the current postcode that Tempthlete is retrieving
          weather information for.
        </h4>
        <h4>
          Please enter the first part of a UK postcode (e.g. for the postcode
          "E1 4NS" you would enter just "E1" without quotation marks)
        </h4>
        <LocationSearchBar />
      </div>

      <DisplayCurrentLocation city={city} country={country} />
    </div>
  );
};

export default Post;
