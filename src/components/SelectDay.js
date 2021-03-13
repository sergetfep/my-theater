import React, { useState } from "react";
import styles from "../components/CinemaHall/CinemaHall.module.css";

export const SelectDay = () => {
  let [select, setSelect] = useState();

  let onChange = (e) => {
    let selected = e.currentTarget.value;
    setSelect(selected);
  };

  return (
    <form className={styles.select}>
      <select name="select" value={select} onChange={onChange}>
        <option value="Today">Today</option>
        <option value="Tomorrow">Tomorrow</option>
        <option value="Day after tomorrow">Day after tomorrow</option>
      </select>
    </form>
  );
};
