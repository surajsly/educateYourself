import React from "react";

const About = () => {
  return (
    <React.Fragment>
      <div class="jumbotron">
        <h1 class="display-4">About Us !!</h1>
        <p class="lead">
          We are just two Web Developer who love to watch Rick and Morty!!!!!
        </p>
        <hr class="my-4" />

        <p class="lead">
          <a
            class="btn btn-dark"
            href="https://github.com/HimanshuGawri"
            role="button"
          >
            <i class="fa fa-github-alt fa-lg"> Himanshu </i>
          </a>
        </p>
        <p class="lead">
          <a
            class="btn btn-dark"
            href="https://github.com/surajsly"
            role="button"
          >
            <i class="fa fa-github-alt fa-lg"> Suraj Singh </i>
          </a>
        </p>
      </div>
    </React.Fragment>
  );
};

export default About;
