import React from "react";
import {useRef} from 'react';
import { useNavigate } from "react-router-dom";

const Select = () => {

  let navigate = useNavigate();

  const rt_to_session_R = useRef("");
  const new_name_R = useRef("");
  const new_level_R = useRef("");
  const new_scenario_R = useRef("");

  function getToken() {
    const tokenString = sessionStorage.getItem('token')
    return tokenString
  }

  function setSessionId(id) {
    sessionStorage.setItem('sid', id)
  }

  function newgame() {
    let name = new_name_R.current.value;
    let level = new_level_R.current.value;
    let scenario = new_scenario_R.current.value;

    console.log(name, level, scenario);

    fetch("http://localhost:8000/api/new_game", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'x-access-token': getToken()
      },
      body: JSON.stringify({
          "name": name,
          "level": level,
          "scenario": scenario
      })
    })
    .then(response => {
        console.log(response.status);
        return response.text()
    })
    .then(id => {
      setSessionId(id)
      navigate("../game")
    })
    .catch(error => {
        console.error(error);
    });
  }

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>CLI_RPC Select</title>
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </head>
      <body>
        <div className="login-form" style={{ paddingTop: "15vh" }}>
          <label style={{ fontSize: "3vw" }}>RETURN TO SESSION</label>
          <br />
          <select style={{ fontSize: "1.5vw", width: "20vw" }}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
          </select>
        </div>
        <div className="login-form" style={{ paddingTop: "15vh" }}>
          <label style={{ fontSize: "3vw" }}>NEW GAME</label>
          <label style={{ fontSize: "1.5vw" }}>Name:</label>
          <input
            style={{ fontSize: "1.5vw", width: "20vw" }}
            type="text"
            id="name"
            name="name"
            ref={new_name_R}
            required
          />
          <label style={{ fontSize: "1.5vw" }}>Level:</label>
          <input
            style={{ fontSize: "1.5vw", width: "20vw" }}
            type="text"
            id="level"
            name="level"
            ref={new_level_R}
            required
          />
          <label style={{ fontSize: "1.5vw" }}>Scenario:</label>
          <select style={{ fontSize: "1.5vw", width: "20vw" }} ref={new_scenario_R}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button
            style={{ marginTop: "1vh", fontSize: "1.5vw", width: "20vw" }}
            onClick={() => newgame()}
          >
            Start Game
          </button>
        </div>
      </body>
    </html>
  );
};

export default Select;
