import React from "react";

const styles = { button: { marginTop: "10px" } };

export const Button = (props) => {
  const onClick = () => {
    let json = JSON.stringify(props.free);
    console.log(json);
    console.log(props.free);
    fetch("http://localhost:4000", {
      method: "POST",
      body: json,
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        if (res.status) {
          console.log("Запрос на сервер отправлен!");
        }
      });
  };

  return (
    <button style={styles.button} onClick={onClick}>
      Confirm
    </button>
  );
};
