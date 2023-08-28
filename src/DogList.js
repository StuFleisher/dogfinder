import React from "react";
import { useState } from "react";
import { getAllDogs } from "./helpers";

function DogList() {

  const [dogList, setDogList] = useState(
    {
      isLoading: true,
      dogs: null
    }
  );

  async function getDogList() {
    const dogs = await getAllDogs();

    setDogList({
      isLoading: false,
      dogs: dogs
    });
  }

  if (dogList.isLoading) {
    getDogList();
  }


  console.log("dogList.dogs",dogList.dogs)


  return (
    <div>
      {/* {dogList.dogs.map(dog=>dog.name)} */}
    </div>
  );
}

export default DogList;