import React from "react";
import { useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const session = 'sid1';
const base = 'http://localhost:8000/api/';
const url = base + 'session_data/' + session;

function getToken() {
  const tokenString = sessionStorage.getItem('token')
  return tokenString
}

function getSessionId() {
  const sid = sessionStorage.getItem('sid')
  return sid
}

const Game = () => {

  let navigate = useNavigate();

  const CommandR = useRef("");

  const Scenario_R = useRef("");
  const Actions_R = useRef("");
  const Stats_R = useRef("");
  const Map_R = useRef("");
  const Response_R = useRef("");


  function dataGET() {
    fetch("http://localhost:8000/api/session_data/" + getSessionId(), {
      method: "GET",
      headers: {
        'x-access-token': getToken()
      }
    })
      .then(response => response.json())
      .then(gd => {
        Scenario_R.current.innerText = gd.name + "\n" + gd.scenarioID
        Stats_R.current.innerText = "health: " + gd.health + "\nattack: " + gd.attackPwr + "\nshield: " + gd.shield + "\nmoney: " + gd.money
        Map_R.current.innerText = gd.rendered_map

        Actions_R.current.innerText = ""

        for (const [k, v] of Object.entries(gd.actions)) {
          Actions_R.current.innerText += k + ": " + v + "\n"
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    dataGET();
  }, []);

  function SendAction() {
    let action = parseInt(CommandR.current.value)
    fetch("http://localhost:8000/api/act/" + getSessionId() + "/" + action, {
      method: "POST",
      headers: {
        'x-access-token': getToken()
      }
    }).then(resp => {
      if (resp.status == 410) {
        alert("YOU HAVE DIED")
        navigate("../select")
        return ""
      }
      return resp.text()
    }).then(txt => {
      if (txt != "") {
        Response_R.current.innerText = txt.replace(/^"(.*)"$/, '$1');
        dataGET()
      }
    })
  }

  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <title>CLI_RPG Game</title>
        <link rel="stylesheet" type="text/css" href="../styles.css"></link>
      </head>
      <h1 className="center" ref={Scenario_R} style={{ color: "#39ff14" }}>Scenariu joc din DB</h1>
      <div className="container">
        <div className="column">
          <div className="row">
            <pre
              style={{
                width: "20vw",
                height: "20vh",
                border: "0.25vw solid #39ff14",
                fontSize: "1vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              id="stats"
              ref={Stats_R}
            >
            </pre>
          </div>
          <div className="row">
            <pre
              style={{
                width: "20vw",
                height: "40vh",
                border: "0.25vw solid #39ff14",
                fontSize: "1.5vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              id="label2"
              ref={Actions_R}
            >
              lalala
            </pre>
          </div>
        </div>
        <div className="column">
          <div className="row">
            <pre
              style={{
                width: "110vh",
                height: "50vh",
                border: "0.25vw solid #39ff14",
                fontSize: "1.5vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              ref={Map_R}
              id="label3"
            >
              lala
            </pre>
          </div>
          <div className="row" style={{ width: "110vh", height: "15vh" }}>
            <div>
              <button
                style={{
                  height: "5vh",
                  width: "15%",
                  solid: "#39ff14",
                  fontSize: "1.5vw",
                }}
                onClick={() => {
                  SendAction()
                  dataGET()
                }}
              >
                ACT!
              </button>
              <label
                style={{
                  height: "5vh",
                  paddingLeft: "15%",
                  width: "80%",
                  fontSize: "1.5vw",
                }}
                ref={Response_R}
              >
                You did nothing!
              </label>
            </div>
            <div>
              <input
                style={{
                  marginTop: "2vh",
                  height: "5vh",
                  fontSize: "1.5vw",
                  width: "100%",
                }}
                type="text"
                id="command"
                ref={CommandR}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
