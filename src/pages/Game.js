import React from "react";
import { useRef, useEffect } from 'react';

const session = 'sid1';
const base = 'http://localhost:8000/api/';
// const statsURL = base + 'player_stats/' + session;
const mapURL = base + 'map/' + session;

const url = 'session_data/' + session;

const Game = () => {
  const statsR = useRef("");
  const mapR = useRef("");

  // function statusGET() {
  //   fetch(statsURL, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(jsonObject => {
  //       let resultString = '';
  //       for (const [key, value] of Object.entries(jsonObject)) {
  //         resultString += key + '\t- ' + value + '\n';
  //       }
  //       console.log(resultString);
  //       statsR.current.innerText = '>>> STATS\n\n' + resultString;
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

  function mapGET() {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(jsonObject => {
        console.log(jsonObject);
        // const totalElements = jsonObject.length;
        // const rows = Math.ceil(Math.sqrt(totalElements));
        // const columns = Math.ceil(totalElements / rows);

        // const matrix = Array(rows).fill(0).map(() => Array(columns).fill(0));
        // let index = 0;
        // for (let i = 0; i < rows; i++) {
        //     for (let j = 0; j < columns; j++) {
        //         if (index < totalElements) {
        //             matrix[i][j] = jsonObject[index];
        //             index++;
        //         } else {
        //             break;
        //         }
        //     }
        // }
        
        // let matrixString = '';
        // for (let i = 0; i < rows; i++) {
        //     for (let j = 0; j < columns; j++) {
        //         matrixString += matrix[i][j].toString() + ' ';
        //     }
        //     matrixString += '\n';
        // }

        // console.log(matrixString);
        // mapR.current.innerText = matrixString;

      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    // statusGET();
    mapGET();
  }, []);

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
                fontSize: "1vw",
              }}
              id="stats"
              ref={statsR}
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
              ref={mapR}
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
                onClick={mapGET()}
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
