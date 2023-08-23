import React from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePausedOrders } from "../../../screens/OrdersPage/selector";
import { useSelector } from "react-redux";
import { Order } from "../../../../types/order";
import { Product } from "../../../../types/product";
import { serverApi } from "../../../../lib/config";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../../lib/sweetAlert";
import OrderApiService from "../../../apiServices/orderApiService";
import { verifyMemberData } from "../../../apiServices/verify";

/**REDUC SELECTOR */

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

const PausedOrders = (props: any) => {
  /**INITIALIZATIONS */
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  /**HANDLERS */

  const deleteOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "DELETED" };

      if (!verifyMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Buyurtmani bekor qilishni xohlaysizmi?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());

        //refresh
      }
    } catch (err) {
      console.log("deleteOrderHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };

  const processOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "PROCESS" };

      if (!verifyMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Buyurtmangizni tolashni tasdiqlaysizmi?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
        //refresh
      }
    } catch (err) {
      console.log("processOrderHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <TabPanel value="1">
      <Stack>
        {pausedOrders?.map((order: Order) => {
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
                <Box className="boxTotal">
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
                  <Box className="btn_actions">
                    <Button
                      value={order._id}
                      onClick={deleteOrderHandler}
                      className="btn_cancel"
                      color="error"
                      variant="contained"
                    >
                      Bekor Qilish
                    </Button>
                    <Button
                      value={order._id}
                      onClick={processOrderHandler}
                      className="btn_cancel"
                      variant="contained"
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
};

export default PausedOrders;
