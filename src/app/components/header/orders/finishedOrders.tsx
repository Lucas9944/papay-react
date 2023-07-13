/* eslint-disable jsx-a11y/alt-text */
import { Box, Stack } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import React from "react";

const pausedOrders = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  
];

export default function FinishedOrders(props: any) {
  return (
    <TabPanel value={"3"}>
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
              <Box className={"total_price_box red_solid"}>
                <Box className={"boxTotal"} >
                    <p>mahsulot narhi</p>
                    <p>$17</p>
                    <img src="/icons/plus.svg" alt="" style={{ marginLeft: "20px"}} />
                    <p>yetkazib berish</p>
                    <p>$2</p>
                    <img src="/icons/pause.svg" 
                    style={{ marginLeft: "20px"}}
                    />
                    <p>jami narx</p>
                    <p>$24</p>
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
