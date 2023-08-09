/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { BestRestaurants } from "./bestRestaurants";
import { TopRestaurants } from "./topRestaurants";
import { Statistics } from "./statistics";
// import { BestDishes } from "./bestDishes";
import { Advertisements } from "./advertisements";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import "../../../css/home.css";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  setBestRestaurants,
  setTopRestaurants,
} from "../../screens/HomePage/slice";
import { retrieveTopRestaurants } from "../../screens/HomePage/selector";
import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  // action dispach hosil qilinib uni interface si ko'rsatilyapti
  setTopRestaurants: (data: Restaurant[]) => dispach(setTopRestaurants(data)),
  // setTopRes ga Resta array type data berilyapti
  // u data setTopRes ichiga yuborilyapti
  // kelgan data slice ichida action playloadda o'zgartirilyapti
  setBestRestaurants: (data: Restaurant[]) => dispach(setBestRestaurants(data)),
});

export function HomePage() {
  /** INITIALIZATION */
  const { setTopRestaurants, setBestRestaurants } = actionDispatch(
    useDispatch()
  );

  //useEff doim syncrenis bo'lishi kk shu un then catch ish, async await emas!
  useEffect(() => {
    // backend data request => data
    const restaurantService = new RestaurantApiService();
    restaurantService
      .getTopRestaurants()
      .then((data) => {
        setTopRestaurants(data);
      })
      .catch((err) => console.log(err));

    restaurantService
      .getRestaurants({ page: 1, limit: 4, order: "mb_point" })
      .then((data) => {
        setBestRestaurants(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      {/* <BestDishes /> */}
      <Advertisements />
      <Events />
      <Recommendations />
    </div>
  );
}
