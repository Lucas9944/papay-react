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

export function HomePage() {
  useEffect(() => {
    console.log("componentDidMount => Data fetch");

    return () => {
      console.log("componentDidMount process");
    };
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
