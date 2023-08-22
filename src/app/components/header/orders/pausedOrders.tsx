/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";

// REDUX
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievePausedOrders } from "../../../screens/OrdersPage/selector";

/** REDUX SELECTOR */
const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

export default function PausedOrders(props: any) {
  /** INITIALIZATIONS **/
  // const { pausedOrders } = useSelector(pausedOrdersRetriever);
  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order) => {
          return (
            <Box className={"order_main_box"}>
              <Box className={"order_box_scroll"}>
                {order.map((item) => {
                  const image_path = `/restaurant/qovurma.png`;
                  return (
                    <Box className={"ordersName_price"}>
                      <img src={image_path} className={"orderDish"} />
                      <p className="titleDish">Qovurma</p>
                      <Box className={"priceBox"}>
                        <p>$7</p>
                        <img src="/icons/Close.svg" alt="" />
                        <p>3</p>
                        <img src="/icons/pause.svg" alt="" />
                        <p style={{ marginLeft: "15px" }}> $22</p>
                      </Box>
                    </Box>
                  );
                })}
                <Box className={"total_price_box_3 "}>
                  <Box className={"boxTotal"}>
                    <p>mahsulot narhi</p>
                    <p>$17</p>
                    <img
                      src="/icons/plus.svg"
                      alt=""
                      style={{ marginLeft: "20px" }}
                    />
                    <p>yetkazib berish xizmati</p>
                    <p>$2</p>
                    <img
                      src="/icons/pause.svg"
                      style={{ marginLeft: "20px" }}
                    />
                    <p>jami narx</p>
                    <p>$24</p>

                    <Button
                      className={"button_red"}
                      sx={{
                        background: "rgba(209, 2, 2, 1)",
                        color: "white",
                      }}
                    >
                      Bekor qilish
                    </Button>
                    <Button
                      className={"button_blue"}
                      sx={{
                        background: "rgba(2, 136, 209, 1)",
                        color: "white",
                      }}
                    >
                      To'lash
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
}
