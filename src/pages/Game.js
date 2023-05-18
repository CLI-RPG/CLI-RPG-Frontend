import React from "react";

const Game = () => {
  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <title>CLI_RPG Game</title>
        <link rel="stylesheet" type="text/css" href="../styles.css"></link>
      </head>
      <h1 className="center">Scenariu joc din DB</h1>
      <div className="container">
        <div className="column">
          <div className="row">
            <pre
              style={{
                width: "20vw",
                height: "20vh",
                border: "0.25vw solid #39ff14",
                fontSize: "1.5vw",
              }}
              id="label1"
            >
              lalal
            </pre>
          </div>
          <div className="row">
            <pre
              style={{
                width: "20vw",
                height: "40vh",
                border: "0.25vw solid #39ff14",
                fontSize: "1.5vw",
              }}
              id="label2"
            >
              lala
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
              }}
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
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
