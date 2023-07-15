/* eslint-disable jsx-a11y/alt-text */
// import React, { useEffect, useRef, useState } from "react";
import { Box, Stack } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Button from "@mui/material/Button";

export function MySettings(props: any) {
  return (
    <Stack className={"my_settings_page"}>
      <Box className={"member_media_frame"}>
        <img
          src={"/icons/default_user.svg"}
          className={"mb_image"}
          style={{ borderRadius: "50%" }}
          width={"100px"}
          height={"100px"}
        />
        <div className={"media_change_box"}>
          <span>Rasm yuklash</span>
          <p>JPG, JPEG, PNG rasmlarni yuklay olasiz!</p>
          <div className={"up_del_box"}>
            <Button component="label" style={{ minWidth: "0" }}>
              <CloudDownloadIcon />
              <input type="file" hidden />
            </Button>
          </div>
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"long_input"}>
          <label className={"spec_label"}>Ism</label>
          <input
            type="text"
            className={"spec_input mb_nick"}
            placeholder="Xolmirzayev Otabek"
            name="mb_nick"
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"short_input"}>
          <label className={"spec_label"}>Telefon Raqam</label>
          <input
            type="text"
            className={"spec_input mb_phone"}
            placeholder="99893 417 84 25"
            name="mb_phone"
          />
        </div>

        <div className={"short_input"}>
          <label className={"spec_label"}>Manzil</label>
          <input
            type="text"
            className={"spec_input mb_address"}
            placeholder="Andijon, Semawko 4-1"
            name="mb_address"
          />
        </div>
      </Box>
      <Box className={"input_frame"}>
        <div className={"long_input"}>
          <label className={"spec_label"}>Ma'lumot</label>
          <textarea
            className={"spec_text_area mb_description"}
            placeholder="mavjud emas"
            name="mb_description"
          />
        </div>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} sx={{ mt: "25px" }}>
        <Button variant={"contained"}>Saqlash</Button>
      </Box>
    </Stack>
  );
}
