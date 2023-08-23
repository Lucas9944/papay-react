import TabPanel from "@mui/lab/TabPanel/TabPanel";
import { Box, Stack } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { retrieveFinishedOrders } from "../../../screens/OrdersPage/selector";
import { useSelector } from "react-redux";
import { Order } from "../../../../types/order";
import { serverApi } from "../../../../lib/config";
import { Product } from "../../../../types/product";

/**REDUC SELECTOR */

const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({ finishedOrders })
);
const FinishedOrders = () => {

  /**INITIALIZATIONS */

  const { finishedOrders } = useSelector(finishedOrdersRetriever);
  return (
    <TabPanel value="3">
      <Stack>
        {finishedOrders?.map((order: Order) => {
          return (
            <Box className="order_main_box">
              <Box className="order_box_scroll">
                {order.order_items.map((item) => {
                  const product: Product = order.product_data.filter(
                    (ele) => ele._id === item.product_id
                  )[0];
                  const image_path = `${serverApi}/${product.product_images[0]}`;
                  return (
                    <Box className="ordersName_price">
                      <img
                        style={{
                          width: "50px",
                          height: "47px",
                          borderRadius: "29px",
                        }}
                        src={image_path}
                        alt=""
                        className="orderDishImg"
                      />
                      <p className="titleDish">{product.product_name}</p>
                      <Box className="priceBox">
                        <p> ${item.item_price}</p>
                        <p style={{ marginRight: "6px", marginLeft: "6px" }}>
                          {" "}
                          x
                        </p>
                        <p> {item.item_quantity}</p>
                        <p style={{ marginRight: "6px", marginLeft: "6px" }}>
                          {" "}
                          =
                        </p>
                        <p style={{ marginLeft: "15px" }}>
                          ${item.item_price * item.item_quantity}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total_price_box black_solid">
                <Box className="boxTotal finishedTotal">
                  <p>mahsulot narxi</p>
                  <p>${order.order_total_amount - order.order_delivery_cost}</p>
                  <p>+</p>
                  <p>yetkazish xizmati</p>
                  <p>${order.order_delivery_cost}</p>
                  <p>=</p>
                  <p>jami narx</p>
                  <p style={{ marginLeft: "20px" }}>
                    ${order.order_total_amount}
                  </p>
                  <p className="done">Delivered</p>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
};

export default FinishedOrders;
