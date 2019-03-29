import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "forestgreen", color: "white" }}
      className="jumbotron"
    >
      <h1> React Google Search </h1>
    </div>
  );
}

export default Jumbotron;