import React from "react";
import styles from "./Cardlist.module.css";
import cx from "classnames";
const CardList = ({ cc }) => {
  console.log(cc.length);
  const help2 = () => {
    return (
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Hey Fella!</h4>
        <hr />
        <p class="mb-0">Unable to find result for your current query.</p>
      </div>
    );
  };

  const helper =
    cc.length === 0
      ? help2()
      : cc.map((c) => {
          return (
            <div className={cx("card", styles.pad)} key={c.name}>
              <div className="card-body">
                <h1 className="card-title">{c.name}</h1>
                <h4
                  class={("card-subtitle mb-2 text-muted", styles.pad2)}
                >{`Rating : ${c.rating}/5.0`}</h4>
                <h4
                  class={cx("card-subtitle mb-2 text-muted", styles.pad2)}
                >{`Duration : ${c.hours} Hours`}</h4>
                <h2 className="card-text">Description</h2>
                <h5 className="card-text">{c.des}</h5>
                <a href={c.url} className={cx("btn btn-dark", styles.f)}>
                  <h3 className="justify-content-center">Visit Course Page</h3>
                </a>
              </div>
            </div>
          );
        });

  return <div>{helper}</div>;
};

export default CardList;
