import { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import "../styles/Login.css";

import userpool from "./userpool";

// DEPRECATED, NOW LEVERAGING COGNITO HOSTED UI TO REGISTER

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const formInputChange = (formField, value) => {
    if (formField === "email") {
      setEmail(value);
    }
    if (formField === "password") {
      setPassword(value);
    }
    if (formField === "name") {
      setName(value);
    }
  };

  const validation = () => {
    return new Promise((resolve, reject) => {
      if (email === "") {
        setEmailErr("Email is Required");
        resolve({
          email: "Email is Required",
          name: "",
          password: "",
        });
      } else if (name === "") {
        setNameErr("Name is required");
        resolve({ name: "Name is Required", email: "", password: "" });
      } else if (password === "") {
        setPasswordErr("Password is required");
        resolve({ email: "", password: "Password is required" });
      } else if (password.length < 6) {
        setPasswordErr("must be 6 character");
        resolve({ email: "", name: "", password: "must be 6 character" });
      } else {
        resolve({ email: "", name: "", password: "" });
      }
      reject("");
    });
  };

  const handleClick = (e) => {
    setEmailErr("");
    setPasswordErr("");
    validation()
      .then(
        (res) => {
          if (res.email === "" && res.password === "") {
            const attributeList = [];
            attributeList.push(
              new CognitoUserAttribute({
                Name: "email",
                Value: email,
              })
            );
            attributeList.push(
              new CognitoUserAttribute({
                Name: "name",
                Value: name,
              })
            );
            let username = email;
            userpool.signUp(
              username,
              password,
              attributeList,
              null,
              (err, data) => {
                if (err) {
                  console.log(err);
                  alert(`Couldn't sign up: ${err.message}`);
                } else {
                  console.log(data);
                  alert("User Added Successfully");
                  navigate("/dashboard");
                }
              }
            );
          }
        },
        (err) => {
          console.log(err);
          alert(`Couldn't sign up: ${err.message}`);
        }
      )
      .catch((err) => console.log(err));
  };

  const goToHome = () => {
    navigate(`/home`);
  };

  return (
    <div className="register">
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
            value={name}
            onChange={(e) => formInputChange("name", e.target.value)}
            label="Name"
            helperText={nameErr}
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
            Register
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
        {/* </form> */}
      </div>
    </div>
  );
};

export default Register;
