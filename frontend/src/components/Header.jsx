import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { logout } from "../services/authenticate";

export function Header({ userEmail }) {
  // Function to move to between pages
  let navigate = useNavigate();

  const routeHome = () => {
    navigate(`/dashboard`);
  };

  const executeCognitoLogout = () => {
    logout();
  };

  return (
    <div className="fixed-top text-center p-2">
      <div className="card">
        <div className="row">
          <div className="col-1">
            <button className="btn btn-warning" onClick={routeHome}>
              Home
            </button>
          </div>
          <div className="col-5"></div>
          <div className="col-6 justify-right">
            <div className="row justify-content-center">
              <div className="col-4">
                <button
                  className="btn btn-warning justify-right"
                  onClick={executeCognitoLogout}
                >
                  Logout
                </button>
              </div>
              <div className="col-6">
                <p className="justify-right">Welcome back: {userEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// To enable static typing for my props for the Header :)
Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};
