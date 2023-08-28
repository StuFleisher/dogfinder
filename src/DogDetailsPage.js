import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

function DogDetailsPage({dogs}) {
  const { dogName } = useParams();

  const dog = dogs.find (
    dog => dog.name === dogName
  )

  // return (
  //   <DogDetails dog={dog} />
  // );
}

export default DogDetailsPage;