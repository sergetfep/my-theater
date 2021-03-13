import React from "react";
import { Square } from "../Square";
//import styles from "./CinemaHall.module.css";

export const CinemaHall = (props) => {
  console.log(props.free);
  return (
    <div className="CinemaHall">
      {props.free?.map((sq, i) => (
        <Square
          key={i}
          free={props.free}
          setFree={props.setFree}
          index={i}
          value={sq}
        />
      ))}
    </div>
  );
};
