import React from "react";
import { Square } from "../Square";
//import styles from "./CinemaHall.module.css";

export const CinemaHall = (props) => {
  console.log(props.free);
  const currentDay = props.free.days.find(
    (day) => day.date === props.free.select
  );

  return (
    <div className="CinemaHall">
      {currentDay?.values.map((sq, i) => (
        <Square
          key={i}
          free={props.free}
          setFree={props.setFree}
          index={i}
          value={sq}
          values={currentDay.values}
        />
      ))}
    </div>
  );
};
