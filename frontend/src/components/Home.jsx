import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import appLogo1 from "../assets/todo-app-logo-1.png";
import { useEffect } from "react";
import userpool from "./userpool";
import globalPublicVars from "../GLOBAL_VARS";

const Home = () => {
  const navigate = useNavigate();
  const COGNITO_HOSTED_UI_ENDPOINT =
    globalPublicVars.VITE_COGNITO_HOSTED_UI_ENDPOINT;

  useEffect(() => {
    let user = userpool.getCurrentUser();
    console.log(`user is: ${JSON.stringify(user)}`);

    if (user) {
      navigate(`/dashboard`);
    }
  }, []);

  return (
    <div className="home">
      <Typography variant="h3">Welcome to your TODOs</Typography>
      <Typography variant="h5">Please login or register to continue</Typography>
      <img
        src={appLogo1}
        alt="App Logo Image 1"
        style={{
          width: "30%",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "20px",
        }}
      />
      <div className="homeButtons">
        <Button
          style={{ margin: "10px" }}
          variant="contained"
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
        <a href={COGNITO_HOSTED_UI_ENDPOINT}>
          <Button
            style={{ margin: "10px" }}
            variant="contained"
            // onClick={() => navigate("/register")}
          >
            Register
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Home;
