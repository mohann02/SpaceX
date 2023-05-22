import React from "react";
import { Link } from "react-router-dom";

const Endpage = () => {
  return (
    <div className="endpage">
      <div className="banner_content">
        <div className="container">
          <div className="banner_text">
            <h3>RECENT LAUNCH</h3>
            <h1>STARLINK MISSION</h1>
            <div className="banner_btn">
              <button type="button" class="btn btn-smart">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="end-logo">
        <a>SPACEX © 2023</a>
        <a href="">TWITTER</a>
        <a href="">YOUTUBE</a>
        <a href="">INSTAGRAM</a>
        <a href="">FLICKR</a>
        <a href="">LINKEDIN</a>
        <a href="">PRIVACY POLICY</a>
        <a href=""> SUPPLIERS</a>
   
      </div>

    </div>
  );
};

export default Endpage;
