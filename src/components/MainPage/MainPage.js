import React, { useState } from "react";
import { CinemaHall } from "../CinemaHall/CinemaHall";
import { SelectDay } from "../SelectDay";

export const MainPage = () => {
  let [free, setFree] = useState({
    select: 0,
    days: [
      {
        date: 0,
        values: [
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
        ],
      },
      {
        date: 1,
        values: [
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
        ],
      },
      {
        date: 2,
        values: [
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
        ],
      },
    ],
  });
  return (
    <div className="wrapper" style={{ padding: "10px" }}>
      <SelectDay free={free} setFree={setFree} />
      <CinemaHall free={free} setFree={setFree} />
    </div>
  );
};
