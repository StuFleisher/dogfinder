import React from "react";
import { Link } from "react-router-dom";


//TODO use NavLink instead of link
function Nav({ dogs }) {
  return dogs.map(dog => {
    return <Link key={dog.name} to={`/dogs/${dog.name}`}> {dog.name} </Link>;
  });
}

export default Nav;