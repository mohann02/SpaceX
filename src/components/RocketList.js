import React, { useState, useEffect } from "react";
import "./Rocketlist.css";
import Card from "./Card";
// import Header from "./Header"

const RocketList = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/rockets");
        const data = await response.json();
        setRockets(data);
      } catch (error) {
        console.error("Error fetching rockets:", error);
      }
    };

    fetchRockets();
  }, []);

  return (
    <>
      <div className="head1">
        <div className="container">
          <div className="row">
            <div className="rockets">
              <h2>Rockets Encyclopedia</h2>
            </div>
            {rockets.map((rocket) => {
              return <Card rocket={rocket} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RocketList;
