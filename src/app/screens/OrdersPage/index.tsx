/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { Container, Stack, Box } from "@mui/material";
import "../../../css/order.css";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "../../components/header/orders/pausedOrders";
import ProcessOrders from "../../components/header/orders/processOrders";
import FinishedOrders from "../../components/header/orders/finishedOrders";

// REDUX
import { useDispatch } from "react-redux";
import { Restaurant } from "../../../types/user";
import { Dispatch } from "@reduxjs/toolkit";
import {
  setRandomRestaurants,
  setChosenRestaurant,
  setTargetProducts,
} from "../../screens/RestaurantPage/slice";
import { Order } from "../../../types/order";
import { setFinishedOrders, setPausedOrders, setProcessOrders } from "./slice";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispach(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispach(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispach(setFinishedOrders(data)),
});

export function OrdersPage() {
  /** INITIALIZATIONS **/
  const [value, setValue] = useState("1");
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());

  useEffect(() => {}, []);

  /** HANDLERS **/
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order_page">
      <Container
        maxWidth="lg"
        style={{ display: "flex", flexDirection: "row" }}
        sx={{ mt: "50px", mb: "50px" }}
      >
        <Stack className="order_left">
          <TabContext value={value}>
            <Box className={"order_nav_frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  value={value}
                  aria-label="basic tabs example"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Tab label="Buyurtmalarim" value={"1"} />
                  <Tab label="Jarayon" value={"2"} />
                  <Tab label="Yakunlangan" value={"3"} />
                </TabList>
                <div className="border_order"></div>
              </Box>
            </Box>
            <Stack className="order_main_content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="wrapp_two_stack">
          <Stack className={"order_right"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              className={"order_info_box"}
            >
              <div className={"order_user_img"}>
                <img
                  src="/icons/default_user.svg"
                  style={{
                    width: "117px",
                    height: "112px",
                  }}
                />
                <div className="order_user_icon_box">
                  <img
                    src="/icons/user_icon.svg"
                    alt=""
                    className="user_icon"
                  />
                </div>
              </div>
              <span className={"order_user_name"}>lucas</span>
              <span className={"order_user_prof"}>USER</span>
              <div className="border"></div>
              <div className={"order_user_address"}>
                <LocationOnIcon />
                <span className="spec_address_txt">manzil kiritilmagan</span>
              </div>
            </Box>
          </Stack>

          <Stack className={"order_right_2"}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              className={"order_info_box"}
            >
              <input
                type="text"
                name="card_number"
                placeholder="Card number : 5243 4090 2002 7495"
                className="card_input"
              ></input>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="text"
                  name="card_period"
                  placeholder="07 / 24"
                  className="card_half_input"
                />
                <input
                  type="text"
                  name="card_cvv"
                  placeholder="CVV : 010"
                  className="card_half_input"
                />
              </div>
              <input
                type="text"
                name="card_creator"
                placeholder="Umarov Abdulloh"
                className="card_input"
              ></input>

              <div className="cards_box">
                <img src="/icons/western_card.svg" />
                <img src="/icons/master_card.svg" />
                <img src="/icons/paypal_card.svg" />
                <img src="/icons/visa_card.svg" />
              </div>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
