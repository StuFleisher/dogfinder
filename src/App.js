import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './RouteList';
import Nav from './Nav';
import {getAllDogs} from './helpers'


/** Renders the nav bar and loads the Route List
 *
 * State:none
 * Props:none
 *
 * App --> {Nav, RouteList}
 */

function App() {

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
    return <p>loading..</p>
  }

  console.log("dogList.dogs",dogList.dogs)

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogList.dogs}/>
        <RouteList dogs={dogList.dogs} />
      </BrowserRouter>
    </div>
  );


}

export default App;
