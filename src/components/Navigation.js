import React from "react";
import styles from "./navigation.module.css";
import cx from "classnames";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className={cx("navbar-brand", styles.title)} href="#">
          Educate Yourself
        </a>
      </nav>
    );
  }
}

export default Navigation;
