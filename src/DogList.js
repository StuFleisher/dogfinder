import React from "react";
import DogImage from "./DogImage";
import { Link } from "react-router-dom";

/** Renders DogDetails for every dog in the dogs prop
 *
 * PROPS: dogs ( a list of dog objects)
 *    [{name, src, age, ["fact1","fact2",...]}, ...]
 *
 * STATE: none
 *
 * RouteList --> DogList
 */

function DogList({ dogs }) {
  return (
    <div className="DogList">

      {dogs.map(dog => {

        return (
        <Link to={`/dogs/${dog.name}`} key={dog.name}>
          <div className="DogSummary">
            <h3> {dog.name} </h3>
            <DogImage dog={dog}  />;
          </div>
        </Link>
        )

      })}

    </div>
  );
}

export default DogList;