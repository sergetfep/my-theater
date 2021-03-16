import React from "react";
import styles from "../components/CinemaHall/CinemaHall.module.css";
import moment from "moment";

export const SelectDay = (props) => {
  let onChange = (e) => {
    let day = e.currentTarget.value;
    props.free.select = day;
    // console.log("day", day);
    // console.log("sdsd", props.free.days[0].date);
    props.setFree({ ...props.free });
  };

  return (
    <form className={styles.select}>
      <select name="select" value={props.free.select} onChange={onChange}>
        <option value={moment().format("l")}>Today</option>
        <option value={moment().add(1, "days").format("l")}>Tomorrow</option>
        <option value={moment().add(2, "days").format("l")}>
          Day after tomorrow
        </option>
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
