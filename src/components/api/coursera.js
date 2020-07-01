//https://api.coursera.org/api/courses.v1/Gtv4Xb1-EeS-ViIACwYKVQ

import data from "../../data.json";

export default (term) => {
  const myFunction = (c) => {
    return c.keyword === term ? c : null;
  };

  const cources = data.data;
  const match = cources.map(myFunction);
  var filteredmatch = match.filter(function (el) {
    return el != null;
  });
  return filteredmatch;
};
