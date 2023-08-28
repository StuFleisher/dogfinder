import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import { getAllDogs } from "./helpers";

/** Handles routing for the application
 *
 * State:none
 * Props:none
 *
 * App --> RouteList --> {DogList, DogDetails}
 *
 */

function RouteList() {
  return (
    <Routes>
      <Route element={<DogList />} path="/" />
      <Route element={<DogDetails />} path="/dogs/:name" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RouteList;