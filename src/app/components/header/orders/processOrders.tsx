import TabPanel from "@mui/lab/TabPanel/TabPanel";
import { Box, Button, Stack } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import React from "react";
import { retrieveProcessOrders } from "../../../screens/OrdersPage/selector";
import { useSelector } from "react-redux";
import { Order } from "../../../../types/order";
import { serverApi } from "../../../../lib/config";
import { Product } from "../../../../types/product";
import moment from "moment";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../../../lib/sweetAlert";
import OrderApiService from "../../../apiServices/orderApiService";
import { verifiedMemberData } from "../../../apiServices/verify";

/**REDUC SELECTOR */

const processOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders })
);

const ProcessOrders = (props: any) => {
  /**INITIALIZATIONS */
  const { processOrders } = useSelector(processOrdersRetriever);
  /**HANDLERS */
  const finishedOrderHandler = async (event: any) => {
    try {
      const order_id = event.target.value;
      const data = { order_id: order_id, order_status: "FINISHED" };

      if (!verifiedMemberData) {
        sweetFailureProvider("Please login first", true);
      }

      let confirmation = window.confirm(
        "Buyurtmangizni qabul qilib olganingizni tasdiqlaysizmi?"
      );
      if (confirmation) {
        const orderService = new OrderApiService();
        await orderService.updateOrderStatus(data);
        props.setOrderRebuild(new Date());
        //refresh
      }
    } catch (err) {
      console.log("finishedOrderHandler, ERROR:", err);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <TabPanel value="2">
      <Stack>
        {processOrders?.map((order: Order) => {
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
                <Box className="boxTotal totalProcess">
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

                  <p className="data_comp">
                    {moment(order.createdAt).format("YY-MM-DD HH:mm")}
                  </p>

                  <Button
                    value={order._id}
                    onClick={finishedOrderHandler}
                    style={{
                      background: "#0288D1",
                      color: "#FFF",
                      borderRadius: "10px",
                      boxShadow:
                        "0px 4px 4px rgba(0,0,0,0.25), inset 0px 4px 4px rgba(0,0,0,0.25)",
                    }}
                    color="error"
                    variant="contained"
                  >
                    Yakunlash
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </TabPanel>
  );
};

export default ProcessOrders;
