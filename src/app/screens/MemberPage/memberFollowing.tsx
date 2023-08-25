/* eslint-disable jsx-a11y/alt-text */
// import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Dispatch } from "@reduxjs/toolkit";
import { setMemberFollowings } from "./slice";
import { retrieveMemberFollowings } from "./selector";
import { Following } from "../../../types/follow";

/** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowings: (data: Following[]) =>
    dispach(setMemberFollowings(data)),
});

/** REDUX SELECTOR */
const memberFollowingsRetriever = createSelector(
  retrieveMemberFollowings,
  (memberFollowings) => ({
    memberFollowings,
  })
);

const followings = [
  { mb_nick: "hedyatillo", following: true },
  { mb_nick: "mamarayim", following: false },
  { mb_nick: "timafey", following: true },
];

export function MemberFollowing(props: any) {
  /** INITIALIZATIONS **/
  const { setMemberFollowings } = actionDispatch(useDispatch());
  const { memberFollowings } = useSelector(memberFollowingsRetriever);
  return (
    <Stack>
      {followings.map((follower) => {
        const image_url = "/icons/default_user.svg";
        return (
          <Box className={"follow_box"}>
            <Avatar alt={""} src={image_url} sx={{ width: 89, height: 89 }} />
            <div
              style={{
                width: "400px",
                display: "flex",
                flexDirection: "column",
                marginLeft: "25px",
                height: "85%",
              }}
            >
              <span className={"username_text"}>User</span>
              <span className={"name_text"}>{follower.mb_nick}</span>
            </div>
            {props.actions_enabled && (
              <Button
                variant={"contained"}
                startIcon={
                  <img
                    src={"/icons/follow_icon.svg"}
                    style={{ width: "40px", marginLeft: "16px" }}
                  />
                }
                className={"follow_cancel_btn"}
              >
                Bekor Qilish
              </Button>
            )}
          </Box>
        );
      })}
    </Stack>
  );
}
