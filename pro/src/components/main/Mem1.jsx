import React from "react";
import Card from "./Team";
import "./Team.css";

const Mem1 = () => {
  return (
    <>
      <div class="container">
        <h1>OUR TEAM</h1>
        <div className="row">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="row">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </>
  );
};

export default Mem1;
