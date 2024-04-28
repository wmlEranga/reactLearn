import React from "react";
import { BiSearch } from "react-icons/bi";
import { useEffect, useState } from "react";
import "../../Styles/Header/Header.css";

function Header() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  const timeString = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateString = currentTime.toLocaleDateString();

  return (
    <div className="header">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        ></input>
        <button className="search-button">
          {" "}
          <BiSearch />
        </button>
      </div>
      <div className="clock-container">
        <div className="time">{timeString}</div>
        <div className="date">{dateString}</div>
      </div>
    </div>
  );
}

export default Header;
