
function DogDetails({ dog }) {

  //TODO: WHY DID WE NOT NEED "../public" for source images
  return (
    <div className="dog">
      <img src={`/${dog.src}.jpg`} />
      <h3> {dog.name} </h3>
      <p> {dog.age} years</p>
      <ul>
        {dog.facts.map(fact => {
          return <li> {fact} </li>;
        })}
      </ul>

    </div>

  );
}

export default DogDetails;