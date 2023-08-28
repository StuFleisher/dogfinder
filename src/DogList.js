import React from "react";
import { useState } from "react";
import { getAllDogs } from "./helpers";
import DogDetails from "./DogDetails";

function DogList({dogs}) {


  return (
    <div className>

      {dogs.map(dog=>{
       return <DogDetails dog={dog}/>
      })}

    </div>
  );
}

export default DogList;