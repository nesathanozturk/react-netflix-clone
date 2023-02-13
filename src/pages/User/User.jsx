import { useState } from "react";
import useAuthContext from "../../hooks/use-auth-context";
import Home from "../Home/Home";
import { Link } from "react-router-dom";
import "../../styles/user.scss";
import profilePicture from "../../assets/images/profile-picture.webp";

function User() {
  const { username } = useAuthContext();
  const [homeScreen, setHomeScreen] = useState(false);

  return (
    <>
      {homeScreen === false ? (
        <div className="container">
          <div className="wrapper">
            <div className="user">
              <h1>Kim izliyor?</h1>
              <Link to="/home">
                <img
                  src={profilePicture}
                  alt="Avatar"
                  onClick={() => setHomeScreen(true)}
                />
              </Link>
              <h2>{username}</h2>
            </div>
          </div>
        </div>
      ) : (
        <Home />
      )}
    </>
  );
}

export default User;
