import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayButton, setDisplayButton] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    //if fields are empty should get error message
    if (
      email === "" ||
      username === "" ||
      password === "" ||
      confirmPassword === ""
      // ||password !== confirmPassword ||
      // password.length < 5 ||
      // confirmPassword.length < 5
    ) {
      setDisplayButton(false);
    } else {
      setDisplayButton(true);
    }
  }, [email, username, password, confirmPassword]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      password !== confirmPassword ||
      (password.length || confirmPassword.length) < 5
    ) {
      setError(true);
    }else{
      setError(false);
    }

    const data = {
      email: email,
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(data);
  };

  return (
    <div className="signupFrm">
      <form action="" className="form" onSubmit={submitHandler}>
        <h1 className="title">Sign up</h1>

        <div className="inputContainer">
          <input
            type="text"
            className="input"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="" className="label">
            Email
          </label>
        </div>

        <div className="inputContainer">
          <input
            type="text"
            className="input"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <label htmlFor="" className="label">
            Username
          </label>
        </div>

        <div className="inputContainer">
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="" className="label">
            Password
          </label>
        </div>

        <div className="inputContainer">
          <input
             type="password"
            className="input"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <label htmlFor="" className="label">
            Confirm Password
          </label>
        </div>
        {error && (
          <p style={{ color: "red" }}>
            Password and confirm passwords are not Matching or not satisfying required length!
          </p>
        )}
       
        {displayButton && (
          <input type="submit" className="submitBtn" value="Sign up" />
        )}
        
      </form>
    </div>
  );
}

export default App;
