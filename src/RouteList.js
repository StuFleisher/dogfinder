import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./DogList";
import DogDetailsPage from "./DogDetailsPage";


/** Handles routing for the application
 *
 * State:none
 * Props:none
 *
 * App --> RouteList --> {DogList, DogDetails}
 *
 */

function RouteList({dogs}) {
  return (
    <Routes>
      <Route element={<DogList dogs={dogs} />} path="/"  />
      <Route element={<DogDetailsPage />} path="/dogs/:name" />
      <Route element={<Navigate to="/" />} path="*" />
    </Routes>
  );
}

export default RouteList;