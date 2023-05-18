import React from "react";

const Login = () => {
  return (
    <div className="center">
      <div>
        <pre className="multiline-label" style={{ fontSize: "0.8vw" }}>
          CCCCCCCCCCCCC LLLLLLLLLLL IIIIIIIIII RRRRRRRRRRRRRRRRR
          PPPPPPPPPPPPPPPPP GGGGGGGGGGGGG
          <br /> CCC::::::::::::C L:::::::::L I::::::::I R::::::::::::::::R
          P::::::::::::::::P GGG::::::::::::G
          <br /> CC:::::::::::::::C L:::::::::L I::::::::I R::::::RRRRRR:::::R
          P::::::PPPPPP:::::P GG:::::::::::::::G
          <br /> C:::::CCCCCCCC::::C LL:::::::LL II::::::II RR:::::R R:::::R
          PP:::::P P:::::P G:::::GGGGGGGG::::G
          <br /> C:::::C CCCCCC L:::::L I::::I R::::R R:::::R P::::P P:::::P
          G:::::G GGGGGG
          <br /> C:::::C L:::::L I::::I R::::R R:::::R P::::P P:::::P G:::::G
          <br /> C:::::C L:::::L I::::I R::::RRRRRR:::::R P::::PPPPPP:::::P
          G:::::G
          <br /> C:::::C L:::::L I::::I R:::::::::::::RR P:::::::::::::PP
          G:::::G GGGGGGGGGG
          <br /> C:::::C L:::::L I::::I R::::::RRRRRR:::::R P::::PPPPPPPPP
          G:::::G G::::::::G
          <br /> C:::::C L:::::L I::::I R::::R R:::::R P::::P G:::::G GGGGG::::G
          <br /> C:::::C L:::::L I::::I R::::R R:::::R P::::P G:::::G G::::G
          <br /> C:::::C L:::::L I::::I R::::R R:::::R P::::P G:::::G G::::G
          <br /> C:::::C CCCCCC L:::::L LLLLLL I::::I R::::R R:::::R P::::P
          G:::::G GGGGG::::G
          <br /> C:::::CCCCCCCC::::C LL:::::::LLLLLLLLL:::::L II::::::II
          RR:::::R R:::::R PP::::::PP G:::::GGGGGGGG::::G
          <br /> CC:::::::::::::::C L::::::::::::::::::::::L I::::::::I R::::::R
          R:::::R P::::::::P GG:::::::::::::::G
          <br /> CCC::::::::::::C L::::::::::::::::::::::L I::::::::I R::::::R
          R:::::R P::::::::P GGG::::::GGG:::G
          <br /> CCCCCCCCCCCCC LLLLLLLLLLLLLLLLLLLLLLLL IIIIIIIIII RRRRRRRR
          RRRRRRR PPPPPPPP GGGGGG GGGG
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
          required
        />
        <div>
          <button
            id="login_btn"
            style={{ marginTop: "1vh", fontSize: "1.5vw", width: "10vw" }}
          >
            Login
          </button>
          <button
            id="register_btn"
            style={{ marginTop: "1vh", fontSize: "1.5vw", width: "10vw" }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
