import React from "react";

/** A cute picture of a dog
 *
 * PROPS: dog
 *    {name, src, age, ["fact1","fact2",...]}
 *
 * STATE: none
 *
 * {DogList, DogDetails} --> DogImage
 */
function DogImage({dog}){
  return (
    <img src={`/${dog.src}.jpg`} className="DogDetails-image" alt={dog.name} />
  )

}

export default DogImage