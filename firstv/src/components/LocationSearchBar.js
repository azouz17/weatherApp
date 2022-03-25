import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../contexts/locationContext";
const validPost1 = new RegExp('^[A-Za-z]{1}[0-9]{1,2}$');
const validPost2 = new RegExp('^[A-Za-z]{2}[0-9]{1,2}[A-Za-z]?$');

const LocationSearchBar = () => {
  const navigate = useNavigate();
  const { setLocation } = useContext(LocationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const searchTerm = formData.get("postcode-search");
    if(!validPost1.test(searchTerm) && !validPost2.test(searchTerm))
    {
      e.preventDefault();
      window.alert('Please enter a valid postcode');
    }
    else{
      setLocation(searchTerm);
      navigate("/");
    }
   
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
