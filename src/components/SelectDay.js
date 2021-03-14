import React from "react";
import styles from "../components/CinemaHall/CinemaHall.module.css";

export const SelectDay = (props) => {
  let onChange = (e) => {
    let day = e.currentTarget.value;
    props.free.select = Number(day);
    console.log("day", day);
    props.setFree({ ...props.free });
  };

  return (
    <form className={styles.select}>
      <select name="select" value={props.free.select} onChange={onChange}>
        <option value={0}>Today</option>
        <option value={1}>Tomorrow</option>
        <option value={2}>Day after tomorrow</option>
      </select>
    </form>
  );
};

// let selected = e.currentTarget.value;
//     props.setFree(
//       { ...props.free },days: [
//         select: selected,
//         {
//           [...value],
//         }
//       ]
//     );

//value={props.free.days.select
