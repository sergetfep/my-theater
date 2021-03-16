import React, { useState } from "react";
import { CinemaHall } from "../CinemaHall/CinemaHall";
import { SelectDay } from "../SelectDay";
import { Button } from "../Button";
import moment from "moment";

export const MainPage = () => {
  //let text = text.replace(/,/g, "");
  // console.log("dd", moment().add(1, "days").format("l"));

  // let date = moment().add(1, "days").format("l");
  // let dateF = date.replace(/[^+\d]/g, "");
  // console.log("ff", date.replace(/,/g, ""));
  // console.log(typeof date);
  // console.log("gg", dateF);

  let today, tomorrow, dayAfterTomorrow;

  today = moment().format("l");

  tomorrow = moment().add(1, "days").format("l");

  dayAfterTomorrow = moment().add(2, "days").format("l");

  //console.log("sd", today, tomorrow, dayAfterTomorrow);
  //console.log("ddd", today);

  let [free, setFree] = useState({
    select: today,
    days: [
      {
        date: today,
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
        date: tomorrow,
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
        date: dayAfterTomorrow,
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
      <Button free={free} />
    </div>
  );
};
