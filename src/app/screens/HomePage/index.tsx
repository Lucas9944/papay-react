/* eslint-disable react/jsx-no-undef */

import React from "react";
import { Advertisements } from "./advertisements";
import { BestDishes } from "./bestDishes";
import { BestRestaurants } from "./bestRestaurants";
import { Events } from "./events";
import { Recommenddations } from "./recommendations";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import '../../../css/home.css';

export function HomePage() {
  return (
    <div className="homepage">
      <Statistics />
      <TopRestaurants />
      <BestRestaurants />
      <BestDishes />
      <Advertisements />
      <Events />
      <Recommenddations/>
    </div>
  );
}
