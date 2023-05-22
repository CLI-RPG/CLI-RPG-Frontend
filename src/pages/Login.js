import React from "react";
import CryptoJS from "crypto-js";
import {useRef} from 'react';
import { useNavigate } from "react-router-dom";


const registerURL = 'auth/register';
const loginURL = 'auth/login';


const Login = () => {

  let navigate = useNavigate();

  function setToken(userToken) {
    sessionStorage.setItem('token', userToken)
  }

  const usernameR = useRef("");
  const passwordR = useRef("");

  function RegisterF(url) {
    let username = usernameR.current.value;
    console.log(username);

    let password = CryptoJS.SHA256(passwordR.current.value).toString(CryptoJS.enc.Base64);
    console.log(password);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    .then(response => {
        console.log(response.status);
    })
    .catch(error => {
        console.error(error);
    });
  }

  function LoginF(url) {

    let username = usernameR.current.value;
    console.log(username);

    let password = CryptoJS.SHA256(passwordR.current.value).toString(CryptoJS.enc.Base64);
    console.log(password);

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    })
    .then(response => {
        console.log(response.status);
        response.json().then(j => {
          console.log(j.token);
          setToken(j.token);
        });
        navigate('../select');
    })
    .catch(error => {
        console.error(error);
    });
  }

  return (
    <div className="center">
      <div>
        <pre className="multiline-label" style={{ fontSize: "0.8vw" }}>
<br />      CCCCCCCCCCCC    LLLLLLLLLLL              IIIIIIIIII                   RRRRRRRRRRRRRRRRR    PPPPPPPPPPPPPPPPP           GGGGGGGGGGGGG
<br />    CCC:::::::::::C   L:::::::::L              I::::::::I                   R::::::::::::::::R   P::::::::::::::::P       GGG::::::::::::G
<br />  CC:::::::::::::::C  L:::::::::L              I::::::::I                   R:::::RRRRRRR:::::R  P::::PPPPPPP:::::P    GG:::::::::::::::G
<br />  C:::::CCCCCCCC:::C  LL:::::::LL              II::::::II                   RR::::R     R:::::R  P::::P     P:::::P  G:::::GGGGGGGG::::G
<br />C:::::C       CCCCCC    L:::::L                  I::::I                     R:::::R     R:::::R  P::::P     P:::::P G:::::G       GGGGGG
<br />C:::::C                 L:::::L                  I::::I                     R:::::R     R::::R   P::::P     P:::::PG:::::G
<br />C:::::C                 L:::::L                  I::::I                     R:::::RRRRRRR:::R    P::::PPPPPPP::::P G:::::G
<br />C:::::C                 L:::::L                  I::::I   ---------------   R:::::::::::::RR     P:::::::::::::PP  G:::::G    GGGGGGGGGG
<br />C:::::C                 L:::::L                  I::::I   -:::::::::::::-   R::::RRRRRR:::::R    P::::PPPPPPPPP    G:::::G    G::::::::G
<br />C:::::C                 L:::::L                  I::::I   ---------------   R::::R     R:::::R   P::::P            G:::::G    GGGGG::::G
<br />C:::::C                 L:::::L                  I::::I                     R::::R     R:::::R   P::::P            G:::::G        G::::G
<br />C:::::C       CCCCCC    L:::::L         LLLLLL   I::::I                     R::::R     R:::::R   P::::P             G:::::G       G::::G
<br />  C:::::CCCCCCCC::::C  LL:::::::LLLLLLLLL:::::L II::::::II                 RR:::::R     R:::::R PP::::::PP            G:::::GGGGGGGG::::G
<br />  CC:::::::::::::::::C L::::::::::::::::::::::L I::::::::I                 R::::::R     R:::::R P::::::::P             GG:::::::::::::::G
<br />    CCC::::::::::::::C L::::::::::::::::::::::L I::::::::I                 R::::::R     R:::::R P::::::::P               GGG::::::GGG:::G
<br />        CCCCCCCCCCCCC  LLLLLLLLLLLLLLLLLLLLLLLL IIIIIIIIII                 RRRRRRRR     RRRRRRR PPPPPPPPPP                  GGGGGG   GGGG
        </pre>
      </div>
      <div className="login-form">
        <label style={{ fontSize: "1.5vw" }} htmlFor="username">
          Username:
        </label>
        <input
          style={{ fontSize: "1.5vw", width: "20vw" }}
          type="text"
          id="username"
          name="username"
          ref={usernameR}
          required
        />
        <label style={{ fontSize: "1.5vw" }} htmlFor="password">
          Password:
        </label>
        <input
          style={{ fontSize: "1.5vw", width: "20vw" }}
          type="password"
          id="password"
          name="password"
          ref={passwordR}
          required
        />
        <div>
          <button
            id="login_btn"
            style={{ marginTop: "1vh", fontSize: "1.5vw", width: "10vw" }}
            onClick={() => LoginF(loginURL)}
          >
            Login
          </button>
          <button
            id="register_btn"
            style={{ marginTop: "1vh", fontSize: "1.5vw", width: "10vw" }}
            onClick={() => RegisterF(registerURL)}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
