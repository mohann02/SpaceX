import React, { useState, useEffect } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import RocketList from "./RocketList";

const SpaceXHeader = (props) => {
  const [rockets, setRockets] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/rockets");
        const data = await response.json();
        // console.log(data)
        setRockets(data);
      } catch (error) {
        console.error("Error fetching rockets:", error);
      }
    };

    fetchRockets();
  }, []);

  return (
    <>
    <div className="navbar">
    <div className="navbar_text sticky">
      
      <div className="logo"><img
      src="https://www.logo.wine/a/logo/SpaceX/SpaceX-Logo.wine.svg"
      alt="SpaceX Logo"/>
     
    </div>
    <ul>
      {rockets.map((rocket) => (
        <li key={rocket.id}>{rocket.name}</li>
      
      ))}
      <li onClick={()=>{navigate('/login')}}>Shop </li>
    </ul>
    
   
  </div>
 
  </div>
</>
  );
};

export default SpaceXHeader;
