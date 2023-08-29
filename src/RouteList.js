import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";


/** Handles routing for the application
 *
 * PROPS: dogs ( a list of dog objects)
 *    [{name, src, age, ["fact1","fact2",...]}, ...]
 *
 * STATE: none
 *
 * App --> RouteList --> {DogList, DogDetails}
 *
 */

function RouteList({ dogs }) {
  return (
    <Routes>
      <Route element={<DogList dogs={dogs} />} path="/dogs" />
      <Route element={<DogDetails dogs={dogs} />} path="/dogs/:name" />
      <Route element={<Navigate to="/dogs" />} path="*" />
    </Routes>
  );
}

export default RouteList;