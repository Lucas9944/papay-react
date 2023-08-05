/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-undef */

import React, { useEffect } from "react";
import { Advertisements } from "./advertisements";
import { BestDishes } from "./bestDishes";
import { BestRestaurants } from "./bestRestaurants";
import { Events } from "./events";
import { Recommondations } from "./recommendations";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import "../../../css/home.css";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
 
  setTopRestaurants,
} from "../../screens/HomePage/slice";
import { Restaurant } from "../../../types/user";
import {  retrieveTopRestaurants } from "./selector";
import { useDispatch, useSelector } from "react-redux";

/* REDUC SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
});

/* REDUX SELECTOR */

const topRestaurantRetriever = createSelector(
  retrieveTopRestaurants,
  (topRestaurants) => ({
    topRestaurants,
  })
);

export function HomePage() {
  /** INITIALIZE */
  const { setTopRestaurants } = actionDispatch(useDispatch());
  const { topRestaurants } = useSelector(topRestaurantRetriever);

  

  useEffect(() => {
    // backend data request => data
   
    setTopRestaurants([]);
  }, []);

  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommondations />
    </div>
  );
}
