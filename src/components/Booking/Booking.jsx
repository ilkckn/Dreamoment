import React from "react";
import { useId, useState, useEffect } from "react";
import booking from '../../assets/video/bookingVideo.mp4'
import "./Booking.css";

function Booking() {

    const location = useId();
    const distance = useId();
    const priceRange = useId();

    const [ cities, setCities ] = useState([]);
    const [ locationInput, setLocationInput ] = useState("");
    const [ distanceInput, setDistanceInput ] = useState("");
    const [ priceRangeInput, setPriceRangeInput ] = useState("");


  return (
    <div className="bookingContainer">
        <div className="background">
            <video autoPlay muted loop src={booking} type="video/mp4"></video>
        </div>
        <div className="darkBack"></div>
        <div className="texts">
            <h1>plan your travel with dreamoment</h1>
            <p>travel to your favorite city with respectful of the environment!</p>
        </div>
        <div className="searchCityBox">
            <div className="location">
                <label htmlFor={location}>location</label>
                <input type="text" id={location} value={locationInput} placeholder="Dream Destination"  onChange={(e) => setLocationInput(e.target.value)}/>
            </div>
            <div className="distance">
                <label htmlFor={distance}>distance</label>
                <label></label>
                <input type="text" id={distance} value={distanceInput} name="distance" placeholder="11/Meters" onChange={(e) => setDistanceInput(e.target.value)} />
            </div>
            <div className="priceRange">
                <label htmlFor={priceRange}>price range</label>
                <input type="number" id={priceRange} value={priceRangeInput} placeholder="€140-€500" onChange={(e) => setPriceRangeInput(e.target.value)}/>
            </div>
        </div>
    </div>
  );
}

export default Booking;
