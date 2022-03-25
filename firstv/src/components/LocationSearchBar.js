import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../contexts/locationContext";

const LocationSearchBar = () => {
  const navigate = useNavigate();
  const { setLocation } = useContext(LocationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchTerm = formData.get("postcode-search");
    setLocation(searchTerm);
    navigate("/");
  };

  return (
    <form id="locationInput" onSubmit={handleSubmit}>
      <input
        type="text"
        name="postcode-search"
        id="postcode-search"
        placeholder="Enter the postcode..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LocationSearchBar;
