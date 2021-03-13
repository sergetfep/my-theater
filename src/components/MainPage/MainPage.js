import React, { useState } from "react";
import { CinemaHall } from "../CinemaHall/CinemaHall";
import { SelectDay } from "../SelectDay";

export const MainPage = () => {
  let [free, setFree] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <div className="wrapper" style={{ padding: "10px" }}>
      <SelectDay />
      <CinemaHall free={free} setFree={setFree} />
    </div>
  );
};
