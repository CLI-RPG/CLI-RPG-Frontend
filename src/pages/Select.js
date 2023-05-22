import React from "react";
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Select = () => {

  let navigate = useNavigate();

  const rt_to_session_R = useRef("");
  const new_name_R = useRef("");
  const new_level_R = useRef("");
  const new_scenario_R = useRef("");
  const ReturnSelect_R = useRef("");

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  let ReturnToGameOptions = [{ value: '1', label: '1' }, { value: 2, label: 3 }];

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

    fetch("api/new_game", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': getToken()
      },
      body: JSON.stringify({
        "name": name,
        "level": parseInt(level),
        "scenario": scenario
      })
    })
      .then(response => {
        console.log(response.status);
        return response.text()
      })
      .then(id => {
        setSessionId(id.replace(/^"(.*)"$/, '$1'))
        navigate("../game")
      })
      .catch(error => {
        console.error(error);
      });
  }
  useEffect(() => {
    fetch("api/saved_games", {
      headers: {
        'x-access-token': getToken()
      }
    }).then(resp => resp.json())
      .then(l => setOptions(l))
      .catch(error => {
        console.error(error);
      });

  }, []);

  function handleChange(event) {
    const gid = event.target.value
    setSessionId(gid.replace(/^"(.*)"$/, '$1'))
    navigate("../game")
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
          <select style={{ fontSize: "1.5vw", width: "20vw" }} onChange={handleChange}>
            <option>--select an instance--</option>
            {options.map((option) => (
              <option value={option.value}>
                {option.label}
              </option>
            ))}
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
          <select style={{ fontSize: "1.5vw", width: "20vw" }} ref={new_level_R}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <label style={{ fontSize: "1.5vw" }}>Scenario:</label>
          <select style={{ fontSize: "1.5vw", width: "20vw" }} ref={new_scenario_R}>
            <option value="Warchasers">Warchasers</option>
            <option value="Rogue">Rogue</option>
            <option value="Beneath Apple Manor">Beneath Apple Manor</option>
            <option value="NetHack">NetHack</option>
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
