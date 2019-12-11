import React, { useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";
import { store } from "../store/store";

const Navbar = props => {
  const { location } = props;
  const globalState = useContext(store);
  const { isAuth } = globalState.state;
  console.log("this is from navbar ", isAuth);
  return (
    <Menu style={{ marginBottom: "0" }} size="large" stackable position="right">
      <Menu.Item>
        <img alt="app logo" src="https://react.semantic-ui.com/logo.png" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item
          name="login"
          as={Link}
          to="/login"
          active={location.pathname === "/"}
        >
          Login
        </Menu.Item>

        {isAuth ? (
          <Menu.Item
            name="photos"
            as={Link}
            to="/trivia"
            active={location.pathname === "/trivia"}
          >
            Trivia
          </Menu.Item>
        ) : null}
      </Menu.Menu>
    </Menu>
  );
};

export default withRouter(Navbar);
