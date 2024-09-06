import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { authenticate } from "../services/authenticate";
import "../styles/Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [loginErr, setLoginErr] = useState("");

  const formInputChange = (formField, value) => {
    if (formField === "email") {
      setEmail(value);
    }
    if (formField === "password") {
      setPassword(value);
    }
  };

  // Soft validations, as Cognito User Pool has advanced ones
  const validation = () => {
    return new Promise((resolve, reject) => {
      if (email === "" && password === "") {
        setEmailErr("Email is Required");
        setPasswordErr("Password is required");
        resolve({
          email: "Email is Required",
          password: "Password is required",
        });
      } else if (email === "") {
        setEmailErr("Email is Required");
        resolve({ email: "Email is Required", password: "" });
      } else if (password === "") {
        setPasswordErr("Password is required");
        resolve({ email: "", password: "Password is required" });
      } else {
        resolve({ email: "", password: "" });
      }
    });
  };

  const handleClick = () => {
    setEmailErr("");
    setPasswordErr("");
    validation()
      .then(
        (res) => {
          if (res.email === "" && res.password === "") {
            authenticate(email, password)
              .then(
                (data) => {
                  setLoginErr("");
                  navigate("/home");
                },
                (err) => {
                  console.log(err);
                  setLoginErr(err.message);
                }
              )
              .catch((err) => console.log(err));
          }
        },
        (err) => console.log(err)
      )
      .catch((err) => console.log(err));
  };

  const goToHome = () => {
    navigate(`/home`);
  };

  return (
    <div className="login">
      <Typography variant="h3">Login TODOs app</Typography>
      <div className="form">
        {/* <form className="form"> */}
        <div className="formfield">
          <TextField
            value={email}
            onChange={(e) => formInputChange("email", e.target.value)}
            label="Email"
            helperText={emailErr}
          />
        </div>
        <div className="formfield">
          <TextField
            value={password}
            onChange={(e) => {
              formInputChange("password", e.target.value);
            }}
            type="password"
            label="Password"
            helperText={passwordErr}
          />
        </div>
        <div className="formfield d-flex justify-content-around">
          <Button type="submit" variant="contained" onClick={handleClick}>
            Login
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={goToHome}
            className="btn"
          >
            Return
          </Button>
        </div>
        <Typography variant="body">{loginErr}</Typography>
        {/* </form> */}
      </div>
    </div>
  );
};

export default Login;
