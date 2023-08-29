import React from "react";
import { useParams, Navigate } from "react-router-dom";
import DogImage from "./DogImage";
//TODO: when do you need to import react?

/** Renders details about a specific dog pulled from the url params
 * or redirects to /dogs if not found
 *
 PROPS: dogs ( a list of dog objects)
 *    [{name, src, age, ["fact1","fact2",...]}, ...]
 *
 * STATE: none
 *
 * RouteList --> DogDetails
 */

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find(
    dog => dog.name === name
  );

  if (!dog){
    return <Navigate to="/dogs"/>
  }

  //TODO: WHY DID WE NOT NEED "../public" for source images
  return (
    <div className="DogDetails">
      <DogImage dog={dog}/>
      <h3 className="DogDetails-name"> {dog.name} </h3>
      <p className="DogDetails-age"> {dog.age} years</p>
      <ul className="DogDetails-facts">
        {dog.facts.map((fact, idx) => {
          return <li key={idx}> {fact} </li>;
        })}
      </ul>
    </div>
  );
}

export default DogDetails;