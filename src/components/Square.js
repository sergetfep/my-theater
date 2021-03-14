import React from "react";
//import styles from "../components/CinemaHall/CinemaHall.module.css";

export const Square = (props) => {
  let className;

  const onClick = () => {
    props.values.splice(props.index, 1, !props.value);
    props.setFree({ ...props.free });
    // props.setFree([...props.free]);
  };

  if (props.value) {
    // !props.free
    className += " red";
  } else {
    className += " green";
  }
  console.log(className);
  return <div className={className} onClick={onClick}></div>;
};
//props.setFree(props.free.splice(props.index, 1, !props.value))
