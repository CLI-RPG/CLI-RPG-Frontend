import React from "react";

const Select = () => {
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
            id="username"
            name="username"
            required
          />
          <label style={{ fontSize: "1.5vw" }}>Level:</label>
          <input
            style={{ fontSize: "1.5vw", width: "20vw" }}
            type="text"
            id="password"
            name="password"
            required
          />
          <label style={{ fontSize: "1.5vw" }}>Scenario:</label>
          <select style={{ fontSize: "1.5vw", width: "20vw" }}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
          <button
            style={{ marginTop: "1vh", fontSize: "1.5vw", width: "20vw" }}
          >
            Start Game
          </button>
        </div>
      </body>
    </html>
  );
};

export default Select;
