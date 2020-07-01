import React from "react";
import styles from "./Header.module.css";
import cx from "classnames";
import image from "../img/image.jpg";
const Header = () => {
  return (
    <div class={styles.section1}>
      <div class="container-fluid">
        <div class="row">
          <div class={cx("col-md-5 col-sm-12", styles.leftbox)} id="leftboxid">
            <h1>what are you doing ?</h1>
            <p className={styles.leftboxtext}>
              Many people think of “studying” as simply re-reading notes,
              textbooks, or other materials. But having the information right in
              front of us doesn’t force us to retrieve it from memory; instead,
              it allows us to trick ourselves into thinking we know something.
              Recalling information without supporting materials helps us learn
              it much more effectively.
              <strong class={styles.title}>Educate Yourself</strong> is a web
              app which finds the best courses online and direct user directly
              to the course page.
            </p>
            <a target="#searchId" class={styles.leftboxbutton} href="#searchId">
              Search ->
            </a>
          </div>

          <div
            class={cx(
              "col-md-5 col-sm-12 justify-content-center",
              styles.rightboximagewrap
            )}
          >
            <img class={styles.rightboximage} src={image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
