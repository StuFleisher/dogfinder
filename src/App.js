import './App.css';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './RouteList';
import Nav from './Nav';
import { getAllDogs } from './helpers';


/** Pulls a list of dogs from the server then uses that data to render
 *  the nav bar and Route List
 *
 * State:none
 * Props:none
 *
 * App --> {Nav, RouteList}
 */

function App() {

  const [dogData, setDogData] = useState(
    {
      isLoading: true,
      dogs: null
    }
  );

  /** Pulls data from the server then updates the state */
  async function getDogData() {
    const dogs = await getAllDogs();

    setDogData({
      isLoading: false,
      dogs: dogs
    });
  }

  if (dogData.isLoading) {
    getDogData();
    return <p>loading..</p>;
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogs={dogData.dogs} />
        <RouteList dogs={dogData.dogs} />
      </BrowserRouter>
    </div>
  );


}

export default App;
