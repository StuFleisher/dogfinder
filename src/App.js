import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteList from './RouteList';
import Nav from './Nav';


/** Renders the nav bar and loads the Route List
 *
 * State:none
 * Props:none
 *
 * App --> {Nav, RouteList}
 */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
